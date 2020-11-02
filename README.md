[![npm version](https://badge.fury.io/js/stateful-router.svg)](https://badge.fury.io/js/qwux)

# qwux
Minimal set of utility functions written in TypeScript. Mostly for personal use. I only include the functions I actually need here. Does not duplicate native javascript functions.

### Array functions

#### `after`
* Gets the item after an item in an array.
```js
after (array, item) => item

// @array The array to act on.
// @item An item in the array.
// @return The item found, or undefined.
```
`Example`
```js
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
// @return The last item.

// Example:
last(['a', 'b', 'c'], 'b') => 'c'
```

#### `without`
* Returns an array with items filtered out.
```js
without (array, ...items) => array

// @array The array to act on.
// @items The items to filter out.
// @return The array minus @items.

// Example:
without(['a', 'b', 'c'], 'c') => ['a', 'b']
```

#### `uniq`
* Retains only unique values from an array.
```js
uniq (array) => array

// @array The array to act on.
// @return Unique values onlyl

// Example:
uniq(['a', 'a', 'b'], 'c') => ['a', 'b']
```

#### `insert`
* Inserts an item into the array at a position. If the position exceeds the length of the array, append the item.
```js
insert (array, i, ...items) => array

// @array The array to act on.
// @i The position to insert the item(s).
// @items Any number of items to insert at @i.
// @return The array with the items inserted at position @i.

// Example:
insert(['a', 'c', 'd'], 1, 'b') => ['a', 'b', 'c', 'd']
```
