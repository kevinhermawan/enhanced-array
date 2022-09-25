import { describe, expect, it } from 'vitest';

import { getFirst } from '../src/getFirst';

describe('getFirst', () => {
  it('gets first element of array', () => {
    const array = [1, 2, 3, 4, 5];

    const result = getFirst(array);
    expect(result).to.eql(1);
  });
});
