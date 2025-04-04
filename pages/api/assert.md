---
title: "Assert"
layout: "base.njk"
---

The `assert` style is very similar to node.js’ included assert module, with a bit of extra sugar. Of the three style options, `assert` is the only one that is not chainable. Check out the [Style Guide](/guide/styles) for a comparison.

## API Reference

### assert(expression, message)

- @param { Mixed } expression to test for truthiness
- @param { String } message to display on error

Write your own test expressions.

```js
assert("foo" !== "bar", "foo is not bar");
assert(Array.isArray([]), "empty arrays are arrays");
```

### .fail([message])

### .fail(actual, expected, [message], [operator])

- @param { Mixed } actual
- @param { Mixed } expected
- @param { String } message
- @param { String } operator

Throw a failure. Node.js `assert` module-compatible.

```js
assert.fail();
assert.fail("custom error message");
assert.fail(1, 2);
assert.fail(1, 2, "custom error message");
assert.fail(1, 2, "custom error message", ">");
assert.fail(1, 2, undefined, ">");
```

### .isOk(object, [message])

- @param { Mixed } object to test
- @param { String } message

Asserts that `object` is truthy.

```js
assert.isOk("everything", "everything is ok");
assert.isOk(false, "this will fail");
```

### .isNotOk(object, [message])

- @param { Mixed } object to test
- @param { String } message

Asserts that `object` is falsy.

```js
assert.isNotOk("everything", "this will fail");
assert.isNotOk(false, "this will pass");
```

### .equal(actual, expected, [message])

- @param { Mixed } actual
- @param { Mixed } expected
- @param { String } message

Asserts non-strict equality (`==`) of `actual` and `expected`.

```js
assert.equal(3, "3", "== coerces values to strings");
```

### .notEqual(actual, expected, [message])

- @param { Mixed } actual
- @param { Mixed } expected
- @param { String } message

Asserts non-strict inequality (`!=`) of `actual` and `expected`.

```js
assert.notEqual(3, 4, "these numbers are not equal");
```

### .strictEqual(actual, expected, [message])

- @param { Mixed } actual
- @param { Mixed } expected
- @param { String } message

Asserts strict equality (`===`) of `actual` and `expected`.

```js
assert.strictEqual(true, true, "these booleans are strictly equal");
```

### .notStrictEqual(actual, expected, [message])

- @param { Mixed } actual
- @param { Mixed } expected
- @param { String } message

Asserts strict inequality (`!==`) of `actual` and `expected`.

```js
assert.notStrictEqual(3, "3", "no coercion for strict equality");
```

### .deepEqual(actual, expected, [message])

- @param { Mixed } actual
- @param { Mixed } expected
- @param { String } message

Asserts that `actual` is deeply equal to `expected`.

```js
assert.deepEqual({ tea: "green" }, { tea: "green" });
```

### .notDeepEqual(actual, expected, [message])

- @param { Mixed } actual
- @param { Mixed } expected
- @param { String } message

Assert that `actual` is not deeply equal to `expected`.

```js
assert.notDeepEqual({ tea: "green" }, { tea: "jasmine" });
```

### .isAbove(valueToCheck, valueToBeAbove, [message])

- @param { Mixed } valueToCheck
- @param { Mixed } valueToBeAbove
- @param { String } message

Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`.

```js
assert.isAbove(5, 2, "5 is strictly greater than 2");
```

### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])

- @param { Mixed } valueToCheck
- @param { Mixed } valueToBeAtLeast
- @param { String } message

Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`.

```js
assert.isAtLeast(5, 2, "5 is greater or equal to 2");
assert.isAtLeast(3, 3, "3 is greater or equal to 3");
```

### .isBelow(valueToCheck, valueToBeBelow, [message])

- @param { Mixed } valueToCheck
- @param { Mixed } valueToBeBelow
- @param { String } message

Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`.

```js
assert.isBelow(3, 6, "3 is strictly less than 6");
```

### .isAtMost(valueToCheck, valueToBeAtMost, [message])

- @param { Mixed } valueToCheck
- @param { Mixed } valueToBeAtMost
- @param { String } message

Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`.

```js
assert.isAtMost(3, 6, "3 is less than or equal to 6");
assert.isAtMost(4, 4, "4 is less than or equal to 4");
```

### .isTrue(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is true.

```js
let teaServed = true;
assert.isTrue(teaServed, "the tea has been served");
```

### .isNotTrue(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is not true.

```js
let tea = "tasty chai";
assert.isNotTrue(tea, "great, time for tea!");
```

### .isFalse(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is false.

```js
let teaServed = false;
assert.isFalse(teaServed, "no tea yet? hmm...");
```

### .isNotFalse(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is not false.

```js
let tea = "tasty chai";
assert.isNotFalse(tea, "great, time for tea!");
```

### .isNull(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is null.

```js
assert.isNull(err, "there was no error");
```

### .isNotNull(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is not null.

```js
let tea = "tasty chai";
assert.isNotNull(tea, "great, time for tea!");
```

### .isNaN

- @param { Mixed } value
- @param { String } message

Asserts that value is NaN.

```js
assert.isNaN(NaN, "NaN is NaN");
```

### .isNotNaN

- @param { Mixed } value
- @param { String } message

Asserts that value is not NaN.

```js
assert.isNotNaN(4, "4 is not NaN");
```

### .exists

- @param { Mixed } value
- @param { String } message

Asserts that the target is neither `null` nor `undefined`.

```js
let foo = "hi";

assert.exists(foo, "foo is neither `null` nor `undefined`");
```

### .notExists

- @param { Mixed } value
- @param { String } message

Asserts that the target is either `null` or `undefined`.

```js
let bar = null,
  baz;

assert.notExists(bar);
assert.notExists(baz, "baz is either null or undefined");
```

### .isUndefined(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is `undefined`.

```js
let tea;
assert.isUndefined(tea, "no tea defined");
```

### .isDefined(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is not `undefined`.

```js
let tea = "cup of chai";
assert.isDefined(tea, "tea has been defined");
```

### .isFunction(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is a function.

```js
function serveTea() {
  return "cup of tea";
}
assert.isFunction(serveTea, "great, we can have tea now");
```

### .isNotFunction(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is _not_ a function.

```js
let serveTea = ["heat", "pour", "sip"];
assert.isNotFunction(serveTea, "great, we have listed the steps");
```

### .isObject(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is an object of type ‘Object’ (as revealed by `Object.prototype.toString`). _The assertion does not match subclassed objects._

```js
let selection = { name: "Chai", serve: "with spices" };
assert.isObject(selection, "tea selection is an object");
```

### .isNotObject(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is _not_ an object of type ‘Object’ (as revealed by `Object.prototype.toString`).

```js
let selection = "chai";
assert.isNotObject(selection, "tea selection is not an object");
assert.isNotObject(null, "null is not an object");
```

### .isArray(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is an array.

```js
let menu = ["green", "chai", "oolong"];
assert.isArray(menu, "what kind of tea do we want?");
```

### .isNotArray(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is _not_ an array.

```js
let menu = "green|chai|oolong";
assert.isNotArray(menu, "what kind of tea do we want?");
```

### .isString(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is a string.

```js
let teaOrder = "chai";
assert.isString(teaOrder, "order placed");
```

### .isNotString(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is _not_ a string.

```js
let teaOrder = 4;
assert.isNotString(teaOrder, "order placed");
```

### .isNumber(value, [message])

- @param { Number } value
- @param { String } message

Asserts that `value` is a number.

```js
let cups = 2;
assert.isNumber(cups, "how many cups");
```

### .isNotNumber(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is _not_ a number.

```js
let cups = "2 cups please";
assert.isNotNumber(cups, "how many cups");
```

### .isFinite(value, [message])

- @param { Number } value
- @param { String } message

Asserts that `value` is a finite number. Unlike `.isNumber`, this will fail for `NaN` and `Infinity`.

```js
let cups = 2;
assert.isFinite(cups, "how many cups");

assert.isFinite(NaN); // throws
```

### .isBoolean(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is a boolean.

```js
let teaReady = true,
  teaServed = false;

assert.isBoolean(teaReady, "is the tea ready");
assert.isBoolean(teaServed, "has tea been served");
```

### .isNotBoolean(value, [message])

- @param { Mixed } value
- @param { String } message

Asserts that `value` is _not_ a boolean.

```js
let teaReady = "yep",
  teaServed = "nope";

assert.isNotBoolean(teaReady, "is the tea ready");
assert.isNotBoolean(teaServed, "has tea been served");
```

### .typeOf(value, name, [message])

- @param { Mixed } value
- @param { String } name
- @param { String } message

Asserts that `value`’s type is `name`, as determined by `Object.prototype.toString`.

```js
assert.typeOf({ tea: "chai" }, "object", "we have an object");
assert.typeOf(["chai", "jasmine"], "array", "we have an array");
assert.typeOf("tea", "string", "we have a string");
assert.typeOf(/tea/, "regexp", "we have a regular expression");
assert.typeOf(null, "null", "we have a null");
assert.typeOf(undefined, "undefined", "we have an undefined");
```

### .notTypeOf(value, name, [message])

- @param { Mixed } value
- @param { String } typeof name
- @param { String } message

Asserts that `value`’s type is _not_ `name`, as determined by `Object.prototype.toString`.

```js
assert.notTypeOf("tea", "number", "strings are not numbers");
```

### .instanceOf(object, constructor, [message])

- @param { Object } object
- @param { Constructor } constructor
- @param { String } message

Asserts that `value` is an instance of `constructor`.

```js
let Tea = function (name) {
    this.name = name;
  },
  chai = new Tea("chai");

assert.instanceOf(chai, Tea, "chai is an instance of tea");
```

### .notInstanceOf(object, constructor, [message])

- @param { Object } object
- @param { Constructor } constructor
- @param { String } message

Asserts `value` is not an instance of `constructor`.

```js
let Tea = function (name) {
    this.name = name;
  },
  chai = new String("chai");

assert.notInstanceOf(chai, Tea, "chai is not an instance of tea");
```

### .include(haystack, needle, [message])

- @param { Array | String } haystack
- @param { Mixed } needle
- @param { String } message

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a value in an array, a substring in a string, or a subset of properties in an object.

```js
assert.include([1, 2, 3], 2, "array contains value");
assert.include("foobar", "foo", "string contains substring");
assert.include(
  { foo: "bar", hello: "universe" },
  { foo: "bar" },
  "object contains property",
);
```

Strict equality (===) is used. When asserting the inclusion of a value in an array, the array is searched for an element that’s strictly equal to the given value. When asserting a subset of properties in an object, the object is searched for the given property keys, checking that each one is present and strictly equal to the given property value. For instance:

```js
let obj1 = { a: 1 },
  obj2 = { b: 2 };
assert.include([obj1, obj2], obj1);
assert.include({ foo: obj1, bar: obj2 }, { foo: obj1 });
assert.include({ foo: obj1, bar: obj2 }, { foo: obj1, bar: obj2 });
```

### .notInclude(haystack, needle, [message])

- @param { Array | String } haystack
- @param { Mixed } needle
- @param { String } message

Asserts that `haystack` does not include `needle`. Can be used to assert the absence of a value in an array, a substring in a string, or a subset of properties in an object.

```js
assert.notInclude([1, 2, 3], 4, "array doesn't contain value");
assert.notInclude("foobar", "baz", "string doesn't contain substring");
assert.notInclude(
  { foo: "bar", hello: "universe" },
  { foo: "baz" },
  "object doesn't contain property",
);
```

Strict equality (===) is used. When asserting the absence of a value in an array, the array is searched to confirm the absence of an element that’s strictly equal to the given value. When asserting a subset of properties in an object, the object is searched to confirm that at least one of the given property keys is either not present or not strictly equal to the given property value. For instance:

```js
let obj1 = { a: 1 },
  obj2 = { b: 2 };
assert.notInclude([obj1, obj2], { a: 1 });
assert.notInclude({ foo: obj1, bar: obj2 }, { foo: { a: 1 } });
assert.notInclude({ foo: obj1, bar: obj2 }, { foo: obj1, bar: { b: 2 } });
```

### .deepInclude(haystack, needle, [message])

- @param { Array | String } haystack
- @param { Mixed } needle
- @param { String } message

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a value in an array or a subset of properties in an object. Deep equality is used.

```js
let obj1 = { a: 1 },
  obj2 = { b: 2 };
assert.deepInclude([obj1, obj2], { a: 1 });
assert.deepInclude({ foo: obj1, bar: obj2 }, { foo: { a: 1 } });
assert.deepInclude({ foo: obj1, bar: obj2 }, { foo: { a: 1 }, bar: { b: 2 } });
```

### .notDeepInclude(haystack, needle, [message])

- @param { Array | String } haystack
- @param { Mixed } needle
- @param { String } message

Asserts that `haystack` does not include `needle`. Can be used to assert the absence of a value in an array or a subset of properties in an object. Deep equality is used.

```js
let obj1 = { a: 1 },
  obj2 = { b: 2 };
assert.notDeepInclude([obj1, obj2], { a: 9 });
assert.notDeepInclude({ foo: obj1, bar: obj2 }, { foo: { a: 9 } });
assert.notDeepInclude(
  { foo: obj1, bar: obj2 },
  { foo: { a: 1 }, bar: { b: 9 } },
);
```

### .nestedInclude(haystack, needle, [message])

- @param { Object } haystack
- @param { Object } needle
- @param { String } message

Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the inclusion of a subset of properties in an object. Enables the use of dot- and bracket-notation for referencing nested properties. ‘\[\]’ and ‘.’ in property names can be escaped using double backslashes.

```js
assert.nestedInclude({ ".a": { b: "x" } }, { "\\.a.[b]": "x" });
assert.nestedInclude({ a: { "[b]": "x" } }, { "a.\\[b\\]": "x" });
```

### .notNestedInclude(haystack, needle, [message])

- @param { Object } haystack
- @param { Object } needle
- @param { String } message

Asserts that ‘haystack’ does not include ‘needle’. Can be used to assert the absence of a subset of properties in an object. Enables the use of dot- and bracket-notation for referencing nested properties. ‘\[\]’ and ‘.’ in property names can be escaped using double backslashes.

```js
assert.notNestedInclude({ ".a": { b: "x" } }, { "\\.a.b": "y" });
assert.notNestedInclude({ a: { "[b]": "x" } }, { "a.\\[b\\]": "y" });
```

### .deepNestedInclude(haystack, needle, [message])

- @param { Object } haystack
- @param { Object } needle
- @param { String } message

Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the inclusion of a subset of properties in an object while checking for deep equality. Enables the use of dot- and bracket-notation for referencing nested properties. ‘\[\]’ and ‘.’ in property names can be escaped using double backslashes.

```js
assert.deepNestedInclude({ a: { b: [{ x: 1 }] } }, { "a.b[0]": { x: 1 } });
assert.deepNestedInclude(
  { ".a": { "[b]": { x: 1 } } },
  { "\\.a.\\[b\\]": { x: 1 } },
);
```

### .notDeepNestedInclude(haystack, needle, [message])

- @param { Object } haystack
- @param { Object } needle
- @param { String } message

Asserts that ‘haystack’ does not include ‘needle’. Can be used to assert the absence of a subset of properties in an object while checking for deep equality. Enables the use of dot- and bracket-notation for referencing nested properties. ‘\[\]’ and ‘.’ in property names can be escaped using double backslashes.

```js
assert.notDeepNestedInclude({ a: { b: [{ x: 1 }] } }, { "a.b[0]": { y: 1 } });
assert.notDeepNestedInclude(
  { ".a": { "[b]": { x: 1 } } },
  { "\\.a.\\[b\\]": { y: 2 } },
);
```

### .ownInclude(haystack, needle, [message])

- @param { Object } haystack
- @param { Object } needle
- @param { String } message

Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the inclusion of a subset of properties in an object while ignoring inherited properties.

```js
assert.ownInclude({ a: 1 }, { a: 1 });
```

### .notOwnInclude(haystack, needle, [message])

- @param { Object } haystack
- @param { Object } needle
- @param { String } message

Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the absence of a subset of properties in an object while ignoring inherited properties.

```js
Object.prototype.b = 2;

assert.notOwnInclude({ a: 1 }, { b: 2 });
```

### .deepOwnInclude(haystack, needle, [message])

- @param { Object } haystack
- @param { Object } needle
- @param { String } message

Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the inclusion of a subset of properties in an object while ignoring inherited properties and checking for deep equality.

```js
assert.deepOwnInclude({ a: { b: 2 } }, { a: { b: 2 } });
```

### .notDeepOwnInclude(haystack, needle, [message])

- @param { Object } haystack
- @param { Object } needle
- @param { String } message

Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the absence of a subset of properties in an object while ignoring inherited properties and checking for deep equality.

```js
assert.notDeepOwnInclude({ a: { b: 2 } }, { a: { c: 3 } });
```

### .match(value, regexp, [message])

- @param { Mixed } value
- @param { RegExp } regexp
- @param { String } message

Asserts that `value` matches the regular expression `regexp`.

```js
assert.match("foobar", /^foo/, "regexp matches");
```

### .notMatch(value, regexp, [message])

- @param { Mixed } value
- @param { RegExp } regexp
- @param { String } message

Asserts that `value` does not match the regular expression `regexp`.

```js
assert.notMatch("foobar", /^foo/, "regexp does not match");
```

### .property(object, property, [message])

- @param { Object } object
- @param { String } property
- @param { String } message

Asserts that `object` has a direct or inherited property named by `property`.

```js
assert.property({ tea: { green: "matcha" } }, "tea");
assert.property({ tea: { green: "matcha" } }, "toString");
```

### .notProperty(object, property, [message])

- @param { Object } object
- @param { String } property
- @param { String } message

Asserts that `object` does _not_ have a direct or inherited property named by `property`.

```js
assert.notProperty({ tea: { green: "matcha" } }, "coffee");
```

### .propertyVal(object, property, value, [message])

- @param { Object } object
- @param { String } property
- @param { Mixed } value
- @param { String } message

Asserts that `object` has a direct or inherited property named by `property` with a value given by `value`. Uses a strict equality check (===).

```js
assert.propertyVal({ tea: "is good" }, "tea", "is good");
```

### .notPropertyVal(object, property, value, [message])

- @param { Object } object
- @param { String } property
- @param { Mixed } value
- @param { String } message

Asserts that `object` does _not_ have a direct or inherited property named by `property` with value given by `value`. Uses a strict equality check (===).

```js
assert.notPropertyVal({ tea: "is good" }, "tea", "is bad");
assert.notPropertyVal({ tea: "is good" }, "coffee", "is good");
```

### .deepPropertyVal(object, property, value, [message])

- @param { Object } object
- @param { String } property
- @param { Mixed } value
- @param { String } message

Asserts that `object` has a direct or inherited property named by `property` with a value given by `value`. Uses a deep equality check.

```js
assert.deepPropertyVal({ tea: { green: "matcha" } }, "tea", {
  green: "matcha",
});
```

### .notDeepPropertyVal(object, property, value, [message])

- @param { Object } object
- @param { String } property
- @param { Mixed } value
- @param { String } message

Asserts that `object` does _not_ have a direct or inherited property named by `property` with value given by `value`. Uses a deep equality check.

```js
assert.notDeepPropertyVal({ tea: { green: "matcha" } }, "tea", {
  black: "matcha",
});
assert.notDeepPropertyVal({ tea: { green: "matcha" } }, "tea", {
  green: "oolong",
});
assert.notDeepPropertyVal({ tea: { green: "matcha" } }, "coffee", {
  green: "matcha",
});
```

### .nestedProperty(object, property, [message])

- @param { Object } object
- @param { String } property
- @param { String } message

Asserts that `object` has a direct or inherited property named by `property`, which can be a string using dot- and bracket-notation for nested reference.

```js
assert.nestedProperty({ tea: { green: "matcha" } }, "tea.green");
```

### .notNestedProperty(object, property, [message])

- @param { Object } object
- @param { String } property
- @param { String } message

Asserts that `object` does _not_ have a property named by `property`, which can be a string using dot- and bracket-notation for nested reference. The property cannot exist on the object nor anywhere in its prototype chain.

```js
assert.notNestedProperty({ tea: { green: "matcha" } }, "tea.oolong");
```

### .nestedPropertyVal(object, property, value, [message])

- @param { Object } object
- @param { String } property
- @param { Mixed } value
- @param { String } message

Asserts that `object` has a property named by `property` with value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a strict equality check (===).

```js
assert.nestedPropertyVal({ tea: { green: "matcha" } }, "tea.green", "matcha");
```

### .notNestedPropertyVal(object, property, value, [message])

- @param { Object } object
- @param { String } property
- @param { Mixed } value
- @param { String } message

Asserts that `object` does _not_ have a property named by `property` with value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a strict equality check (===).

```js
assert.notNestedPropertyVal(
  { tea: { green: "matcha" } },
  "tea.green",
  "konacha",
);
assert.notNestedPropertyVal(
  { tea: { green: "matcha" } },
  "coffee.green",
  "matcha",
);
```

### .deepNestedPropertyVal(object, property, value, [message])

- @param { Object } object
- @param { String } property
- @param { Mixed } value
- @param { String } message

Asserts that `object` has a property named by `property` with a value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a deep equality check.

```js
assert.deepNestedPropertyVal(
  { tea: { green: { matcha: "yum" } } },
  "tea.green",
  { matcha: "yum" },
);
```

### .notDeepNestedPropertyVal(object, property, value, [message])

- @param { Object } object
- @param { String } property
- @param { Mixed } value
- @param { String } message

Asserts that `object` does _not_ have a property named by `property` with value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a deep equality check.

```js
assert.notDeepNestedPropertyVal(
  { tea: { green: { matcha: "yum" } } },
  "tea.green",
  { oolong: "yum" },
);
assert.notDeepNestedPropertyVal(
  { tea: { green: { matcha: "yum" } } },
  "tea.green",
  { matcha: "yuck" },
);
assert.notDeepNestedPropertyVal(
  { tea: { green: { matcha: "yum" } } },
  "tea.black",
  { matcha: "yum" },
);
```

### .lengthOf(object, length, [message])

- @param { Mixed } object
- @param { Number } length
- @param { String } message

Asserts that `object` has a `length` or `size` with the expected value.

```js
assert.lengthOf([1, 2, 3], 3, "array has length of 3");
assert.lengthOf("foobar", 6, "string has length of 6");
assert.lengthOf(new Set([1, 2, 3]), 3, "set has size of 3");
assert.lengthOf(
  new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]),
  3,
  "map has size of 3",
);
```

### .hasAnyKeys(object, [keys], [message])

- @param { Mixed } object
- @param { Array | Object } keys
- @param { String } message

Asserts that `object` has at least one of the `keys` provided. You can also provide a single object instead of a `keys` array and its keys will be used as the expected set of keys.

```js
assert.hasAnyKeys({ foo: 1, bar: 2, baz: 3 }, ["foo", "iDontExist", "baz"]);
assert.hasAnyKeys(
  { foo: 1, bar: 2, baz: 3 },
  { foo: 30, iDontExist: 99, baz: 1337 },
);
assert.hasAnyKeys(
  new Map([
    [{ foo: 1 }, "bar"],
    ["key", "value"],
  ]),
  [{ foo: 1 }, "key"],
);
assert.hasAnyKeys(new Set([{ foo: "bar" }, "anotherKey"]), [
  { foo: "bar" },
  "anotherKey",
]);
```

### .hasAllKeys(object, [keys], [message])

- @param { Mixed } object
- @param { Array. } keys
- @param { String } message

Asserts that `object` has all and only all of the `keys` provided. You can also provide a single object instead of a `keys` array and its keys will be used as the expected set of keys.

```js
assert.hasAllKeys({ foo: 1, bar: 2, baz: 3 }, ["foo", "bar", "baz"]);
assert.hasAllKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, bar: 99, baz: 1337 });
assert.hasAllKeys(
  new Map([
    [{ foo: 1 }, "bar"],
    ["key", "value"],
  ]),
  [{ foo: 1 }, "key"],
);
assert.hasAllKeys(
  new Set([{ foo: "bar" }, "anotherKey"], [{ foo: "bar" }, "anotherKey"]),
);
```

### .containsAllKeys(object, [keys], [message])

- @param { Mixed } object
- @param { Array. } keys
- @param { String } message

Asserts that `object` has all of the `keys` provided but may have more keys not listed. You can also provide a single object instead of a `keys` array and its keys will be used as the expected set of keys.

```js
assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, ["foo", "baz"]);
assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, ["foo", "bar", "baz"]);
assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, baz: 1337 });
assert.containsAllKeys(
  { foo: 1, bar: 2, baz: 3 },
  { foo: 30, bar: 99, baz: 1337 },
);
assert.containsAllKeys(
  new Map([
    [{ foo: 1 }, "bar"],
    ["key", "value"],
  ]),
  [{ foo: 1 }],
);
assert.containsAllKeys(
  new Map([
    [{ foo: 1 }, "bar"],
    ["key", "value"],
  ]),
  [{ foo: 1 }, "key"],
);
assert.containsAllKeys(
  new Set([{ foo: "bar" }, "anotherKey"], [{ foo: "bar" }]),
);
assert.containsAllKeys(
  new Set([{ foo: "bar" }, "anotherKey"], [{ foo: "bar" }, "anotherKey"]),
);
```

### .doesNotHaveAnyKeys(object, [keys], [message])

- @param { Mixed } object
- @param { Array. } keys
- @param { String } message

Asserts that `object` has none of the `keys` provided. You can also provide a single object instead of a `keys` array and its keys will be used as the expected set of keys.

```js
assert.doesNotHaveAnyKeys({ foo: 1, bar: 2, baz: 3 }, [
  "one",
  "two",
  "example",
]);
assert.doesNotHaveAnyKeys(
  { foo: 1, bar: 2, baz: 3 },
  { one: 1, two: 2, example: "foo" },
);
assert.doesNotHaveAnyKeys(
  new Map([
    [{ foo: 1 }, "bar"],
    ["key", "value"],
  ]),
  [{ one: "two" }, "example"],
);
assert.doesNotHaveAnyKeys(
  new Set([{ foo: "bar" }, "anotherKey"], [{ one: "two" }, "example"]),
);
```

### .doesNotHaveAllKeys(object, [keys], [message])

- @param { Mixed } object
- @param { Array. } keys
- @param { String } message

Asserts that `object` does not have at least one of the `keys` provided. You can also provide a single object instead of a `keys` array and its keys will be used as the expected set of keys.

```js
assert.doesNotHaveAllKeys({ foo: 1, bar: 2, baz: 3 }, [
  "one",
  "two",
  "example",
]);
assert.doesNotHaveAllKeys(
  { foo: 1, bar: 2, baz: 3 },
  { one: 1, two: 2, example: "foo" },
);
assert.doesNotHaveAllKeys(
  new Map([
    [{ foo: 1 }, "bar"],
    ["key", "value"],
  ]),
  [{ one: "two" }, "example"],
);
assert.doesNotHaveAllKeys(
  new Set([{ foo: "bar" }, "anotherKey"], [{ one: "two" }, "example"]),
);
```

### .hasAnyDeepKeys(object, [keys], [message])

- @param { Mixed } object
- @param { Array | Object } keys
- @param { String } message

Asserts that `object` has at least one of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a `keys` array and its keys will be used as the expected set of keys.

```js
assert.hasAnyDeepKeys(
  new Map([
    [{ one: "one" }, "valueOne"],
    [1, 2],
  ]),
  { one: "one" },
);
assert.hasAnyDeepKeys(
  new Map([
    [{ one: "one" }, "valueOne"],
    [1, 2],
  ]),
  [{ one: "one" }, { two: "two" }],
);
assert.hasAnyDeepKeys(
  new Map([
    [{ one: "one" }, "valueOne"],
    [{ two: "two" }, "valueTwo"],
  ]),
  [{ one: "one" }, { two: "two" }],
);
assert.hasAnyDeepKeys(new Set([{ one: "one" }, { two: "two" }]), {
  one: "one",
});
assert.hasAnyDeepKeys(new Set([{ one: "one" }, { two: "two" }]), [
  { one: "one" },
  { three: "three" },
]);
assert.hasAnyDeepKeys(new Set([{ one: "one" }, { two: "two" }]), [
  { one: "one" },
  { two: "two" },
]);
```

### .hasAllDeepKeys(object, [keys], [message])

- @param { Mixed } object
- @param { Array | Object } keys
- @param { String } message

Asserts that `object` has all and only all of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a `keys` array and its keys will be used as the expected set of keys.

```js
assert.hasAllDeepKeys(new Map([[{ one: "one" }, "valueOne"]]), { one: "one" });
assert.hasAllDeepKeys(
  new Map([
    [{ one: "one" }, "valueOne"],
    [{ two: "two" }, "valueTwo"],
  ]),
  [{ one: "one" }, { two: "two" }],
);
assert.hasAllDeepKeys(new Set([{ one: "one" }]), { one: "one" });
assert.hasAllDeepKeys(new Set([{ one: "one" }, { two: "two" }]), [
  { one: "one" },
  { two: "two" },
]);
```

### .containsAllDeepKeys(object, [keys], [message])

- @param { Mixed } object
- @param { Array | Object } keys
- @param { String } message

Asserts that `object` contains all of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a `keys` array and its keys will be used as the expected set of keys.

```js
assert.containsAllDeepKeys(
  new Map([
    [{ one: "one" }, "valueOne"],
    [1, 2],
  ]),
  { one: "one" },
);
assert.containsAllDeepKeys(
  new Map([
    [{ one: "one" }, "valueOne"],
    [{ two: "two" }, "valueTwo"],
  ]),
  [{ one: "one" }, { two: "two" }],
);
assert.containsAllDeepKeys(new Set([{ one: "one" }, { two: "two" }]), {
  one: "one",
});
assert.containsAllDeepKeys(new Set([{ one: "one" }, { two: "two" }]), [
  { one: "one" },
  { two: "two" },
]);
```

### .doesNotHaveAnyDeepKeys(object, [keys], [message])

- @param { Mixed } object
- @param { Array | Object } keys
- @param { String } message

Asserts that `object` has none of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a `keys` array and its keys will be used as the expected set of keys.

```js
assert.doesNotHaveAnyDeepKeys(
  new Map([
    [{ one: "one" }, "valueOne"],
    [1, 2],
  ]),
  { thisDoesNot: "exist" },
);
assert.doesNotHaveAnyDeepKeys(
  new Map([
    [{ one: "one" }, "valueOne"],
    [{ two: "two" }, "valueTwo"],
  ]),
  [{ twenty: "twenty" }, { fifty: "fifty" }],
);
assert.doesNotHaveAnyDeepKeys(new Set([{ one: "one" }, { two: "two" }]), {
  twenty: "twenty",
});
assert.doesNotHaveAnyDeepKeys(new Set([{ one: "one" }, { two: "two" }]), [
  { twenty: "twenty" },
  { fifty: "fifty" },
]);
```

### .doesNotHaveAllDeepKeys(object, [keys], [message])

- @param { Mixed } object
- @param { Array | Object } keys
- @param { String } message

Asserts that `object` does not have at least one of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a `keys` array and its keys will be used as the expected set of keys.

```js
assert.doesNotHaveAllDeepKeys(
  new Map([
    [{ one: "one" }, "valueOne"],
    [1, 2],
  ]),
  { thisDoesNot: "exist" },
);
assert.doesNotHaveAllDeepKeys(
  new Map([
    [{ one: "one" }, "valueOne"],
    [{ two: "two" }, "valueTwo"],
  ]),
  [{ twenty: "twenty" }, { one: "one" }],
);
assert.doesNotHaveAllDeepKeys(new Set([{ one: "one" }, { two: "two" }]), {
  twenty: "twenty",
});
assert.doesNotHaveAllDeepKeys(new Set([{ one: "one" }, { two: "two" }]), [
  { one: "one" },
  { fifty: "fifty" },
]);
```

### .throws(fn, [errorLike/string/regexp], [string/regexp], [message])

- @param { Function } fn
- @param { ErrorConstructor | Error } errorLike
- @param { RegExp | String } errMsgMatcher
- @param { String } message
- @see [https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types)

If `errorLike` is an `Error` constructor, asserts that `fn` will throw an error that is an instance of `errorLike`. If `errorLike` is an `Error` instance, asserts that the error thrown is the same instance as `errorLike`. If `errMsgMatcher` is provided, it also asserts that the error thrown will have a message matching `errMsgMatcher`.

```js
assert.throws(fn, "Error thrown must have this msg");
assert.throws(fn, /Error thrown must have a msg that matches this/);
assert.throws(fn, ReferenceError);
assert.throws(fn, errorInstance);
assert.throws(
  fn,
  ReferenceError,
  "Error thrown must be a ReferenceError and have this msg",
);
assert.throws(
  fn,
  errorInstance,
  "Error thrown must be the same errorInstance and have this msg",
);
assert.throws(
  fn,
  ReferenceError,
  /Error thrown must be a ReferenceError and match this/,
);
assert.throws(
  fn,
  errorInstance,
  /Error thrown must be the same errorInstance and match this/,
);
```

### .doesNotThrow(fn, [errorLike/string/regexp], [string/regexp], [message])

- @param { Function } fn
- @param { ErrorConstructor } errorLike
- @param { RegExp | String } errMsgMatcher
- @param { String } message
- @see [https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types)

If `errorLike` is an `Error` constructor, asserts that `fn` will _not_ throw an error that is an instance of `errorLike`. If `errorLike` is an `Error` instance, asserts that the error thrown is _not_ the same instance as `errorLike`. If `errMsgMatcher` is provided, it also asserts that the error thrown will _not_ have a message matching `errMsgMatcher`.

```js
assert.doesNotThrow(fn, "Any Error thrown must not have this message");
assert.doesNotThrow(fn, /Any Error thrown must not match this/);
assert.doesNotThrow(fn, Error);
assert.doesNotThrow(fn, errorInstance);
assert.doesNotThrow(fn, Error, "Error must not have this message");
assert.doesNotThrow(fn, errorInstance, "Error must not have this message");
assert.doesNotThrow(fn, Error, /Error must not match this/);
assert.doesNotThrow(fn, errorInstance, /Error must not match this/);
```

### .operator(val1, operator, val2, [message])

- @param { Mixed } val1
- @param { String } operator
- @param { Mixed } val2
- @param { String } message

Compares two values using `operator`.

```js
assert.operator(1, "<", 2, "everything is ok");
assert.operator(1, ">", 2, "this will fail");
```

### .closeTo(actual, expected, delta, [message])

- @param { Number } actual
- @param { Number } expected
- @param { Number } delta
- @param { String } message

Asserts that the target is equal `expected`, to within a +/- `delta` range.

```js
assert.closeTo(1.5, 1, 0.5, "numbers are close");
```

### .approximately(actual, expected, delta, [message])

- @param { Number } actual
- @param { Number } expected
- @param { Number } delta
- @param { String } message

Asserts that the target is equal `expected`, to within a +/- `delta` range.

```js
assert.approximately(1.5, 1, 0.5, "numbers are close");
```

### .sameMembers(set1, set2, [message])

- @param { Array } set1
- @param { Array } set2
- @param { String } message

Asserts that `set1` and `set2` have the same members in any order. Uses a strict equality check (===).

```js
assert.sameMembers([1, 2, 3], [2, 1, 3], "same members");
```

### .notSameMembers(set1, set2, [message])

- @param { Array } set1
- @param { Array } set2
- @param { String } message

Asserts that `set1` and `set2` don’t have the same members in any order. Uses a strict equality check (===).

```js
assert.notSameMembers([1, 2, 3], [5, 1, 3], "not same members");
```

### .sameDeepMembers(set1, set2, [message])

- @param { Array } set1
- @param { Array } set2
- @param { String } message

Asserts that `set1` and `set2` have the same members in any order. Uses a deep equality check.

```js
assert.sameDeepMembers(
  [{ a: 1 }, { b: 2 }, { c: 3 }],
  [{ b: 2 }, { a: 1 }, { c: 3 }],
  "same deep members",
);
```

### .notSameDeepMembers(set1, set2, [message])

- @param { Array } set1
- @param { Array } set2
- @param { String } message

Asserts that `set1` and `set2` don’t have the same members in any order. Uses a deep equality check.

```js
assert.notSameDeepMembers(
  [{ a: 1 }, { b: 2 }, { c: 3 }],
  [{ b: 2 }, { a: 1 }, { f: 5 }],
  "not same deep members",
);
```

### .sameOrderedMembers(set1, set2, [message])

- @param { Array } set1
- @param { Array } set2
- @param { String } message

Asserts that `set1` and `set2` have the same members in the same order. Uses a strict equality check (===).

```js
assert.sameOrderedMembers([1, 2, 3], [1, 2, 3], "same ordered members");
```

### .notSameOrderedMembers(set1, set2, [message])

- @param { Array } set1
- @param { Array } set2
- @param { String } message

Asserts that `set1` and `set2` don’t have the same members in the same order. Uses a strict equality check (===).

```js
assert.notSameOrderedMembers([1, 2, 3], [2, 1, 3], "not same ordered members");
```

### .sameDeepOrderedMembers(set1, set2, [message])

- @param { Array } set1
- @param { Array } set2
- @param { String } message

Asserts that `set1` and `set2` have the same members in the same order. Uses a deep equality check.

```js
assert.sameDeepOrderedMembers(
  [{ a: 1 }, { b: 2 }, { c: 3 }],
  [{ a: 1 }, { b: 2 }, { c: 3 }],
  "same deep ordered members",
);
```

### .notSameDeepOrderedMembers(set1, set2, [message])

- @param { Array } set1
- @param { Array } set2
- @param { String } message

Asserts that `set1` and `set2` don’t have the same members in the same order. Uses a deep equality check.

```js
assert.notSameDeepOrderedMembers(
  [{ a: 1 }, { b: 2 }, { c: 3 }],
  [{ a: 1 }, { b: 2 }, { z: 5 }],
  "not same deep ordered members",
);
assert.notSameDeepOrderedMembers(
  [{ a: 1 }, { b: 2 }, { c: 3 }],
  [{ b: 2 }, { a: 1 }, { c: 3 }],
  "not same deep ordered members",
);
```

### .includeMembers(superset, subset, [message])

- @param { Array } superset
- @param { Array } subset
- @param { String } message

Asserts that `subset` is included in `superset` in any order. Uses a strict equality check (===). Duplicates are ignored.

```js
assert.includeMembers([1, 2, 3], [2, 1, 2], "include members");
```

### .notIncludeMembers(superset, subset, [message])

- @param { Array } superset
- @param { Array } subset
- @param { String } message

Asserts that `subset` isn’t included in `superset` in any order. Uses a strict equality check (===). Duplicates are ignored.

```js
assert.notIncludeMembers([1, 2, 3], [5, 1], "not include members");
```

### .includeDeepMembers(superset, subset, [message])

- @param { Array } superset
- @param { Array } subset
- @param { String } message

Asserts that `subset` is included in `superset` in any order. Uses a deep equality check. Duplicates are ignored.

```js
assert.includeDeepMembers(
  [{ a: 1 }, { b: 2 }, { c: 3 }],
  [{ b: 2 }, { a: 1 }, { b: 2 }],
  "include deep members",
);
```

### .notIncludeDeepMembers(superset, subset, [message])

- @param { Array } superset
- @param { Array } subset
- @param { String } message

Asserts that `subset` isn’t included in `superset` in any order. Uses a deep equality check. Duplicates are ignored.

```js
assert.notIncludeDeepMembers(
  [{ a: 1 }, { b: 2 }, { c: 3 }],
  [{ b: 2 }, { f: 5 }],
  "not include deep members",
);
```

### .includeOrderedMembers(superset, subset, [message])

- @param { Array } superset
- @param { Array } subset
- @param { String } message

Asserts that `subset` is included in `superset` in the same order beginning with the first element in `superset`. Uses a strict equality check (===).

```js
assert.includeOrderedMembers([1, 2, 3], [1, 2], "include ordered members");
```

### .notIncludeOrderedMembers(superset, subset, [message])

- @param { Array } superset
- @param { Array } subset
- @param { String } message

Asserts that `subset` isn’t included in `superset` in the same order beginning with the first element in `superset`. Uses a strict equality check (===).

```js
assert.notIncludeOrderedMembers(
  [1, 2, 3],
  [2, 1],
  "not include ordered members",
);
assert.notIncludeOrderedMembers(
  [1, 2, 3],
  [2, 3],
  "not include ordered members",
);
```

### .includeDeepOrderedMembers(superset, subset, [message])

- @param { Array } superset
- @param { Array } subset
- @param { String } message

Asserts that `subset` is included in `superset` in the same order beginning with the first element in `superset`. Uses a deep equality check.

```js
assert.includeDeepOrderedMembers(
  [{ a: 1 }, { b: 2 }, { c: 3 }],
  [{ a: 1 }, { b: 2 }],
  "include deep ordered members",
);
```

### .notIncludeDeepOrderedMembers(superset, subset, [message])

- @param { Array } superset
- @param { Array } subset
- @param { String } message

Asserts that `subset` isn’t included in `superset` in the same order beginning with the first element in `superset`. Uses a deep equality check.

```js
assert.notIncludeDeepOrderedMembers(
  [{ a: 1 }, { b: 2 }, { c: 3 }],
  [{ a: 1 }, { f: 5 }],
  "not include deep ordered members",
);
assert.notIncludeDeepOrderedMembers(
  [{ a: 1 }, { b: 2 }, { c: 3 }],
  [{ b: 2 }, { a: 1 }],
  "not include deep ordered members",
);
assert.notIncludeDeepOrderedMembers(
  [{ a: 1 }, { b: 2 }, { c: 3 }],
  [{ b: 2 }, { c: 3 }],
  "not include deep ordered members",
);
```

### .oneOf(inList, list, [message])

- @param { } inList
- @param { Array.<\*> } list
- @param { String } message

Asserts that non-object, non-array value `inList` appears in the flat array `list`.

```js
assert.oneOf(1, [2, 1], "Not found in list");
```

### .changes(function, object, property, [message])

- @param { Function } modifier function
- @param { Object } object or getter function
- @param { String } property name _optional_
- @param { String } message _optional_

Asserts that a function changes the value of a property.

```js
let obj = { val: 10 };
let fn = function () {
  obj.val = 22;
};
assert.changes(fn, obj, "val");
```

### .changesBy(function, object, property, delta, [message])

- @param { Function } modifier function
- @param { Object } object or getter function
- @param { String } property name _optional_
- @param { Number } change amount (delta)
- @param { String } message _optional_

Asserts that a function changes the value of a property by an amount (delta).

```js
let obj = { val: 10 };
let fn = function () {
  obj.val += 2;
};
assert.changesBy(fn, obj, "val", 2);
```

### .doesNotChange(function, object, property, [message])

- @param { Function } modifier function
- @param { Object } object or getter function
- @param { String } property name _optional_
- @param { String } message _optional_

Asserts that a function does not change the value of a property.

```js
let obj = { val: 10 };
let fn = function () {
  console.log("foo");
};
assert.doesNotChange(fn, obj, "val");
```

### .changesButNotBy(function, object, property, delta, [message])

- @param { Function } modifier function
- @param { Object } object or getter function
- @param { String } property name _optional_
- @param { Number } change amount (delta)
- @param { String } message _optional_

Asserts that a function does not change the value of a property or of a function’s return value by an amount (delta)

```js
let obj = { val: 10 };
let fn = function () {
  obj.val += 10;
};
assert.changesButNotBy(fn, obj, "val", 5);
```

### .increases(function, object, property, [message])

- @param { Function } modifier function
- @param { Object } object or getter function
- @param { String } property name _optional_
- @param { String } message _optional_

Asserts that a function increases a numeric object property.

```js
let obj = { val: 10 };
let fn = function () {
  obj.val = 13;
};
assert.increases(fn, obj, "val");
```

### .increasesBy(function, object, property, delta, [message])

- @param { Function } modifier function
- @param { Object } object or getter function
- @param { String } property name _optional_
- @param { Number } change amount (delta)
- @param { String } message _optional_

Asserts that a function increases a numeric object property or a function’s return value by an amount (delta).

```js
let obj = { val: 10 };
let fn = function () {
  obj.val += 10;
};
assert.increasesBy(fn, obj, "val", 10);
```

### .doesNotIncrease(function, object, property, [message])

- @param { Function } modifier function
- @param { Object } object or getter function
- @param { String } property name _optional_
- @param { String } message _optional_

Asserts that a function does not increase a numeric object property.

```js
let obj = { val: 10 };
let fn = function () {
  obj.val = 8;
};
assert.doesNotIncrease(fn, obj, "val");
```

### .increasesButNotBy(function, object, property, delta, [message])

- @param { Function } modifier function
- @param { Object } object or getter function
- @param { String } property name _optional_
- @param { Number } change amount (delta)
- @param { String } message _optional_

Asserts that a function does not increase a numeric object property or function’s return value by an amount (delta).

```js
let obj = { val: 10 };
let fn = function () {
  obj.val = 15;
};
assert.increasesButNotBy(fn, obj, "val", 10);
```

### .decreases(function, object, property, [message])

- @param { Function } modifier function
- @param { Object } object or getter function
- @param { String } property name _optional_
- @param { String } message _optional_

Asserts that a function decreases a numeric object property.

```js
let obj = { val: 10 };
let fn = function () {
  obj.val = 5;
};
assert.decreases(fn, obj, "val");
```

### .decreasesBy(function, object, property, delta, [message])

- @param { Function } modifier function
- @param { Object } object or getter function
- @param { String } property name _optional_
- @param { Number } change amount (delta)
- @param { String } message _optional_

Asserts that a function decreases a numeric object property or a function’s return value by an amount (delta)

```js
let obj = { val: 10 };
let fn = function () {
  obj.val -= 5;
};
assert.decreasesBy(fn, obj, "val", 5);
```

### .doesNotDecrease(function, object, property, [message])

- @param { Function } modifier function
- @param { Object } object or getter function
- @param { String } property name _optional_
- @param { String } message _optional_

Asserts that a function does not decreases a numeric object property.

```js
let obj = { val: 10 };
let fn = function () {
  obj.val = 15;
};
assert.doesNotDecrease(fn, obj, "val");
```

### .doesNotDecreaseBy(function, object, property, delta, [message])

- @param { Function } modifier function
- @param { Object } object or getter function
- @param { String } property name _optional_
- @param { Number } change amount (delta)
- @param { String } message _optional_

Asserts that a function does not decreases a numeric object property or a function’s return value by an amount (delta)

```js
let obj = { val: 10 };
let fn = function () {
  obj.val = 5;
};
assert.doesNotDecreaseBy(fn, obj, "val", 1);
```

### .decreasesButNotBy(function, object, property, delta, [message])

- @param { Function } modifier function
- @param { Object } object or getter function
- @param { String } property name _optional_
- @param { Number } change amount (delta)
- @param { String } message _optional_

Asserts that a function does not decreases a numeric object property or a function’s return value by an amount (delta)

```js
let obj = { val: 10 };
let fn = function () {
  obj.val = 5;
};
assert.decreasesButNotBy(fn, obj, "val", 1);
```

### .ifError(object)

- @param { Object } object

Asserts if value is not a false value, and throws if it is a true value. This is added to allow for chai to be a drop-in replacement for Node’s assert class.

```js
let err = new Error("I am a custom error");
assert.ifError(err); // Rethrows err!
```

### .isExtensible(object)

- @param { Object } object
- @param { String } message _optional_

Asserts that `object` is extensible (can have new properties added to it).

```js
assert.isExtensible({});
```

### .isNotExtensible(object)

- @param { Object } object
- @param { String } message _optional_

Asserts that `object` is _not_ extensible.

```js
let nonExtensibleObject = Object.preventExtensions({});
let sealedObject = Object.seal({});
let frozenObject = Object.freeze({});

assert.isNotExtensible(nonExtensibleObject);
assert.isNotExtensible(sealedObject);
assert.isNotExtensible(frozenObject);
```

### .isSealed(object)

- @param { Object } object
- @param { String } message _optional_

Asserts that `object` is sealed (cannot have new properties added to it and its existing properties cannot be removed).

```js
let sealedObject = Object.seal({});
let frozenObject = Object.seal({});

assert.isSealed(sealedObject);
assert.isSealed(frozenObject);
```

### .isNotSealed(object)

- @param { Object } object
- @param { String } message _optional_

Asserts that `object` is _not_ sealed.

```js
assert.isNotSealed({});
```

### .isFrozen(object)

- @param { Object } object
- @param { String } message _optional_

Asserts that `object` is frozen (cannot have new properties added to it and its existing properties cannot be modified).

```js
let frozenObject = Object.freeze({});
assert.frozen(frozenObject);
```

### .isNotFrozen(object)

- @param { Object } object
- @param { String } message _optional_

Asserts that `object` is _not_ frozen.

```js
assert.isNotFrozen({});
```

### .isEmpty(target)

- @param { Object | Array | String | Map | Set } target
- @param { String } message _optional_

Asserts that the target does not contain any values. For arrays and strings, it checks the `length` property. For `Map` and `Set` instances, it checks the `size` property. For non-function objects, it gets the count of own enumerable string keys.

```js
assert.isEmpty([]);
assert.isEmpty("");
assert.isEmpty(new Map());
assert.isEmpty({});
```

### .isNotEmpty(target)

- @param { Object | Array | String | Map | Set } target
- @param { String } message _optional_

Asserts that the target contains values. For arrays and strings, it checks the `length` property. For `Map` and `Set` instances, it checks the `size` property. For non-function objects, it gets the count of own enumerable string keys.

```js
assert.isNotEmpty([1, 2]);
assert.isNotEmpty("34");
assert.isNotEmpty(new Set([5, 6]));
assert.isNotEmpty({ key: 7 });
```
