export function isContainNil<T>(array: T[]) {
  let result = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined || array[i] === null) {
      result = true;

      break;
    }
  }

  return result;
}
