# qwux
https://badge.fury.io/js/qwux.svg

Minimal set of utility functions written in TypeScript. Mostly for personal use. I only include the functions I actually need here. Does not duplicate native javascript functions.

[License](#license).

## API
- [Arrays](#arrays)
   - [`after`](#after) [`before`](#before) [`last`](#last) [`without`](#without) [`uniq`](#uniq) [`insert`](#insert) [`move`](#move) [`divide`](#divide)
- [Objects](#objects)
   - [`isTrueObject`](#istrueobject) [`values`](#values) [`each`](#each) [`pick`](#pick) [`omit`](#omit) [`objectMap`](#objectmap) [`toArray`](#toarray)
- [Strings](#strings)
   - [`capitalize`](#capitalize)
- [Values](#values)
   - [`isEmpty`](#isEmpty) [`isNil`](#isNil)
- [Functions](#functions)
   - [`noop`](#noop) [`identity`](#identity) [`compose`](#compose) [`repeat`](#repeat)
- [Math](#math)
   - [`constrain`](#constrain)
- [Sorting](#sorting)
   - [`sortByKey`](#sortbykey)
- [Timing](#timing)
   - [`throttled`](#throttled)
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
move (array, from, to) => array
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

## Objects

#### `isTrueObject`
* Determines if a value is a true object.
* Only `{}` or `{v: k, ...}` values are considered true objects.
```js
isTrueObject (value) => boolean
/*
@value Any value.
@return True if the object is a true object.
*/
```
```js
// Examples
isTrueObject({}) => true
isTrueObject([]) => false
isTrueObject(null) => false
isTrueObject(undefined) => false
isTrueObject(function () {}) => false
isTrueObject('string') => false
isTrueObject(42) => false
```

#### `values`
* Gets the values of an object.
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

#### `pick`
* Picks props from an object and returns a new object.
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

#### `omit`
* Omits props from an object and returns a new object.
```js
omit (obj, ...keys) => object
/*
@obj The object to act on.
@keys The keys to omit from @obj.
@return The new object without @keys.
*/
```
```js
// Examples
omit({a:1}, 'a') => {}
omit({a:1, b:2, c:3}, 'a', 'b') => {c:3}
```

#### `objectMap`
* Maps each value in an object and returns a new object. Similar to array map, but for objects.
```js
objectMap (obj, fn) => object
/*
@obj The object to map over.
@fn (value, key) The function to call over each property of object. Its return
                 value will be used to form the new object.
@return The new object.
*/
```
```js
// Example
objectMap({a:1, b:2}, (v, k) => v * 2) => {a:2, b:4}
```

#### `toArray`
* Converts an object to an array of the form `[{key: value}, ...]`.
```js
toArray (obj) => array
/*
@obj The object to convert.
@return An array of {key: value} objects.
*/
```
```js
// Example
toArray({a:1, b:2}) => [{a:1}, {b:2}]
```

## Strings

#### `capitalize`
* Capitalizes the first letter of a string.
```js
capitalize (str) => string
/*
@str The string to capitalize.
@return The capitalized string.
*/
```
```js
// Examples
capitalize('foo') => 'Foo'
capitalize('foo bar') => 'Foo bar'  // Only affects the first character.
capitalize(' foo') => ' foo'
```

## Values

#### `isEmpty`
* Checks if a value is empty.
* Values are considered empty if they have zero length or are non-enumerable.
```js
isEmpty (value) => boolean
/*
@value Any value of any type.
@return True if the value is empty, otherwise false.
*/
```
```js
// Examples
isEmpty([]) => true
isEmpty([a]) => false
isEmpty({}) => true
isEmpty({a:1}) => false
isEmpty(42) => true
isEmpty(null) => true
isEmpty('foobar') => false
isEmpty(function () {}) => true
```

#### `isNil`
* Returns true if a value is undefined or null.
```js
isNil (value) => boolean
/*
@value Any value.
@return True if the value is undefined or null.
*/
```
```js
// Examples
isNil(null) => true
isNil(undefined) => true
isNil([]) => false
```

## Functions

#### `noop`
* Returns `undefined`.
```js
noop () => undefined
```

#### `identity`
* Returns the given value.
```js
identity (value) => value
```
```js
// Example
identity(myVar) => myVar
```

#### `compose`
* Composes multiple functions against a value.
* The return value of each call is provided as the argument to the subsequent call.
* Functions are called from right to left.
* It takes the form `f(g(h(x)))` and allows you to use the prettier `(f∘g∘h)(x)` form.
```js
compose = (...fns) => (value) => result
/*
@fns Called from right to left.
@value The value to call against.
@return The final return value after all functions are applied.
*/
```
```js
// Example
compose(
  sumArray,
  array => map(x => x * 2)  // [4, 6, 8]
  array => map(x => x + 1)  // [2, 3, 4]
)([1, 2, 3]) => 18
```

#### `repeat`
* Repeats a value or calls a function `n` times.
```js
repeat (n, value) => results
/*
@n The number of times to repeat the value or function.
@value A value or function to repeat.
@return An array of results.
*/
```
```js
// Examples
repeat(5, a) => [a, a, a, a, a]
repeat(5, () => a) => [a, a, a, a, a]
```

## Math

#### `constrain`
* Constrains a value between a `min` and `max` value.
```js
constrain (value, [min, max]) => number
/*
@value The value to constrain.
@min The lower bound.
@max The upper bound.
@return The constrained value.
*/
```
```js
// Examples
constrain(15, [10, 20]) => 15
constrain(0, [10, 20]) => 10
constrain(100, [10, 20]) => 20
```

## Sorting

#### `sortByKey`
* Sorts an array of objects by key and returns the new array.
```js
sortByKey (array, key) => array
/*
@array The array of objects to sort.
@key The key to sort by.
@return The new sorted array.
*/
```
```js
// Example
sortByKey([{name: 'foo'}, {name: 'bar'}], 'name') => [{name: 'bar', name: 'foo'}]
```

## Timing

#### `throttled`
* Limits how soon a function may be called relative to its previous call.
```js
throttled (fn, ms) => function
/*
@fn The function to throttle.
@ms How many milliseconds must elapse before this function can run again.
@return The throttled function.
*/
```
```js
// Example
onChange = throttled(onChange, 1000)  // Process change events at most once per second.
```

## Misc

#### `uniqid`
* Generates a unique id.
```js
uniqId () => id
/*
@return A unique string id
*/
```
```js
// Examples
uniqId() => '0'
uniqId() => '1'
uniqId() => '2'
```

## License
[MIT](https://www.mit.edu/~amini/LICENSE.md)
