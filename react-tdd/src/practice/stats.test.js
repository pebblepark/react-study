const stats = require('./stats');

describe('stats', () => {
  it('gets maximum value', () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });
  it('gets minimum value', () => {
    expect(stats.min([1, 2, 3, 4])).toBe(1);
  });
  it('gets average value', () => {
    expect(stats.avg([1, 2, 3, 4, 5])).toBe(3);
  });
  describe('median', () => {
    it('sorts the array', () => {
      expect(stats.sort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
    });
    it('gets the median for odd length', () => {
      expect(stats.median([1, 2, 5, 4, 3])).toBe(3);
    });
    it('gets the median for even length', () => {
      expect(stats.median([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
  });
});
