type SwapArgs = {
  i: number;
  j: number;
};

export function swap<T>(array: T[], args: SwapArgs) {
  const { i, j } = args;
  const result = array;

  const temp = result[i];
  result[i] = result[j];
  result[j] = temp;

  return result;
}
