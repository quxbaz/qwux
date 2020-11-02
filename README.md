[![npm version](https://badge.fury.io/js/stateful-router.svg)](https://badge.fury.io/js/qwux)

# qwux
Minimal set of utility functions written in TypeScript. Mostly for personal use. I only include the functions I actually need here. Does not duplicate native javascript functions.

### Array functions

#### `after (array, item) => value`
Gets the item after an item in an array.

> `@array` The array to act on.
> `@item` Any item in the array.
> `@return` The item found, or undefined.


## before

Gets the item before an item in an array.

### Params:

* **array** *array*
* **value** *value*

### Return:

* **value**

## last

Gets the last item in an array.

### Params:

* **array** *array*

### Return:

* **value**

## without

Returns an array with items filtered out.

### Params:

* **array** *array*
* **values** *values*

### Return:

* **array**

## uniq

Retains only unique values from an array.

### Params:

* **array** *array*

### Return:

* **array**

## insert

Inserts an item into an array at a position. If the position
exceeds the length of the array, append the item.

### Params:

* **array** *array*
* **number** *i*
* **value** *item*

### Return:

* **array**

## move

Moves an item in an array to another position and returns the new
array.

### Params:

* **array** *arr*
* **number** *from*
* **number** *to*

### Return:

* **array**

## divide

Divides an array into two parts at a position.

### Params:

* **array** *array*
* **number** *i*

### Return:

* **array** [leftArray, rightArray]

## getRandomItem

Gets a random item from an array.

### Params:

* **array** *array*

SECTION: Object

Iterates over an object.

### Params:

* **object** *obj*
* **function** *fn*

### Return:

* **array**

## values

Gets the values from an object.

### Params:

* **object** *obj*

### Return:

* **array**

## pick

Picks props from an object.

### Params:

* **object** *obj*
* **string** *keys*

### Return:

* **object**

## omit

Omits props from an object.

### Params:

* **object** *obj*
* **string** *props*

### Return:

* **object**

## objectMap

Similar to Array.map, but for objects. Maps each value in an object
and returns a new object, maintaining its {key: value} structure.

### Params:

* **object** *obj*
* **function** *fn*

### Return:

* **object**

## toArray

Converts an object to an array of the form
[{key: value}, {key: value}, ...]

### Params:

* **object** *obj*

### Return:

* **array**

SECTION: String

## capitalize

Capitalizes the first letter of a string.

### Params:

* **string** *s*

### Return:

* **string**

SECTION: Values

## isEmpty

Checks if a value is empty. A value is considered empty if it
either has no enumerabale properties or length 0.

### Params:

* **array|object|string** *col*

### Return:

* **boolean**

## isNil

Checks if a value is undefined or null.

### Params:

* **value** *value*

### Return:

* **boolean**

SECTION: Math

## constrain

Constrains a value between [min, max]

### Params:

* *value*
* **array** *[min,* max]

### Return:

* constrained value

SECTION: Timing

## throttled

Limits a function to be called at most N times/second.

### Params:

* **function** *fn*
* **number** *ms*

### Return:

* **function**

SECTION: Sorting

## sortByKey

Sorts an array of objects by a specific key and returns a new array.

### Params:

* **array** *array*
* **string** *key*

### Return:

* **array**

SECTION: Functions

## noop

Returns undefined.

## identity

Returns the given value.

### Params:

* **any** *value*

### Return:

* **any** value

## compose

Composes multiple functions against a value.

### Params:

* **functions** *...fns*
* **any** *value*

### Return:

* **any** The result of the function composition.

## repeat

Repeats a value or calls a function N times.

### Params:

* **int** *n*
* **value|function** *value*

### Return:

* **array** The result of the callbacks

SECTION: Misc

## uniqId

Generates a unique id.

### Return:

* **string**
