export function randomArrayItem<T>(array: T[]): T {
  const arrayLength = array.length;
  const index = Math.floor(Math.random() * arrayLength);

  return array[index];
}
