const stats = require('./stats');

describe('stats', () => {
  it('gets maximum value', () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });
  it('gets minimum value', () => {
    expect(stats.min([1, 2, 3, 4])).toBe(1);
  });
});
