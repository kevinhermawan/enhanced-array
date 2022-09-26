export function shuffle<T>(array: T[]) {
  const result = array;

  for (let i = result.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    result.splice(i, 1, result.splice(randomIndex, 1, result[i])[0]);
  }

  return result;
}
