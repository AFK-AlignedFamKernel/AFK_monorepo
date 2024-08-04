import {useAccount, useNetwork, useProvider} from '@starknet-react/core';
import {AccountInterface, cairo, CallData, constants, RpcProvider, uint256} from 'starknet';

import {KEYS_ADDRESS} from '../../constants/contracts';
import {TokenQuoteBuyKeys} from '../../types/keys';
import {feltToAddress, formatFloatToUint256} from '../../utils/format';
import {prepareAndConnectContract} from './useDataKeys';

export const useBuyKeys = () => {
  const account = useAccount();
  const chain = useNetwork();
  // const chainId = chain?.chain?.id
  // console.log("chainId", chainId)
  // const provider = new RpcProvider({ nodeUrl: 'http://127.0.0.1:5050' });
  const rpcProvider = useProvider();
  const chainId = chain?.chain?.id;
  // console.log("chainId", chainId)
  // const provider = rpcProvider?.provider ?? new RpcProvider({ nodeUrl:  process.env.STARKNET_RPC_ENDPOINT  });
  // const provider = rpcProvider?.provider ?? new RpcProvider();
  const provider = new RpcProvider();

  const handleBuyKeys = async (
    account: AccountInterface,
    user_address: string,
    tokenQuote: TokenQuoteBuyKeys,
    amount: number,
    contractAddress?: string,
  ) => {
    if (!account) return;

    const addressContract = contractAddress ?? KEYS_ADDRESS[constants.StarknetChainId.SN_SEPOLIA];
    console.log('addressContract', addressContract);
    console.log('read asset');
    const asset = await prepareAndConnectContract(
      provider,
      feltToAddress(BigInt(tokenQuote?.token_address)),
      // tokenQuote?.token_address?.toString(),
      account,
    );
    console.log('read key_contract');

    const key_contract = await prepareAndConnectContract(provider, addressContract, account);

    console.log('convert float');
    console.log('amount', amount);
    let amountUint256 = formatFloatToUint256(amount);
    amountUint256 = uint256.bnToUint256(BigInt('0x' + amount));
    console.log('amountuint256', amountUint256);
    const buyKeysParams = {
      user_address, // token address
      amount: amountUint256,
      // amount: cairo.uint256(amount), // amount int. Float need to be convert with bnToUint
      // amount: uint256.bnToUint256(amount*10**18), // amount int. Float need to be convert with bnToUint
      // amount: uint256.bnToUint256(BigInt(amount*10**18)), // amount int. Float need to be convert with bnToUint
    };

    console.log('read amountToPaid');

    let amountToPaid;
    try {
      amountToPaid = await key_contract.get_price_of_supply_key(user_address, amount, false);
    } catch (error) {
      console.log('Error get amount to paid', error);
    }

    console.log('amount to paid', amountToPaid);
    // let txApprove = await asset.approve(
    //     addressContract,
    //     cairo.uint256(1), // change for decimals float => uint256.bnToUint256("0x"+alicePublicKey)
    // )

    const approveCall = {
      contractAddress: asset?.address,
      entrypoint: 'approve',
      calldata: CallData.compile({
        address: addressContract,
        amount: amountToPaid ? cairo.uint256(amountToPaid) : cairo.uint256(1),
      }),
      // calldata: [buyKeysParams.user_address, buyKeysParams.amount]
    };

    const buyKeysCall = {
      contractAddress: addressContract,
      entrypoint: 'buy_keys',
      calldata: CallData.compile({
        user_address: buyKeysParams.user_address,
        amount: buyKeysParams.amount,
      }),
      // calldata: [buyKeysParams.user_address, buyKeysParams.amount]
    };

    console.log('CabuyKeysCallll', buyKeysCall);

    const tx = await account?.execute([approveCall, buyKeysCall], undefined, {});
    console.log('tx hash', tx.transaction_hash);
    const wait_tx = await account?.waitForTransaction(tx?.transaction_hash);
  };

  return {handleBuyKeys};
};
