[![npm version](https://badge.fury.io/js/stateful-router.svg)](https://badge.fury.io/js/qwux)

# qwux
Minimal set of utility functions written in TypeScript. Mostly for personal use. I only include the functions I actually need here. Does not duplicate native javascript functions.

## Table of contents
- [Arrays](#arrays)
   - [`after`](#after) [`before`](#before) [`last`](#last) [`without`](#without) [`uniq`](#uniq) [`insert`](#insert) [`move`](#move) [`divide`](#divide) [`getRandomItem`](#getRandomItem)
- [Objects](#objects)
   - [`each`](#each) [`values`](#values) [`picks`](#picks) [`omit`](#omit) [`objectMap`](#objectMap) [`toArray`](#toArray)
- [Strings](#strings)
   - [`capitalize`](#capitalize)
- [Values](#values)
   - [`isEmpty`](#isEmpty) [`isNil`](#isNil)
- [Functions](#functions)
   - [`noop`](#noop) [`identity`](#identity) [`compose`](#compose) [`repeat`](#repeat)
- [Math](#math)
   - [`constrain`](#constrain)
- [Timing](#timing)
   - [`throttled`](#throttled)
- [Sorting](#sorting)
   - [`sortByKey`](#sortByKey)
- [Misc](#misc)
   - [`uniqId`](#uniqId)

## Arrays

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
after([a, b, c], b) => b
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
before([a, b, c], b) => a
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
last([a, b, c], b) => c
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
without([a, b, c], c) => [a, b]
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
uniq([a, a, b], c) => [a, b]
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
insert([a, c], 1, b) => [a, b, c]
```

#### `move`
* Moves an item in an array to another position and returns the new array.
```js
const move = (array, from, to) => array
/*
@array The array to act on.
@from The source position.
@to The destination position.
@return New array with item moved.
*/
```
```js
// Example
move([a, b, c], 0, 2) => [b, c, a]
```

#### `divide`
* Divides an array into two parts at a position.
```js
divide (array, i) => [array, array]
/*
@array The array to act on.
@i The position to divide the array.
@return The divided array.
*/
```
```js
// Example
divide([a, b, c], 1) => [[a], [b, c]]
```
