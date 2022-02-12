function sum(a, b) {
  return a + b;
}

function sumOf(numbers) {
  let result = 0;
  numbers.forEach((n) => {
    result += n;
  });
  return result;
}

exports.sum = sum;
exports.sumOf = sumOf;
