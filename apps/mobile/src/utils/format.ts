import {cairo, Uint256, uint256, shortString} from 'starknet';

export const feltToAddress = (felt: bigint) => {
  const newStrB = Buffer.from(felt.toString(16), 'ascii');
  return `0x${newStrB.toString()}`;
};

export const formatFloatToUint256 = (total_amount_float: number, decimals = 18) => {
  let total_amount: Uint256 | undefined;
  const total_amount_nb = total_amount_float * 10 ** Number(decimals);

  if (Number.isInteger(total_amount_float)) {
    total_amount = cairo.uint256(total_amount_nb);
  } else {
    total_amount = uint256.bnToUint256(BigInt(total_amount_nb));
  }

  return total_amount;
};

export const decodeUsername = (hexUsername: string): string => {
  try {
    return shortString.decodeShortString(hexUsername.replace(/0x0+/, '0x'));
  } catch (error) {
    console.error('Error decoding username:', error);
    return hexUsername;
  }
};

export const formatExpiry = (hexExpiry: string): Date => {
  const timestamp = parseInt(hexExpiry, 16);
  return new Date(timestamp * 1000);
};
