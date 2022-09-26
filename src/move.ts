type MoveArgs = {
  index: number;
  toIndex: number;
};

export function move<T>(array: T[], args: MoveArgs) {
  const { index, toIndex } = args;
  const result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (i !== index) {
      result.push(array[i]);
    }

    if (i === toIndex) {
      result.push(array[index]);
    }
  }

  return result;
}
