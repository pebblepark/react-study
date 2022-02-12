exports.max = (numbers) => {
  let result = numbers[0];
  numbers.forEach((n) => {
    if (n > result) {
      result = n;
    }
  });
  return result;
};
