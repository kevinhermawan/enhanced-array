type InsertAtArgs<T> = {
  index: number;
  element: T;
};

export function insertAt<T>(array: T[], args: InsertAtArgs<T>) {
  const { index, element } = args;
  const lastIndex = array.length - 1;

  if (index === lastIndex || index > lastIndex) {
    const result = array;
    result.push(element);

    return result;
  }

  const result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (index === i) {
      result.push(element);
    }

    result.push(array[i]);
  }

  return result;
}
