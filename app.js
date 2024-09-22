function groupBy(array, callback) {
  return array.reduce((acc, item) => {
    const groupKey = callback(item);
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});
}

const values = [4.1, 4.2, 7.3, 5.1, 5.2, 7.7];
const result = groupBy(values, Math.floor);

console.log(result);
