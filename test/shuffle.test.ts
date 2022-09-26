import { describe, expect, it } from 'vitest';

import { shuffle } from '../src/shuffle';

describe('shuffle', () => {
  it('shuffles element correctly', () => {
    const result = shuffle([1, 2, 3, 4, 5]);

    expect(result).to.not.eql([1, 2, 3, 4, 5]);
  });
});
