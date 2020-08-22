export function randomBetween(
  min: number,
  max: number,
  float?: boolean
): number {
  const randomNumber = min + Math.random() * (max - min);
  return float ? randomNumber : Math.floor(randomNumber);
}
