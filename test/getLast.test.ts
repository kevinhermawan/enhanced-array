import { describe, expect, it } from 'vitest';

import { getLast } from '../src/getLast';

describe('getLast', () => {
  it('gets last element of array', () => {
    const array = [1, 2, 3, 4, 5];

    const result = getLast(array);
    expect(result).to.eql(5);
  });
});
