[![npm version](https://badge.fury.io/js/stateful-router.svg)](https://badge.fury.io/js/qwux)

# qwux
Minimal set of utility functions written in TypeScript. Mostly for personal use. I only include the functions I actually need here. Does not duplicate native javascript functions.

### Array functions

#### `after`
* Gets the item after an item in an array.
```js
after (array, item) => item

/*
  @array The array to act on.
  @item An item in the array.
  @return The item found, or undefined.
*/

// Example:
after(['a', 'b', 'c'], 'b') => 'b'
```

#### `before`
* Gets the item before an item in an array.
```js
before (array, item) => item

// @array The array to act on.
// @item An item in the array.
// @return The item found, or undefined.

// Example:
before(['a', 'b', 'c'], 'b') => 'a'
```

#### `last`
* Gets the last item in an array.
```js
last (array) => item

// @array The array to act on.
// @return The last item in @array.

// Example:
before(['a', 'b', 'c'], 'b') => 'a'
```
