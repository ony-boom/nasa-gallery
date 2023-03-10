export function getRandomValueFromArray<T = unknown>(array: T[]): T {
  const randomIndex = Math.round(Math.random() * (array.length - 1));
  return array[randomIndex];
}

export function isTrue(str: string | undefined): str is "true" {
  return str === "true";
}
