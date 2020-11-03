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
after([a, b, c], b) => c
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
last([a, b, c]) => c
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
// Examples
without([a, b, c], c) => [a, b]
without([a, b, c], b, c) => [a]
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
// Examples
uniq([a, a, b]) => [a, b]
uniq([a, a, b, b, c, c]) => [a, b, c]
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

#### `getRandomItem`
* Gets a random item from an array.
```js
getRandomItem (array) => item
/*
@array The array to act on.
@return A random item in the array.
*/
```
```js
// Example
getRandomItem([a, b, 4]) => 4
```

## Objects

#### `each`
* Iterates over an object.
```js
each (obj, fn) => results
/*
@obj The object to iterate over.
@fn (value, key) Called over each member of the object.
@return An array of return values from @fn.
*/
```
```js
// Examples
each({a:1, b:2, c:3}, v => v * 2) => [2, 4, 6]
each({a:1, b:2, c:3}, (v, k) => {k: v}) => [{a:1}, {b:2}, {c:3}]
```

#### `values`
* Gets the values from an object.
```js
values (obj) => array
/*
@obj The object to act on.
@return The values of the object.
*/
```
```js
// Example
values({a:1, b:2} => [1, 2]
```

#### `pick`
* Picks props from an objecta and returns a new object.
```js
pick (obj, ...keys) => object
/*
@obj The object to act on.
@keys The keys to pick from the object.
@return The new object formed from the picked keys.
*/
```
```js
// Examples
pick({a:1, b:2}, 'b') => {b:2}
pick({a:1, b:2, c:3}, 'a', 'b') => {a:1, b:2}
```
