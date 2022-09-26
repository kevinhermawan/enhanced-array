type SwapArgs = {
  index: number;
  withIndex: number;
};

export function swap<T>(array: T[], args: SwapArgs) {
  const { index, withIndex } = args;
  const result = array;

  const temp = result[index];
  result[index] = result[withIndex];
  result[withIndex] = temp;

  return result;
}
