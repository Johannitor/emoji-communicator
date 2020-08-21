export function findFirstThuethyItem<T>(items: T[]): T | undefined {
  return items.find((item) => !!item);
}
