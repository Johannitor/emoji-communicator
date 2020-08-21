export function findLastThuethyItem<T>(items: T[]): T | undefined {
  let latestFoundItem: T | undefined;

  items.forEach((item) => {
    if (!!item) {
      latestFoundItem = item;
    }
  });

  return latestFoundItem;
}
