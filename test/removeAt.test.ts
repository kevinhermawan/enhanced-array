import { describe, expect, it } from 'vitest';

import { removeAt } from '../src/removeAt';

describe('removeAt', () => {
  it('removes element from the first', () => {
    const array = [1, 2, 3, 4, 5];

    const result = removeAt(array, { index: 0 });
    expect(result).to.eql([2, 3, 4, 5]);
  });

  it('removes element from the middle', () => {
    const array = [1, 2, 3, 4, 5];

    const result = removeAt(array, { index: 3 });
    expect(result).to.eql([1, 2, 3, 5]);
  });

  it('removes element from the last', () => {
    const array = [1, 2, 3, 4, 5];

    const result = removeAt(array, { index: array.length - 1 });
    expect(result).to.eql([1, 2, 3, 4]);
  });

  it('handles index out of range', () => {
    const array = [1, 2, 3, 4, 5];

    const result = removeAt(array, { index: 99 });
    expect(result).to.eql([1, 2, 3, 4, 5]);
  });
});
