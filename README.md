

<!-- Start lib/after.js -->

## after

Gets the item after an item in an array.

### Params:

* **array** *array* 
* **value** *value* 

### Return:

* **value** 

<!-- End lib/after.js -->

<!-- Start lib/before.js -->

## before

Gets the item before an item in an array.

### Params:

* **array** *array* 
* **value** *value* 

### Return:

* **value** 

<!-- End lib/before.js -->

<!-- Start lib/capitalize.js -->

## capitalize

Capitalizes the first letter of a string.

### Params:

* **string** *s* 

### Return:

* **string** 

<!-- End lib/capitalize.js -->

<!-- Start lib/constrain.js -->

## constrain

Constrains a value between [min, max]

### Params:

* *value* 
* **array** *[min,* max]

### Return:

* constrained value

<!-- End lib/constrain.js -->

<!-- Start lib/each.js -->

## each

Iterates over a list of items.

### Params:

* **array|object** *list* 
* **function** *fn* 

### Return:

* **array** The result of the callbacks

<!-- End lib/each.js -->

<!-- Start lib/every.js -->

## every

Checks if all elements of an array are truthy for the predicate.

### Params:

* **array** *list* 
* **function** *cond* 

### Return:

* **boolean** 

<!-- End lib/every.js -->

<!-- Start lib/includes.js -->

## includes

Checks if value is in array.

### Params:

* **array|object** *list* 
* **value** *value* 

### Return:

* **boolean** 

<!-- End lib/includes.js -->

<!-- Start lib/isEmpty.js -->

## isEmpty

Checks if a value is empty. A value is considered empty if it has
no enumerabale properties.

### Params:

* **value** *value* 

### Return:

* **boolean** 

<!-- End lib/isEmpty.js -->

<!-- Start lib/isNil.js -->

## isNil

Checks if a value is undefined or null.

### Params:

* **value** *value* 

### Return:

* **boolean** 

<!-- End lib/isNil.js -->

<!-- Start lib/last.js -->

## last

Gets the last item in an array.

### Params:

* **array** *list* 

### Return:

* **value** 

<!-- End lib/last.js -->

<!-- Start lib/mapValues.js -->

## mapValues

Maps each value in an object and returns a new object.

### Params:

* **object** *obj* 
* **function** *fn* 

### Return:

* **object** 

<!-- End lib/mapValues.js -->

<!-- Start lib/move.js -->

## move

Moves an item in an array to another position and returns the new
array.

### Params:

* **array** *arr* 
* **number** *from* 
* **number** *to* 

### Return:

* **array** 

<!-- End lib/move.js -->

<!-- Start lib/omit.js -->

## omit

Omits props from an object.

### Params:

* **object** *obj* 
* **string|array|function** *props* 

### Return:

* **object** 

<!-- End lib/omit.js -->

<!-- Start lib/pick.js -->

## pick

Picks props from an object.

### Params:

* **object** *obj* 
* **string|array|function** *props* 

### Return:

* **object** 

<!-- End lib/pick.js -->

<!-- Start lib/shallowEqual.js -->

## shallowEqual

Compares two objects shallowly.

### Params:

* **object** *objA* 
* **object** *objB* 

### Return:

* **boolean** 

<!-- End lib/shallowEqual.js -->

<!-- Start lib/sortBy.js -->

## sortBy

Sorts a list of objects by a specific key and returns a new list.

### Params:

* **array** *list* 
* **string** *key* 

### Return:

* **array** 

<!-- End lib/sortBy.js -->

<!-- Start lib/throttle.js -->

## throttle

Limits a function to be called at most N times/second

### Params:

* **function** *fn* 
* **int** *ms* 

### Return:

* **function** 

<!-- End lib/throttle.js -->

<!-- Start lib/times.js -->

## times

Calls a function N times. @fn is called with the current iteration
starting from 0.

### Params:

* **int** *n* 
* **function|value** *fn* 

### Return:

* **array** The result of the callbacks

<!-- End lib/times.js -->

<!-- Start lib/toList.js -->

## toList

Converts an object to an array of the form [{key: value}, ...]

### Params:

* **object** *hash* 

### Return:

* **array** 

<!-- End lib/toList.js -->

<!-- Start lib/uniq.js -->

## uniq

Retains only unique values from an array.

### Params:

* **array** *array* 

### Return:

* **array** 

<!-- End lib/uniq.js -->

<!-- Start lib/uniqueId.js -->

## uniqueId

Generates a unique id.

### Return:

* **string** 

<!-- End lib/uniqueId.js -->

<!-- Start lib/values.js -->

## values

Gets the values from an object.

### Params:

* **object** *obj* 

### Return:

* **array** 

<!-- End lib/values.js -->

<!-- Start lib/without.js -->

## without

Returns an array with items filtered out.

### Params:

* **array** *array* 
* **values** *values* 

### Return:

* **array** 

<!-- End lib/without.js -->

