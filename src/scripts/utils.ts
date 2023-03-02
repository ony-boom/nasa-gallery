export function getRandomValueFromArray<T = unknown>(array: T[]): T {
  const randomIndex = Math.round(Math.random() * array.length);
  return array[randomIndex];
}
