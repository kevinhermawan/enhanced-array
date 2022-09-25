import { describe, expect, it } from 'vitest';

import { insertAt } from '../src/insertAt';

describe('insertAt', () => {
  it('inserts element into the first', () => {
    const array = [1, 2, 3, 4, 5];

    const result = insertAt(array, { index: 0, element: 9 });
    expect(result).to.eql([9, 1, 2, 3, 4, 5]);
  });

  it('inserts element into the middle', () => {
    const array = [1, 2, 3, 4, 5];

    const result = insertAt(array, { index: 3, element: 9 });
    expect(result).to.eql([1, 2, 3, 9, 4, 5]);
  });

  it('inserts element into the last', () => {
    const array = [1, 2, 3, 4, 5];

    const result = insertAt(array, { index: array.length - 1, element: 9 });
    expect(result).to.eql([1, 2, 3, 4, 5, 9]);
  });

  it('handles index out of range', () => {
    const array = [1, 2, 3, 4, 5];

    const result = insertAt(array, { index: 99, element: 9 });
    expect(result).to.eql([1, 2, 3, 4, 5]);
  });
});
