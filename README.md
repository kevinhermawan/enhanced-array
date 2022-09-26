# Enhanced Array

A collection of common utilities for the JavaScript array.

> This library copies common utilities from other languages. For advanced utilities, please use a library like Lodash instead.

## Installation

```
npm i enhanced-array
```

Only need a few? Just copy the source code :)

## API

### Accessing Elements

#### [getFirst](/src/getFirst.ts)

Returns the first element of the array.

```ts
import { getFirst } from 'enhanced-array';

const result = getFirst([1, 2, 3, 4, 5]);
console.log(result); // 1
```

> **Time complexity:**
>
> O(1)

#### [getLast](/src/getLast.ts)

Returns the last element of the array.

```ts
import { getLast } from 'enhanced-array';

const result = getLast([1, 2, 3, 4, 5]);
console.log(result); // 5
```

> **Time complexity:**
>
> O(1)

---

### Adding Elements

#### [insertAt](/src/insertAt.ts)

Inserts a new element at the specified position.

```ts
import { insertAt } from 'enhanced-array';

const result = insertAt([1, 2, 3, 4, 5], { index: 3, element: 9 });
console.log(result); // [1, 2, 3, 9, 4, 5]
```

> **Time complexity:**
>
> O(n), where n is the length of the array.
>
> O(1), if `index` is the last index of the array.

---

### Inspecting Elements

#### [isContainNil](/src/isContainNil.ts)

Returns a boolean that indicates whether the array contains `undefined` or `null`.

```ts
import { isContainNil } from 'enhanced-array';

const result1 = isContainNil([1, 2, 3, 4, 5]);
console.log(result1); // false

const result2 = isContainNil([1, 2, undefined, 4, 5]);
console.log(result2); // true

const result3 = isContainNil([1, 2, null, 4, 5]);
console.log(result3); // true
```

> **Time complexity:**
>
> O(n), where n is the length of the array.
>
> O(1), if `index` is the last index of the array.

#### [isEmpty](/src/isEmpty.ts)

Returns a boolean that indicates whether the array is empty.

```ts
import { isEmpty } from 'enhanced-array';

const result1 = isEmpty([1, 2, 3, 4, 5]);
console.log(result1); // false

const result2 = isEmpty([]);
console.log(result2); // true
```

> **Time complexity:**
>
> O(1)

---

### Removing Elements

#### [removeAt](/src/removeAt.ts)

Removes the element at the specified position.

```ts
import { removeAt } from 'enhanced-array';

const result = removeAt([1, 2, 3, 4, 5], { index: 3 });
console.log(result); // [1, 2, 3, 5]
```

> **Time complexity:**
>
> O(n), where n is the length of the array.
>
> O(1), if `index` is the last index of the array.

---

### Reordering Elements

#### [move](/src/move.ts)

Moves the element at the specified position to the specified position.

```ts
import { move } from 'enhanced-array';

const result = move([1, 2, 3, 4, 5], { index: 0, toIndex: 4 });
console.log(result); // [2, 3, 4, 5, 1]
```

> **Time complexity:**
>
> O(n), where n is the length of the array.

#### [shuffle](/src/shuffle.ts)

Shuffles the element of the array. Implements [Fisher-Yates shuffle Algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

```ts
import { shuffle } from 'enhanced-array';

const result = shuffle([1, 2, 3, 4, 5]);
console.log(result); // [5, 3, 2, 4, 1] (shuffled)
```

> **Time complexity:**
>
> O(n), where n is the length of the array.

#### [swap](/src/swap.ts)

Exchanges the element at the specified indices of the array.

```ts
import { swap } from 'enhanced-array';

const result = swap([1, 2, 3, 4, 5], { i: 0, j: 4 });
console.log(result); // [5, 2, 3, 4, 1]
```

> **Time complexity:**
>
> O(1)

## Stolen From

- [Swift's Array](https://developer.apple.com/documentation/swift/array)
