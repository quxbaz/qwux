[![npm version](https://badge.fury.io/js/stateful-router.svg)](https://badge.fury.io/js/qwux)

# qwux
Minimal set of utility functions written in TypeScript. Mostly for personal use. I only include the functions I actually need here. Does not duplicate native javascript functions.

1. Item1
   1. subitem1
   1. subitem2
1. Item2 

## Table of contents
1. [Array functions](array-functions)
   1. [`after`](#after)
   1. [`before`](#before)

## Array functions

#### `after`
* Gets the item after an item in an array.
```js
after (array, item) => item
/*
@array The array to act on.
@item An item in the array.
@return The item found, or undefined.
*/
```
```js
// Example
after(['a', 'b', 'c'], 'b') => 'b'
```

#### `before`
* Gets the item before an item in an array.
```js
before (array, item) => item
/*
@array The array to act on.
@item An item in the array.
@return The item found, or undefined.
*/
```
```js
// Example
before(['a', 'b', 'c'], 'b') => 'a'
```

#### `last`
* Gets the last item in an array.
```js
last (array) => item
/*
@array The array to act on.
@return The last item.
*/
```
```js
// Example
last(['a', 'b', 'c'], 'b') => 'c'
```

#### `without`
* Returns an array with items filtered out.
```js
without (array, ...items) => array
/*
@array The array to act on.
@items The items to filter out.
@return The array minus @items.
*/
```
```js
// Example
without(['a', 'b', 'c'], 'c') => ['a', 'b']
```

#### `uniq`
* Retains only unique values from an array.
```js
uniq (array) => array
/*
@array The array to act on.
@return The array with unique values only.
*/
```
```js
// Example
uniq(['a', 'a', 'b'], 'c') => ['a', 'b']
```

#### `insert`
* Inserts an item into the array at a position. If the position exceeds the length of the array, append the item.
```js
insert (array, i, ...items) => array
/*
@array The array to act on.
@i The position to insert the item(s).
@items Any number of items to insert at @i.
@return The array with the items inserted at position @i.
*/
```
```js
// Example
insert(['a', 'c'], 1, 'b') => ['a', 'b', 'c']
```
