const stats = require('./stats');

describe('stats', () => {
  it('gets maximum value', () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });
});
