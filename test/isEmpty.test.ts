import { describe, expect, it } from 'vitest';

import { isEmpty } from '../src/isEmpty';

describe('isEmpty', () => {
  it('tests with empty array', () => {
    const array: number[] = [];

    const result = isEmpty(array);
    expect(result).to.eql(true);
  });

  it('tests with non-empty array', () => {
    const array: number[] = [1, 2, 3, 4, 5];

    const result = isEmpty(array);
    expect(result).to.eql(false);
  });
});
