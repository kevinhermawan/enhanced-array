type InsertAtArgs<T> = {
  index: number;
  element: T;
};

export function insertAt<T>(array: T[], args: InsertAtArgs<T>) {
  const { index, element } = args;

  if (index >= array.length - 1) {
    const result = array.slice();
    result.push(element);

    return result;
  }

  const result = array.slice(0, index);
  result.push(element);

  for (let i = 0; i < array.length - index; i++) {
    result.push(array[index + i]);
  }

  return result;
}
