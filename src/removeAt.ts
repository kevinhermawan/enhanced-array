type RemoveAtArgs = {
  index: number;
};

export function removeAt<T>(array: T[], args: RemoveAtArgs) {
  const { index } = args;
  const lastIndex = array.length - 1;

  if (index > lastIndex) {
    return array;
  }

  const result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (index !== i) {
      result.push(array[i]);
    }
  }

  return result;
}
