import {Uint256} from 'starknet';

export interface KeysUser {
  owner: string;
  token_address: string;
  price: Uint256;
  initial_key_price: Uint256;
  total_supply: Uint256;
  created_at: Uint256;
  token_quote: TokenQuoteBuyKeys;
}

export interface TokenLaunchInterface {
  owner: string;
  token_address: string;
  price: Uint256;
  initial_key_price: Uint256;
  available_supply: Uint256;
  bonding_curve_type?: BondingType;
  total_supply: Uint256;
  created_at: Uint256;
  liquidity_raised: Uint256;
  token_holded: Uint256;
  is_liquidity_launch: boolean;
  slope: Uint256;
  token_quote: TokenQuoteBuyKeys;
}

export interface Token {
  owner: string;
  token_address: string;
  price: Uint256;
  symbol: string;
  name: string;
  total_supply: Uint256;
  initial_supply: Uint256;
  created_at: Uint256;
  slope: Uint256;
  token_quote: TokenQuoteBuyKeys;
}

export interface TokenQuoteBuyKeys {
  token_address: string;
  price: Uint256;
  initial_key_price: Uint256;
  step_increase_linear: Uint256;
  is_enable: boolean;
}

export interface SharesKeys {
  owner: string;
  key_address: string;
  amount_owned: Uint256;
  amount_buy: Uint256;
  amount_sell: Uint256;
  total_paid: Uint256;
  created_at: Uint256;
}

export enum BondingType {
  Linear,
  Scoring, // Nostr data with Appchain connected to a Relayer
  Exponential,
  Limited,
}
