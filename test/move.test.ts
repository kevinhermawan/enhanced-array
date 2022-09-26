import { describe, expect, it } from 'vitest';

import { move } from '../src/move';

describe('move', () => {
  it('moves element correctly', () => {
    const result = move([1, 2, 3, 4, 5], { index: 0, toIndex: 4 });

    expect(result).to.eql([2, 3, 4, 5, 1]);
  });
});
