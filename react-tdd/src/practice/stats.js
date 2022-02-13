exports.max = (numbers) => Math.max(...numbers);
exports.min = (numbers) => Math.min(...numbers);
exports.avg = (numbers) =>
  numbers.reduce((acc, curr, _, { length }) => acc + curr / length, 0);
exports.sort = (numbers) => numbers.sort((a, b) => a - b);
exports.median = (numbers) => {
  numbers = exports.sort(numbers);
  const { length } = numbers;
  const middle = Math.floor(length / 2);
  return length % 2
    ? numbers[middle]
    : (numbers[middle - 1] + numbers[middle]) / 2;
};
