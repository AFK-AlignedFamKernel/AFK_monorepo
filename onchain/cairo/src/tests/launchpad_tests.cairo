#[cfg(test)]
mod launchpad_tests {
    use afk::launchpad::launchpad::LaunchpadMarketplace::{Event as LaunchpadEvent};
    use afk::launchpad::launchpad::{
        ILaunchpadMarketplaceDispatcher, ILaunchpadMarketplaceDispatcherTrait,
    };
    use afk::tokens::erc20::{ERC20, IERC20, IERC20Dispatcher, IERC20DispatcherTrait};
    use afk::types::launchpad_types::{
        MINTER_ROLE, ADMIN_ROLE, StoredName, BuyToken, SellToken, CreateToken, LaunchUpdated,
        TokenQuoteBuyCoin, TokenLaunch, SharesTokenUser, BondingType, Token, CreateLaunch,
        SetJediwapNFTRouterV2, SetJediwapV2Factory, SupportedExchanges, LiquidityCreated,
        LiquidityCanBeAdded
    };
    use core::num::traits::Zero;
    use core::traits::Into;
    use openzeppelin::account::interface::{ISRC6Dispatcher, ISRC6DispatcherTrait};
    use openzeppelin::utils::serde::SerializedAppend;

    use snforge_std::{
        declare, ContractClass, ContractClassTrait, spy_events, SpyOn, EventSpy, EventFetcher,
        Event, EventAssertions, start_cheat_caller_address, cheat_caller_address_global,
        stop_cheat_caller_address, stop_cheat_caller_address_global, start_cheat_block_timestamp
    };
    use starknet::syscalls::deploy_syscall;

    use starknet::{
        ContractAddress, get_caller_address, storage_access::StorageBaseAddress,
        get_block_timestamp, get_contract_address, ClassHash, class_hash::class_hash_const
    };

    fn DEFAULT_INITIAL_SUPPLY() -> u256 {
        // 21_000_000 * pow_256(10, 18)
        100_000_000
    // * pow_256(10, 18)
    }

    // const INITIAL_KEY_PRICE:u256=1/100;
    const INITIAL_SUPPLY_DEFAULT: u256 = 100_000_000;
    const INITIAL_KEY_PRICE: u256 = 1;
    const STEP_LINEAR_INCREASE: u256 = 1;
    const THRESHOLD_LIQUIDITY: u256 = 10;
    const THRESHOLD_MARKET_CAP: u256 = 500;
    const MIN_FEE_PROTOCOL: u256 = 10; //0.1%
    const MAX_FEE_PROTOCOL: u256 = 1000; //10%
    const MID_FEE_PROTOCOL: u256 = 100; //1%
    const MIN_FEE_CREATOR: u256 = 100; //1%
    const MID_FEE_CREATOR: u256 = 1000; //10%
    const MAX_FEE_CREATOR: u256 = 5000; //50%
    // const INITIAL_KEY_PRICE: u256 = 1 / 10_000;
    // const THRESHOLD_LIQUIDITY: u256 = 10;
    // const THRESHOLD_LIQUIDITY: u256 = 10_000;

    const RATIO_SUPPLY_LAUNCH: u256 = 5;
    const LIQUIDITY_SUPPLY: u256 = INITIAL_SUPPLY_DEFAULT / RATIO_SUPPLY_LAUNCH;
    const BUYABLE: u256 = INITIAL_SUPPLY_DEFAULT / RATIO_SUPPLY_LAUNCH;

    const LIQUIDITY_RATIO: u256 = 5;


    fn SALT() -> felt252 {
        'salty'.try_into().unwrap()
    }

    // Constants
    fn OWNER() -> ContractAddress {
        // 'owner'.try_into().unwrap()
        123.try_into().unwrap()
    }

    fn RECIPIENT() -> ContractAddress {
        'recipient'.try_into().unwrap()
    }

    fn SPENDER() -> ContractAddress {
        'spender'.try_into().unwrap()
    }

    fn ALICE() -> ContractAddress {
        'alice'.try_into().unwrap()
    }

    fn BOB() -> ContractAddress {
        'bob'.try_into().unwrap()
    }

    fn NAME() -> felt252 {
        'name'.try_into().unwrap()
    }

    fn SYMBOL() -> felt252 {
        'symbol'.try_into().unwrap()
    }

    // Math
    fn pow_256(self: u256, mut exponent: u8) -> u256 {
        if self.is_zero() {
            return 0;
        }
        let mut result = 1;
        let mut base = self;

        loop {
            if exponent & 1 == 1 {
                result = result * base;
            }

            exponent = exponent / 2;
            if exponent == 0 {
                break result;
            }

            base = base * base;
        }
    }


    fn request_fixture() -> (ContractAddress, IERC20Dispatcher, ILaunchpadMarketplaceDispatcher) {
        // println!("request_fixture");
        let erc20_class = declare_erc20();
        let launch_class = declare_launchpad();
        request_fixture_custom_classes(erc20_class, launch_class)
    }

    fn request_fixture_custom_classes(
        erc20_class: ContractClass, launch_class: ContractClass
    ) -> (ContractAddress, IERC20Dispatcher, ILaunchpadMarketplaceDispatcher) {
        let sender_address: ContractAddress = 123.try_into().unwrap();
        let erc20 = deploy_erc20(erc20_class, 'USDC token', 'USDC', 1_000_000, sender_address);
        let token_address = erc20.contract_address.clone();
        let launchpad = deploy_launchpad(
            launch_class,
            sender_address,
            token_address.clone(),
            INITIAL_KEY_PRICE,
            STEP_LINEAR_INCREASE,
            erc20_class.class_hash,
            THRESHOLD_LIQUIDITY,
            THRESHOLD_MARKET_CAP
        );
        // let launchpad = deploy_launchpad(
        //     launch_class,
        //     sender_address,
        //     token_address.clone(),
        //     INITIAL_KEY_PRICE * pow_256(10,18),
        //     // INITIAL_KEY_PRICE,
        //     // STEP_LINEAR_INCREASE,
        //     STEP_LINEAR_INCREASE * pow_256(10,18),
        //     erc20_class.class_hash,
        //     THRESHOLD_LIQUIDITY * pow_256(10,18),
        //     // THRESHOLD_LIQUIDITY,
        //     THRESHOLD_MARKET_CAP * pow_256(10,18),
        //     // THRESHOLD_MARKET_CAP
        // );
        (sender_address, erc20, launchpad)
    }

    fn deploy_launchpad(
        class: ContractClass,
        admin: ContractAddress,
        token_address: ContractAddress,
        initial_key_price: u256,
        step_increase_linear: u256,
        coin_class_hash: ClassHash,
        threshold_liquidity: u256,
        threshold_marketcap: u256,
    ) -> ILaunchpadMarketplaceDispatcher {
        // println!("deploy marketplace");
        let mut calldata = array![admin.into()];
        calldata.append_serde(initial_key_price);
        calldata.append_serde(token_address);
        calldata.append_serde(step_increase_linear);
        calldata.append_serde(coin_class_hash);
        calldata.append_serde(threshold_liquidity);
        calldata.append_serde(threshold_marketcap);
        let (contract_address, _) = class.deploy(@calldata).unwrap();
        ILaunchpadMarketplaceDispatcher { contract_address }
    }

    fn declare_launchpad() -> ContractClass {
        declare("LaunchpadMarketplace").unwrap()
    }

    fn declare_erc20() -> ContractClass {
        declare("ERC20").unwrap()
    }


    fn deploy_erc20(
        class: ContractClass,
        name: felt252,
        symbol: felt252,
        initial_supply: u256,
        recipient: ContractAddress
    ) -> IERC20Dispatcher {
        let mut calldata = array![];

        name.serialize(ref calldata);
        symbol.serialize(ref calldata);
        (2 * initial_supply).serialize(ref calldata);
        recipient.serialize(ref calldata);
        18_u8.serialize(ref calldata);

        let (contract_address, _) = class.deploy(@calldata).unwrap();

        IERC20Dispatcher { contract_address }
    }


    fn run_buy_by_amount(
        launchpad: ILaunchpadMarketplaceDispatcher,
        erc20: IERC20Dispatcher,
        memecoin: IERC20Dispatcher,
        amount_quote: u256,
        token_address: ContractAddress,
        sender_address: ContractAddress,
    ) {
        start_cheat_caller_address(erc20.contract_address, sender_address);
        erc20.approve(launchpad.contract_address, amount_quote);
        let allowance = erc20.allowance(sender_address, launchpad.contract_address);
        // println!("test allowance erc20 {}", allowance);
        stop_cheat_caller_address(erc20.contract_address);

        start_cheat_caller_address(launchpad.contract_address, sender_address);
        println!("buy coin",);
        launchpad.buy_coin_by_quote_amount(token_address, amount_quote);
    }


    fn run_sell_by_amount(
        launchpad: ILaunchpadMarketplaceDispatcher,
        erc20: IERC20Dispatcher,
        memecoin: IERC20Dispatcher,
        amount_quote: u256,
        token_address: ContractAddress,
        sender_address: ContractAddress,
    ) {
        println!("sell coin",);
        let allowance = memecoin.allowance(sender_address, launchpad.contract_address);
        println!("test allowance meme coin{}", allowance);
        launchpad.sell_coin(token_address, amount_quote);
    }

    #[test]
    fn launchpad_buy_with_amount() {
        println!("launchpad_buy_with_amount");
        let (sender_address, erc20, launchpad) = request_fixture();
        cheat_caller_address_global(sender_address);
        start_cheat_caller_address(erc20.contract_address, sender_address);
        // Call a view function of the contract
        // Check default token used
        let default_token = launchpad.get_default_token();
        assert(default_token.token_address == erc20.contract_address, 'no default token');
        assert(default_token.initial_key_price == INITIAL_KEY_PRICE, 'no init price');
        start_cheat_caller_address(launchpad.contract_address, sender_address);
        println!("create and launch token");
        let token_address = launchpad
            .create_and_launch_token(
                // owner: OWNER(),
                symbol: SYMBOL(),
                name: NAME(),
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );
        println!("test token_address {:?}", token_address);
        let memecoin = IERC20Dispatcher { contract_address: token_address };
        let amount_first_buy = 1_u256;

        // //  First buy with 1 quote token
        run_buy_by_amount(
            launchpad, erc20, memecoin, amount_first_buy, token_address, sender_address,
        );

        // // // Sell token bought
        run_sell_by_amount(
            launchpad, erc20, memecoin, amount_first_buy, token_address, sender_address,
        );

        // //  First buy with 1 quote token
        run_buy_by_amount(
            launchpad, erc20, memecoin, amount_first_buy, token_address, sender_address,
        );

        // Total buy THRESHOLD
        run_buy_by_amount(
            launchpad,
            erc20,
            memecoin,
            THRESHOLD_LIQUIDITY - amount_first_buy,
            token_address,
            sender_address,
        );
    //  All buy
    //    let res = run_buy_by_amount(
    //     launchpad, erc20, memecoin, THRESHOLD_LIQUIDITY , token_address, sender_address,
    // );

    // let token_address_2 = launchpad
    // .create_and_launch_token(
    //     // owner: OWNER(),
    //     symbol: SYMBOL(),
    //     name: NAME(),
    //     initial_supply: DEFAULT_INITIAL_SUPPLY(),
    //     contract_address_salt: 'salt2'.try_into().unwrap()
    // );
    // let memecoin = IERC20Dispatcher { contract_address: token_address_2 };
    //   // //  First buy with 10 quote token
    //   let res = run_buy_by_amount(
    //     launchpad, erc20, memecoin, amount_first_buy, token_address_2, sender_address,
    // );
    }

    #[test]
    fn launchpad_buy_all_few_steps() {
        println!("launchpad_buy_all_few_steps");
        let (sender_address, erc20, launchpad) = request_fixture();
        cheat_caller_address_global(sender_address);
        start_cheat_caller_address(erc20.contract_address, sender_address);
        // Call a view function of the contract
        // Check default token used
        let default_token = launchpad.get_default_token();
        assert(default_token.token_address == erc20.contract_address, 'no default token');
        assert(default_token.initial_key_price == INITIAL_KEY_PRICE, 'no init price');
        start_cheat_caller_address(launchpad.contract_address, sender_address);
        println!("create and launch token");
        let token_address = launchpad
            .create_and_launch_token(
                // owner: OWNER(),
                symbol: SYMBOL(),
                name: NAME(),
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );
        println!("test token_address {:?}", token_address);
        let memecoin = IERC20Dispatcher { contract_address: token_address };

        //  All buy
        let mut first_buy = 10_u256;
        run_buy_by_amount(launchpad, erc20, memecoin, first_buy, token_address, sender_address,);

        run_buy_by_amount(launchpad, erc20, memecoin, first_buy, token_address, sender_address,);

        run_buy_by_amount(
            launchpad, erc20, memecoin, THRESHOLD_LIQUIDITY / 10, token_address, sender_address,
        );
    }


    #[test]
    fn launchpad_buy_all() {
        println!("launchpad_buy_all");
        let (sender_address, erc20, launchpad) = request_fixture();
        cheat_caller_address_global(sender_address);
        start_cheat_caller_address(erc20.contract_address, sender_address);
        // Call a view function of the contract
        // Check default token used
        let default_token = launchpad.get_default_token();
        assert(default_token.token_address == erc20.contract_address, 'no default token');
        assert(default_token.initial_key_price == INITIAL_KEY_PRICE, 'no init price');
        start_cheat_caller_address(launchpad.contract_address, sender_address);
        println!("create and launch token");
        let token_address = launchpad
            .create_and_launch_token(
                // owner: OWNER(),
                symbol: SYMBOL(),
                name: NAME(),
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );
        println!("test token_address {:?}", token_address);
        let memecoin = IERC20Dispatcher { contract_address: token_address };

        //  All buy
        run_buy_by_amount(
            launchpad, erc20, memecoin, THRESHOLD_LIQUIDITY, token_address, sender_address,
        );
    }

    #[test]
    fn launchpad_buy_and_sell() {
        println!("launchpad_buy_and_sell");
        let (sender_address, erc20, launchpad) = request_fixture();
        // let amount_key_buy = 1_u256;
        cheat_caller_address_global(sender_address);
        start_cheat_caller_address(erc20.contract_address, sender_address);
        // Call a view function of the contract
        // Check default token used
        let default_token = launchpad.get_default_token();
        assert(default_token.token_address == erc20.contract_address, 'no default token');
        assert(default_token.initial_key_price == INITIAL_KEY_PRICE, 'no init price');

        start_cheat_caller_address(launchpad.contract_address, sender_address);

        println!("create and launch token");
        let token_address = launchpad
            .create_and_launch_token(
                // owner: OWNER(),
                symbol: SYMBOL(),
                name: NAME(),
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );
        println!("test token_address {:?}", token_address);

        let memecoin = IERC20Dispatcher { contract_address: token_address };
        let amount_first_buy = 10_u256;

        // //  First buy with 10 quote token
        run_buy_by_amount(
            launchpad, erc20, memecoin, amount_first_buy, token_address, sender_address,
        );
        // let mut total_amount_buy = amount_first_buy;

        let new_amount = THRESHOLD_LIQUIDITY - amount_first_buy;
        // //  First sell with 10 quote token
        run_sell_by_amount(
            launchpad, erc20, memecoin, amount_first_buy, token_address, sender_address,
        );
    // //  Threshold buy - 1
    // run_buy_by_amount(
    //     launchpad, erc20, memecoin, new_amount, token_address, sender_address,
    // );

    }


    #[test]
    fn launchpad_end_to_end() {
        println!("launchpad_end_to_end");
        let (sender_address, erc20, launchpad) = request_fixture();
        // let amount_key_buy = 1_u256;
        cheat_caller_address_global(sender_address);
        start_cheat_caller_address(erc20.contract_address, sender_address);
        // Call a view function of the contract
        // Check default token used
        let default_token = launchpad.get_default_token();
        assert(default_token.token_address == erc20.contract_address, 'no default token');
        assert(default_token.initial_key_price == INITIAL_KEY_PRICE, 'no init price');

        start_cheat_caller_address(launchpad.contract_address, sender_address);

        println!("create and launch token");
        let token_address = launchpad
            .create_and_launch_token(
                // owner: OWNER(),
                symbol: SYMBOL(),
                name: NAME(),
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );
        println!("test token_address {:?}", token_address);

        let memecoin = IERC20Dispatcher { contract_address: token_address };
        let amount_first_buy = 10_u256;

        // //  First buy with 10 quote token
        run_buy_by_amount(
            launchpad, erc20, memecoin, amount_first_buy, token_address, sender_address,
        );
        // let mut total_amount_buy = amount_first_buy;

        // //  First sell with 10 quote token
        run_sell_by_amount(
            launchpad, erc20, memecoin, amount_first_buy, token_address, sender_address,
        );

        //  Final buy

        run_buy_by_amount(
            launchpad, erc20, memecoin, THRESHOLD_LIQUIDITY, token_address, sender_address,
        );
    }

    // #[test]
    // fn launchpad_integration() {
    //     println!("launchpad_integration");

    //     let (sender_address, erc20, launchpad) = request_fixture();
    //     cheat_caller_address_global(sender_address);
    //     start_cheat_caller_address(erc20.contract_address, sender_address);
    //     let default_token = launchpad.get_default_token();
    //     assert(default_token.token_address == erc20.contract_address, 'no default token');
    //     assert(default_token.initial_key_price == INITIAL_KEY_PRICE, 'no init price');
    //     start_cheat_caller_address(launchpad.contract_address, sender_address);

    //     let token_address = launchpad
    //         .create_token(
    //             recipient: OWNER(),
    //             // owner: OWNER(),
    //             symbol: SYMBOL(),
    //             name: NAME(),
    //             initial_supply: DEFAULT_INITIAL_SUPPLY(),
    //             contract_address_salt: SALT(),
    //         );
    //     // println!("test token_address {:?}", token_address);
    //     let memecoin = IERC20Dispatcher { contract_address: token_address };
    //     start_cheat_caller_address(memecoin.contract_address, sender_address);

    //     let balance_contract = memecoin.balance_of(launchpad.contract_address);
    //     println!("test balance_contract {:?}", balance_contract);

    //     let total_supply = memecoin.total_supply();
    //     // println!(" memecoin total_supply {:?}", total_supply);
    //     memecoin.approve(launchpad.contract_address, total_supply);

    //     // let allowance = memecoin.allowance(sender_address, launchpad.contract_address);
    //     // println!("test allowance meme coin{}", allowance);
    //     memecoin.transfer(launchpad.contract_address, total_supply);
    //     stop_cheat_caller_address(memecoin.contract_address);

    //     start_cheat_caller_address(launchpad.contract_address, sender_address);

    //     launchpad.launch_token(token_address);
    //     let amount_first_buy = 9_u256;

    //     run_buy_by_amount(
    //         launchpad, erc20, memecoin, amount_first_buy, token_address, sender_address,
    //     );
    //     // let mut total_amount_buy = amount_first_buy;
    //     let mut amount_second = 1_u256;
    //     run_buy_by_amount(
    //         launchpad, erc20, memecoin, amount_second, token_address, sender_address,
    //     );
    // }

    #[test]
    fn launchpad_buy_more_then_liquidity_threshold() {
        println!("launchpad_buy_more_then_liquidity_threshold");
        let (sender_address, erc20, launchpad) = request_fixture();
        cheat_caller_address_global(sender_address);
        start_cheat_caller_address(erc20.contract_address, sender_address);
        let default_token = launchpad.get_default_token();
        assert(default_token.token_address == erc20.contract_address, 'no default token');
        assert(default_token.initial_key_price == INITIAL_KEY_PRICE, 'no init price');
        start_cheat_caller_address(launchpad.contract_address, sender_address);

        let token_address = launchpad
            .create_token(
                recipient: OWNER(),
                // owner: OWNER(),
                symbol: SYMBOL(),
                name: NAME(),
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );
        // println!("test token_address {:?}", token_address);
        let memecoin = IERC20Dispatcher { contract_address: token_address };
        start_cheat_caller_address(memecoin.contract_address, sender_address);

        let balance_contract = memecoin.balance_of(launchpad.contract_address);
        println!("test balance_contract {:?}", balance_contract);

        let total_supply = memecoin.total_supply();
        println!(" memecoin total_supply {:?}", total_supply);
        memecoin.approve(launchpad.contract_address, total_supply);

        let allowance = memecoin.allowance(sender_address, launchpad.contract_address);
        println!("test allowance meme coin{}", allowance);
        // memecoin.transfer(launchpad.contract_address, total_supply);
        stop_cheat_caller_address(memecoin.contract_address);

        start_cheat_caller_address(launchpad.contract_address, sender_address);

        launchpad.launch_token(token_address);
        let amount_first_buy = 9_u256;

        run_buy_by_amount(
            launchpad, erc20, memecoin, amount_first_buy, token_address, sender_address,
        );
        // let mut total_amount_buy = amount_first_buy;

        let mut amount_second = 2_u256;
        run_buy_by_amount(
            launchpad, erc20, memecoin, amount_second, token_address, sender_address,
        );
    // // //  First buy with 10 quote token
    // let res = run_sell_by_amount(
    //     launchpad, erc20, memecoin, amount_first_buy, token_address, sender_address,
    // );

    // //  Final buy
    // let res = run_buy_by_amount(
    //     launchpad,
    //     erc20,
    //     memecoin,
    //     THRESHOLD_LIQUIDITY - total_amount_buy,
    //     token_address,
    //     sender_address,
    // );
    }


    fn run_calculation(
        launchpad: ILaunchpadMarketplaceDispatcher,
        amount_quote: u256,
        token_address: ContractAddress,
        sender_address: ContractAddress,
        is_decreased: bool,
        is_quote_amount: bool
    ) -> u256 {
        start_cheat_caller_address(launchpad.contract_address, sender_address);
        println!("buy coin",);
        launchpad.get_coin_amount_by_quote_amount(token_address, amount_quote, is_decreased)
    }

    #[test]
    fn launchpad_test_calculation() {
        println!("launchpad_test_calculation");
        let (sender_address, erc20, launchpad) = request_fixture();
        cheat_caller_address_global(sender_address);
        start_cheat_caller_address(erc20.contract_address, sender_address);
        let default_token = launchpad.get_default_token();
        assert(default_token.token_address == erc20.contract_address, 'no default token');
        assert(default_token.initial_key_price == INITIAL_KEY_PRICE, 'no init price');
        start_cheat_caller_address(launchpad.contract_address, sender_address);

        let token_address = default_token.token_address;
        let amount_to_buy = THRESHOLD_LIQUIDITY;
        let amount_coin_get = run_calculation(
            launchpad, amount_to_buy, token_address, sender_address, false, true
        );

        println!("amount coin get {:?}", amount_coin_get);

        let amount_coin_sell = run_calculation(
            launchpad, amount_to_buy, token_address, sender_address, true, true
        );
        println!("amount_coin_sell {:?}", amount_coin_sell);
        assert!(amount_coin_get == amount_coin_sell, "amount incorrect");
    }

    //
    // Unit test
    //

    #[test]
    fn test_create_token() {
        let (_, _, launchpad) = request_fixture();
        let mut spy = spy_events(SpyOn::One(launchpad.contract_address));

        start_cheat_caller_address(launchpad.contract_address, OWNER());

        let token_address = launchpad
            .create_token(
                recipient: OWNER(),
                symbol: SYMBOL(),
                name: NAME(),
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );

        let expected_event = LaunchpadEvent::CreateToken(
            CreateToken {
                caller: OWNER(),
                token_address: token_address,
                symbol: SYMBOL(),
                name: NAME(),
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                total_supply: DEFAULT_INITIAL_SUPPLY(),
            }
        );
        spy.assert_emitted(@array![(launchpad.contract_address, expected_event)]);
    }

    fn claculate_slope(total_supply: u256) -> u256 {
        let liquidity_supply = total_supply / LIQUIDITY_RATIO;
        let liquidity_available = total_supply - liquidity_supply;
        let slope = (2 * THRESHOLD_LIQUIDITY) / (liquidity_available * (liquidity_available - 1));
        slope
    }

    #[test]
    fn test_create_and_launch_token() {
        let (_, erc20, launchpad) = request_fixture();
        let mut spy = spy_events(SpyOn::One(launchpad.contract_address));
        let initial_key_price = THRESHOLD_LIQUIDITY / DEFAULT_INITIAL_SUPPLY();
        let slope = claculate_slope(DEFAULT_INITIAL_SUPPLY());

        start_cheat_caller_address(launchpad.contract_address, OWNER());

        let token_address = launchpad
            .create_and_launch_token(
                symbol: SYMBOL(),
                name: NAME(),
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );

        let create_token_event = LaunchpadEvent::CreateToken(
            CreateToken {
                caller: OWNER(),
                token_address: token_address,
                symbol: SYMBOL(),
                name: NAME(),
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                total_supply: DEFAULT_INITIAL_SUPPLY(),
            }
        );

        let launch_token_event = LaunchpadEvent::CreateLaunch(
            CreateLaunch {
                caller: OWNER(),
                token_address: token_address,
                amount: 0,
                price: initial_key_price,
                total_supply: DEFAULT_INITIAL_SUPPLY(),
                slope: slope,
                threshold_liquidity: THRESHOLD_LIQUIDITY,
                quote_token_address: erc20.contract_address,
            }
        );

        spy
            .assert_emitted(
                @array![
                    (launchpad.contract_address, create_token_event),
                    (launchpad.contract_address, launch_token_event)
                ]
            );
    }

    #[test]
    #[should_panic(expected: ("not launch",))]
    fn test_launch_token_with_uncreated_token() {
        let (_, erc20, launchpad) = request_fixture();

        launchpad.launch_token(coin_address: erc20.contract_address);
    }

    #[test]
    #[should_panic(expected: ("no supply provided",))]
    fn test_launch_token_with_no_supply_provided() {
        let (_, erc20, launchpad) = request_fixture();

        start_cheat_caller_address(launchpad.contract_address, OWNER());

        let token_address = launchpad
            .create_token(
                recipient: OWNER(),
                symbol: SYMBOL(),
                name: NAME(),
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );

        launchpad.launch_token(coin_address: token_address);
    }

    //TODO
    //     #[test]
    //     fn test_launch_token() {
    //         let (_, erc20, launchpad) = request_fixture();
    //         let mut spy = spy_events(SpyOn::One(launchpad.contract_address));
    //         let initial_key_price = THRESHOLD_LIQUIDITY / DEFAULT_INITIAL_SUPPLY();
    //         let slope = claculate_slope(DEFAULT_INITIAL_SUPPLY());

    //         start_cheat_caller_address(launchpad.contract_address, OWNER());

    //         let token_address = launchpad
    //         .create_token(
    //             recipient: OWNER(),
    //             symbol: SYMBOL(),
    //             name: NAME(),
    //             initial_supply: DEFAULT_INITIAL_SUPPLY(),
    //             contract_address_salt: SALT(),
    //         );

    //         launchpad.launch_token(coin_address: token_address);

    //         let expected_launch_token_event = LaunchpadEvent::CreateLaunch(
    //             CreateLaunch {
    //                 caller: OWNER(),
    //                 token_address: token_address,
    //                 amount: 0,
    //                 price: initial_key_price,
    //                 total_supply: DEFAULT_INITIAL_SUPPLY(),
    //                 slope: slope,
    //                 threshold_liquidity: THRESHOLD_LIQUIDITY,
    //                 quote_token_address: erc20.contract_address,
    //             }
    //         );

    //         spy.assert_emitted(@array![(launchpad.contract_address, expected_launch_token_event)]);
    //     }

    //TODO: assert for no treshold raised and liquidity already launch
    // #[test]
    // fn test_launch_liquidity() {
    //             let (_, erc20, launchpad) = request_fixture();
    //         let mut spy = spy_events(SpyOn::One(launchpad.contract_address));
    //         let initial_key_price = THRESHOLD_LIQUIDITY / DEFAULT_INITIAL_SUPPLY();
    //         let slope = claculate_slope(DEFAULT_INITIAL_SUPPLY());

    //         start_cheat_caller_address(launchpad.contract_address, OWNER());

    //         let token_address = launchpad
    //             .create_and_launch_token(
    //                 symbol: SYMBOL(),
    //                 name: NAME(),
    //                 initial_supply: DEFAULT_INITIAL_SUPPLY(),
    //                 contract_address_salt: SALT(),
    //             );

    //         launchpad.launch_liquidity(token_address);

    //             //   LiquidityCreated {
    //             //                 id: token_id,
    //             //                 pool: pool,
    //             //                 quote_token_address: quote_token_address,
    //             //                 // token_id:token_id,
    //             //                 owner: launch.owner,
    //             //                 asset: asset_token_address,
    //             //             }

    //         let expected_liquidity_created_event = LaunchpadEvent::LiquidityCreated(
    //             LiquidityCreated {
    //                 // caller: OWNER(),
    //                 // token_address: token_address,
    //                 // amount: 0,
    //                 // price: initial_key_price,
    //                 // total_supply: DEFAULT_INITIAL_SUPPLY(),
    //                 // slope: slope,
    //                 // threshold_liquidity: THRESHOLD_LIQUIDITY,
    //                 // quote_token_address: erc20.contract_address,
    //             }
    //         );

    //         spy.assert_emitted(@array![(launchpad.contract_address, expected_liquidity_created_event)]);
    // }

    #[test]
    fn test_get_threshold_liquidity() {
        let (_, _, launchpad) = request_fixture();
        assert(
            THRESHOLD_LIQUIDITY == launchpad.get_threshold_liquidity(), 'wrong threshold liquidity'
        );
    }

    #[test]
    fn test_get_default_token() {
        let (_, erc20, launchpad) = request_fixture();

        let expected_token = TokenQuoteBuyCoin {
            token_address: erc20.contract_address,
            initial_key_price: INITIAL_KEY_PRICE,
            price: INITIAL_KEY_PRICE,
            is_enable: true,
            step_increase_linear: STEP_LINEAR_INCREASE,
        };

        assert(expected_token == launchpad.get_default_token(), 'wrong default token');
    }

    #[test]
    fn test_get_coin_launch() {
        let (_, erc20, launchpad) = request_fixture();

        start_cheat_caller_address(launchpad.contract_address, OWNER());

        let token_address = launchpad
            .create_and_launch_token(
                symbol: SYMBOL(),
                name: NAME(),
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );

        let launched_token = launchpad.get_coin_launch(token_address);

        assert(launched_token.owner == OWNER(), 'wrong owner');
        assert(launched_token.token_address == token_address, 'wrong token address');
        assert(launched_token.total_supply == DEFAULT_INITIAL_SUPPLY(), 'wrong initial supply');
        assert(
            launched_token.bonding_curve_type.unwrap() == BondingType::Linear,
            'wrong initial supply'
        );
        assert(launched_token.price == 0_u256, 'wrong price');
        assert(launched_token.liquidity_raised == 0_u256, 'wrong liquidation raised');
        assert(launched_token.token_holded == 0_u256, 'wrong token holded');
        assert(
            launched_token.token_quote.token_address == erc20.contract_address, 'wrong token qoute'
        );
    }

    #[test]
    fn test_get_share_key_of_user() {
        let (sender_address, erc20, launchpad) = request_fixture();

        let token_address = launchpad
            .create_and_launch_token(
                symbol: SYMBOL(),
                name: NAME(),
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );
        let memecoin = IERC20Dispatcher { contract_address: token_address };

        let mut first_buy = 10_u256;
        run_buy_by_amount(launchpad, erc20, memecoin, first_buy, token_address, sender_address,);

        let share_key = launchpad.get_share_key_of_user(sender_address, memecoin.contract_address);

        println!("owner: {:?}", share_key.owner);
        assert(share_key.owner == sender_address, 'wrong owner');
        assert(share_key.token_address == memecoin.contract_address, 'wrong token address');
    // assert(share_key.amount_owned == first_buy, 'wrong amount owned');
    // assert(share_key.amount_buy == first_buy, 'wrong amount buy');
    // assert(share_key.amount_sell == 0, 'wrong amount sell');
    }

    #[test]
    fn test_get_all_launch_tokens_and_cois() {
        let (sender_address, erc20, launchpad) = request_fixture();
        let first_token: felt252 = 'token_1';
        let second_token: felt252 = 'token_2';
        let third_token: felt252 = 'token_3';

        let first_token_addr = launchpad
            .create_and_launch_token(
                symbol: 'FRST',
                name: first_token,
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );

        let second_token_addr = launchpad
            .create_and_launch_token(
                symbol: 'SCND',
                name: second_token,
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );

        let third_token_addr = launchpad
            .create_and_launch_token(
                symbol: 'THRD',
                name: third_token,
                initial_supply: DEFAULT_INITIAL_SUPPLY(),
                contract_address_salt: SALT(),
            );

        let all_launched_coins = launchpad.get_all_coins();
        let all_launched_tokens = launchpad.get_all_launch();

        assert(all_launched_coins.len() == 3, 'wrong number of coins');
        assert(all_launched_tokens.len() == 3, 'wrong number of tokens');
        assert(*all_launched_coins.at(0).name == first_token, 'wrong coin name');
        assert(*all_launched_coins.at(1).name == second_token, 'wrong coin name');
        assert(*all_launched_coins.at(2).name == third_token, 'wrong coin name');
        assert(*all_launched_tokens.at(0).token_address == first_token_addr, 'wrong token address');
        assert(
            *all_launched_tokens.at(1).token_address == second_token_addr, 'wrong token address'
        );
        assert(*all_launched_tokens.at(2).token_address == third_token_addr, 'wrong token address');
    }

    #[test]
    #[should_panic(expected: ('Caller is missing role',))]
    fn test_set_token_with_non_admin() {
        let (_, erc20, launchpad) = request_fixture();

        let expected_token = TokenQuoteBuyCoin {
            token_address: erc20.contract_address,
            initial_key_price: INITIAL_KEY_PRICE,
            price: INITIAL_KEY_PRICE,
            is_enable: true,
            step_increase_linear: STEP_LINEAR_INCREASE,
        };

        start_cheat_caller_address(launchpad.contract_address, ALICE());
        launchpad.set_token(expected_token);
    }

    #[test]
    #[should_panic(expected: ('protocol_fee_too_high',))]
    fn test_set_protocol_fee_percent_too_high() {
        let (_, _, launchpad) = request_fixture();

        launchpad.set_protocol_fee_percent(MAX_FEE_PROTOCOL + 1);
    }

    #[test]
    #[should_panic(expected: ('protocol_fee_too_low',))]
    fn test_set_protocol_fee_percent_too_low() {
        let (_, _, launchpad) = request_fixture();

        launchpad.set_protocol_fee_percent(MIN_FEE_PROTOCOL - 1);
    }

    #[test]
    #[should_panic(expected: ('Caller is missing role',))]
    fn test_set_protocol_fee_percent_non_admin() {
        let (_, _, launchpad) = request_fixture();

        launchpad.set_protocol_fee_percent(MID_FEE_PROTOCOL);
    }

    #[test]
    fn test_set_protocol_fee_ok() {
        let (sender_address, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, sender_address);

        launchpad.set_protocol_fee_percent(MID_FEE_PROTOCOL);
    }

    #[test]
    #[should_panic(expected: ('creator_fee_too_low',))]
    fn test_set_creator_fee_percent_too_low() {
        let (sender_address, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, sender_address);

        launchpad.set_creator_fee_percent(MIN_FEE_CREATOR - 1);
    }

    #[test]
    #[should_panic(expected: ('creator_fee_too_high',))]
    fn test_set_creator_fee_percent_too_high() {
        let (sender_address, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, sender_address);

        launchpad.set_creator_fee_percent(MAX_FEE_CREATOR + 1);
    }

    #[test]
    #[should_panic(expected: ('Caller is missing role',))]
    fn test_set_creator_fee_percent_non_admin() {
        let (_, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, ALICE());

        launchpad.set_creator_fee_percent(MID_FEE_PROTOCOL);
    }

    #[test]
    fn test_set_creator_fee_percent_ok() {
        let (sender_address, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, sender_address);

        launchpad.set_creator_fee_percent(MID_FEE_CREATOR);
    }

    #[test]
    #[should_panic(expected: ('Caller is missing role',))]
    fn test_set_dollar_paid_coin_creation_non_admin() {
        let (_, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, ALICE());

        launchpad.set_dollar_paid_coin_creation(50_u256);
    }

    #[test]
    fn test_set_dollar_paid_coin_creation_ok() {
        let (sender_address, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, sender_address);

        launchpad.set_dollar_paid_coin_creation(50_u256);
    }


    #[test]
    #[should_panic(expected: ('Caller is missing role',))]
    fn test_set_dollar_paid_launch_creation_non_admin() {
        let (_, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, ALICE());

        launchpad.set_dollar_paid_launch_creation(50_u256);
    }

    #[test]
    fn test_set_dollar_paid_launch_creation_ok() {
        let (sender_address, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, sender_address);

        launchpad.set_dollar_paid_launch_creation(50_u256);
    }


    #[test]
    #[should_panic(expected: ('Caller is missing role',))]
    fn test_set_dollar_paid_finish_percentage_non_admin() {
        let (_, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, ALICE());

        launchpad.set_dollar_paid_finish_percentage(50_u256);
    }

    #[test]
    fn test_set_dollar_paid_finish_percentage_ok() {
        let (sender_address, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, sender_address);

        launchpad.set_dollar_paid_finish_percentage(50_u256);
    }

    #[test]
    #[should_panic(expected: ('Caller is missing role',))]
    fn test_set_threshold_liquidity_non_admin() {
        let (_, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, ALICE());

        launchpad.set_threshold_liquidity(50_u256);
    }

    #[test]
    fn test_set_threshold_liquidity_ok() {
        let (sender_address, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, sender_address);

        launchpad.set_threshold_liquidity(50_u256);
    }

    #[test]
    #[should_panic(expected: ('Caller is missing role',))]
    fn test_set_address_jediswap_factory_v2_non_admin() {
        let (_, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, ALICE());

        launchpad.set_address_jediswap_factory_v2('jediswap'.try_into().unwrap());
    }

    #[test]
    fn test_set_address_jediswap_factory_v2_ok() {
        let (sender_address, _, launchpad) = request_fixture();
        let mut spy = spy_events(SpyOn::One(launchpad.contract_address));
        let jediswap_v2_addr: ContractAddress = 'jediswap'.try_into().unwrap();

        start_cheat_caller_address(launchpad.contract_address, sender_address);

        launchpad.set_address_jediswap_factory_v2(jediswap_v2_addr);

        let expected_event = LaunchpadEvent::SetJediwapV2Factory(
            SetJediwapV2Factory { address_jediswap_factory_v2: jediswap_v2_addr }
        );
        spy.assert_emitted(@array![(launchpad.contract_address, expected_event)]);
    }

    #[test]
    #[should_panic(expected: ('Caller is missing role',))]
    fn test_set_address_jediswap_nft_router_v2_non_admin() {
        let (_, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, ALICE());

        launchpad.set_address_jediswap_nft_router_v2('jediswap'.try_into().unwrap());
    }

    #[test]
    fn test_set_address_jediswap_nft_router_v2_ok() {
        let (sender_address, _, launchpad) = request_fixture();
        let mut spy = spy_events(SpyOn::One(launchpad.contract_address));
        let jediswap_nft_v2_addr: ContractAddress = 'jediswap'.try_into().unwrap();

        start_cheat_caller_address(launchpad.contract_address, sender_address);

        launchpad.set_address_jediswap_nft_router_v2(jediswap_nft_v2_addr);

        let expected_event = LaunchpadEvent::SetJediwapNFTRouterV2(
            SetJediwapNFTRouterV2 { address_jediswap_nft_router_v2: jediswap_nft_v2_addr }
        );
        spy.assert_emitted(@array![(launchpad.contract_address, expected_event)]);
    }

    #[test]
    #[should_panic(expected: ('Caller is missing role',))]
    fn test_set_exchanges_address_non_admin() {
        let (_, _, launchpad) = request_fixture();
        let jediswap_addr: ContractAddress = 'jediswap'.try_into().unwrap();
        start_cheat_caller_address(launchpad.contract_address, ALICE());

        let exchange_addresses = array![(SupportedExchanges::Jediswap, jediswap_addr)].span();

        launchpad.set_exchanges_address(exchange_addresses);
    }

    #[test]
    fn test_set_exchanges_address_ok() {
        let (sender_address, _, launchpad) = request_fixture();
        let jediswap_addr: ContractAddress = 'jediswap'.try_into().unwrap();
        start_cheat_caller_address(launchpad.contract_address, sender_address);

        let exchange_addresses = array![(SupportedExchanges::Jediswap, jediswap_addr)].span();

        launchpad.set_exchanges_address(exchange_addresses);
    }

    #[test]
    #[should_panic(expected: ('Caller is missing role',))]
    fn test_set_class_hash_non_admin() {
        let (_, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, ALICE());

        launchpad.set_class_hash(class_hash_const::<'hash'>());
    }

    #[test]
    fn test_set_class_hash_ok() {
        let (sender_address, _, launchpad) = request_fixture();
        start_cheat_caller_address(launchpad.contract_address, sender_address);

        launchpad.set_class_hash(class_hash_const::<'hash'>());
    }
}
