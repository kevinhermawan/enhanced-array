type RemoveAtArgs = {
  index: number;
};

export function removeAt<T>(array: T[], args: RemoveAtArgs) {
  const { index } = args;

  if (index === array.length - 1) {
    const result = array.slice();
    result.pop();

    return result;
  }

  if (index < array.length - 1) {
    const result = array.slice(0, index + 1);
    result.pop();

    for (let i = 1; i < array.length - index; i++) {
      result.push(array[index + i]);
    }

    return result;
  }

  return array;
}
