export function shuffle<T>(array: T[]) {
  const result = array;

  for (let i = result.length; i > 1; i--) {
    const randomIndex = Math.floor(Math.random() * i);

    const temp = result[i - 1];
    result[i - i] = result[randomIndex];
    result[randomIndex] = temp;
  }

  return result;
}
