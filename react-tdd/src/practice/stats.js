exports.max = (numbers) => Math.max(...numbers);
exports.min = (numbers) => Math.min(...numbers);
exports.avg = (numbers) => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
};
