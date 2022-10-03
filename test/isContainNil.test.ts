import { describe, expect, it } from 'vitest';

import { isContainNil } from '../src/isContainNil';

describe('isContainNil', () => {
  it('tests with array that contains `undefined`', () => {
    const array1 = [undefined, 2, 3, 4, 5];
    const array2 = [1, 2, undefined, 4, 5];
    const array3 = [1, 2, 3, 4, undefined];

    const result1 = isContainNil(array1);
    const result2 = isContainNil(array2);
    const result3 = isContainNil(array3);

    expect([result1, result2, result3]).to.eql([true, true, true]);
  });

  it('tests with array that contains `undefined`', () => {
    const array1 = [null, 2, 3, 4, 5];
    const array2 = [1, 2, null, 4, 5];
    const array3 = [1, 2, 3, 4, null];

    const result1 = isContainNil(array1);
    const result2 = isContainNil(array2);
    const result3 = isContainNil(array3);

    expect([result1, result2, result3]).to.eql([true, true, true]);
  });

  it('tests with clear array', () => {
    const array = [1, 2, 3, 4, 5];

    const result = isContainNil(array);
    expect(result).to.eql(false);
  });
});
