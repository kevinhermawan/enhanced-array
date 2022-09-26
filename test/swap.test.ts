import { describe, expect, it } from 'vitest';

import { swap } from '../src/swap';

describe('swap', () => {
  it('swaps element correctly', () => {
    const result = swap([1, 2, 3, 4, 5], { index: 0, withIndex: 4 });

    expect(result).to.eql([5, 2, 3, 4, 1]);
  });
});
