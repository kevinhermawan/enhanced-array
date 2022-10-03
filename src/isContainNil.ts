export function isContainNil<T>(array: T[]) {
  if (
    array.length > 0 &&
    (array[0] === null ||
      array[0] === undefined ||
      array[array.length - 1] === null ||
      array[array.length - 1] === undefined)
  ) {
    return true;
  }

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] === null || array[i] === undefined) return true;
  }

  return false;
}
