import { describe, expect, it } from 'vitest';

import { isContainNil } from '../src/isContainNil';

describe('isContainNil', () => {
  it('tests with array that contains `undefined`', () => {
    const array = [1, 2, 3, undefined, 5];

    const result = isContainNil(array);
    expect(result).to.eql(true);
  });

  it('tests with array that contains `undefined`', () => {
    const array = [1, 2, 3, null, 5];

    const result = isContainNil(array);
    expect(result).to.eql(true);
  });

  it('tests with clean array', () => {
    const array = [1, 2, 3, 4, 5];

    const result = isContainNil(array);
    expect(result).to.eql(false);
  });
});
