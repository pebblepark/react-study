exports.max = (numbers) => Math.max(...numbers);
exports.min = (numbers) => Math.min(...numbers);
exports.avg = (numbers) =>
  numbers.reduce((acc, curr, _, { length }) => acc + curr / length, 0);
