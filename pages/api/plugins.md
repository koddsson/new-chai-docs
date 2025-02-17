---
title: "Plugin Utilities"
layout: "api.njk"
---

The plugin utilities are for those who want to extend Chai with their own set of assertions. The [Core Plugin Concepts](/guide/plugins) and [Building a Helper](/guide/helpers) guide tutorials are a great reference on how to get started with your own assertions.

## API Reference

### .addChainableMethod(ctx, name, method, chainingBehavior)

- @param { Object } ctx object to which the method is added
- @param { String } name of method to add
- @param { Function } method function to be used for `name`, when called
- @param { Function } chainingBehavior function to be called every time the property is accessed

Adds a method to an object, such that the method can also be chained.

```js
utils.addChainableMethod(chai.Assertion.prototype, "foo", function (str) {
  var obj = utils.flag(this, "object");
  new chai.Assertion(obj).to.be.equal(str);
});
```

Can also be accessed directly from `chai.Assertion`.

```js
chai.Assertion.addChainableMethod("foo", fn, chainingBehavior);
```

The result can then be used as both a method assertion, executing both `method` and `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.

```js
expect(fooStr).to.be.foo("bar");
expect(fooStr).to.be.foo.equal("foo");
```

### .addLengthGuard(fn, assertionName, isChainable)

- @param { Function } fn
- @param { String } assertionName
- @param { Boolean } isChainable

Define `length` as a getter on the given uninvoked method assertion. The getter acts as a guard against chaining `length` directly off of an uninvoked method assertion, which is a problem because it references `function`’s built-in `length` property instead of Chai’s `length` assertion. When the getter catches the user making this mistake, it throws an error with a helpful message.

There are two ways in which this mistake can be made. The first way is by chaining the `length` assertion directly off of an uninvoked chainable method. In this case, Chai suggests that the user use `lengthOf` instead. The second way is by chaining the `length` assertion directly off of an uninvoked non-chainable method. Non-chainable methods must be invoked prior to chaining. In this case, Chai suggests that the user consult the docs for the given assertion.

If the `length` property of functions is unconfigurable, then return `fn` without modification.

Note that in ES6, the function’s `length` property is configurable, so once support for legacy environments is dropped, Chai’s `length` property can replace the built-in function’s `length` property, and this length guard will no longer be necessary. In the mean time, maintaining consistency across all environments is the priority.

### .addMethod(ctx, name, method)

- @param { Object } ctx object to which the method is added
- @param { String } name of method to add
- @param { Function } method function to be used for name

Adds a method to the prototype of an object.

```js
utils.addMethod(chai.Assertion.prototype, "foo", function (str) {
  var obj = utils.flag(this, "object");
  new chai.Assertion(obj).to.be.equal(str);
});
```

Can also be accessed directly from `chai.Assertion`.

```js
chai.Assertion.addMethod("foo", fn);
```

Then can be used as any other assertion.

```js
expect(fooStr).to.be.foo("bar");
```

### .addProperty(ctx, name, getter)

- @param { Object } ctx object to which the property is added
- @param { String } name of property to add
- @param { Function } getter function to be used for name

Adds a property to the prototype of an object.

```js
utils.addProperty(chai.Assertion.prototype, "foo", function () {
  var obj = utils.flag(this, "object");
  new chai.Assertion(obj).to.be.instanceof(Foo);
});
```

Can also be accessed directly from `chai.Assertion`.

```js
chai.Assertion.addProperty("foo", fn);
```

Then can be used as any other assertion.

```js
expect(myFoo).to.be.foo;
```

### .compareByInspect(mixed, mixed)

- @param { Mixed } first element to compare
- @param { Mixed } second element to compare

To be used as a compareFunction with Array.prototype.sort. Compares elements using inspect instead of default behavior of using toString so that Symbols and objects with irregular/missing toString can still be sorted without a TypeError.

### .expectTypes(obj, types)

- @param { Mixed } obj constructed Assertion
- @param { Array } type A list of allowed types for this assertion

Ensures that the object being tested against is of a valid type.

```js
utils.expectTypes(this, ["array", "object", "string"]);
```

### .flag(object, key, [value])

- @param { Object } object constructed Assertion
- @param { String } key
- @param { Mixed } value (optional)

Get or set a flag value on an object. If a value is provided it will be set, else it will return the currently set value or `undefined` if the value is not set.

```js
utils.flag(this, "foo", "bar"); // setter
utils.flag(this, "foo"); // getter, returns `bar`
```

### .getActual(object, [actual])

- @param { Object } object (constructed Assertion)
- @param { Arguments } chai.Assertion.prototype.assert arguments

Returns the `actual` value for an Assertion.

### .getMessage(object, message, negateMessage)

- @param { Object } object (constructed Assertion)
- @param { Arguments } chai.Assertion.prototype.assert arguments

Construct the error message based on flags and template tags. Template tags will return a stringified inspection of the object referenced.

Message template tags:

- `#{this}` current asserted object
- `#{act}` actual value
- `#{exp}` expected value

### .getOperator(message)

- @param { Object } object (constructed Assertion)
- @param { Arguments } chai.Assertion.prototype.assert arguments

Extract the operator from error message. Operator defined is based on below link <https://nodejs.org/api/assert.html#assert_assert>.

Returns the `operator` or `undefined` value for an Assertion.

### .getOwnEnumerableProperties(object)

- @param { Object } object

This allows the retrieval of directly-owned enumerable property names and symbols of an object. This function is necessary because Object.keys only returns enumerable property names, not enumerable property symbols.

### .getOwnEnumerablePropertySymbols(object)

- @param { Object } object

This allows the retrieval of directly-owned enumerable property symbols of an object. This function is necessary because Object.getOwnPropertySymbols returns both enumerable and non-enumerable property symbols.

### .getProperties(object)

- @param { Object } object

This allows the retrieval of property names of an object, enumerable or not, inherited or not.

### .inspect(obj, [showHidden], [depth], [colors])

- @param { Object } obj The object to print out.
- @param { Boolean } showHidden Flag that shows hidden (not enumerable) properties of objects. Default is false.
- @param { Number } depth Depth in which to descend in object. Default is 2.
- @param { Boolean } colors Flag to turn on ANSI escape codes to color the output. Default is false (no coloring).

Echoes the value of a value. Tries to print the value out in the best way possible given the different types.

### .isProxyEnabled()

Helper function to check if Chai’s proxy protection feature is enabled. If proxies are unsupported or disabled via the user’s Chai config, then return false. Otherwise, return true.

### .objDisplay(object)

- @param { Mixed } javascript object to inspect

Determines if an object or an array matches criteria to be inspected in-line for error messages or should be truncated.

### .overwriteChainableMethod(ctx, name, method, chainingBehavior)

- @param { Object } ctx object whose method / property is to be overwritten
- @param { String } name of method / property to overwrite
- @param { Function } method function that returns a function to be used for name
- @param { Function } chainingBehavior function that returns a function to be used for property

Overwrites an already existing chainable method and provides access to the previous function or property. Must return functions to be used for name.

```js
utils.overwriteChainableMethod(
  chai.Assertion.prototype,
  "lengthOf",
  function (_super) {},
  function (_super) {},
);
```

Can also be accessed directly from `chai.Assertion`.

```js
chai.Assertion.overwriteChainableMethod("foo", fn, fn);
```

Then can be used as any other assertion.

```js
expect(myFoo).to.have.lengthOf(3);
expect(myFoo).to.have.lengthOf.above(3);
```

### .overwriteMethod(ctx, name, fn)

- @param { Object } ctx object whose method is to be overwritten
- @param { String } name of method to overwrite
- @param { Function } method function that returns a function to be used for name

Overwrites an already existing method and provides access to previous function. Must return function to be used for name.

```js
utils.overwriteMethod(chai.Assertion.prototype, "equal", function (_super) {
  return function (str) {
    var obj = utils.flag(this, "object");
    if (obj instanceof Foo) {
      new chai.Assertion(obj.value).to.equal(str);
    } else {
      _super.apply(this, arguments);
    }
  };
});
```

Can also be accessed directly from `chai.Assertion`.

```js
chai.Assertion.overwriteMethod("foo", fn);
```

Then can be used as any other assertion.

```js
expect(myFoo).to.equal("bar");
```

### .overwriteProperty(ctx, name, fn)

- @param { Object } ctx object whose property is to be overwritten
- @param { String } name of property to overwrite
- @param { Function } getter function that returns a getter function to be used for name

Overwrites an already existing property getter and provides access to previous value. Must return function to use as getter.

```js
utils.overwriteProperty(chai.Assertion.prototype, "ok", function (_super) {
  return function () {
    var obj = utils.flag(this, "object");
    if (obj instanceof Foo) {
      new chai.Assertion(obj.name).to.equal("bar");
    } else {
      _super.call(this);
    }
  };
});
```

Can also be accessed directly from `chai.Assertion`.

```js
chai.Assertion.overwriteProperty("foo", fn);
```

Then can be used as any other assertion.

```js
expect(myFoo).to.be.ok;
```

### .proxify(object)

- @param { Object } obj
- @param { String } nonChainableMethodName

Return a proxy of given object that throws an error when a non-existent property is read. By default, the root cause is assumed to be a misspelled property, and thus an attempt is made to offer a reasonable suggestion from the list of existing properties. However, if a nonChainableMethodName is provided, then the root cause is instead a failure to invoke a non-chainable method prior to reading the non-existent property.

If proxies are unsupported or disabled via the user’s Chai config, then return object without modification.

### .test(object, expression)

- @param { Object } object (constructed Assertion)
- @param { Arguments } chai.Assertion.prototype.assert arguments

Test an object for expression.

### .transferFlags(assertion, object, includeAll = true)

- @param { Assertion } assertion the assertion to transfer the flags from
- @param { Object } object the object to transfer the flags to; usually a new assertion
- @param { Boolean } includeAll

Transfer all the flags for `assertion` to `object`. If `includeAll` is set to `false`, then the base Chai assertion flags (namely `object`, `ssfi`, `lockSsfi`, and `message`) will not be transferred.

```js
var newAssertion = new Assertion();
utils.transferFlags(assertion, newAssertion);

var anotherAssertion = new Assertion(myObj);
utils.transferFlags(assertion, anotherAssertion, false);
```

### .compatibleInstance(thrown, errorLike)

- @param { Error } thrown error
- @param { Error | ErrorConstructor } errorLike object to compare against

Checks if two instances are compatible (strict equal). Returns false if errorLike is not an instance of Error, because instances can only be compatible if they’re both error instances.

### .compatibleConstructor(thrown, errorLike)

- @param { Error } thrown error
- @param { Error | ErrorConstructor } errorLike object to compare against

Checks if two constructors are compatible. This function can receive either an error constructor or an error instance as the `errorLike` argument. Constructors are compatible if they’re the same or if one is an instance of another.

### .compatibleMessage(thrown, errMatcher)

- @param { Error } thrown error
- @param { String | RegExp } errMatcher to look for into the message

Checks if an error’s message is compatible with a matcher (String or RegExp). If the message contains the String or passes the RegExp test, it is considered compatible.

### .getConstructorName(errorLike)

- @param { Error | ErrorConstructor } errorLike

Gets the constructor name for an Error instance or constructor itself.

### .getMessage(errorLike)

- @param { Error | String } errorLike

Gets the error message from an error. If `err` is a String itself, we return it. If the error has no message, we return an empty string.

### .getFuncName(constructorFn)

- @param { Function } funct

Returns the name of a function. When a non-function instance is passed, returns `null`. This also includes a polyfill function if `aFunc.name` is not defined.

### .hasProperty(object, name)

- @param { Object } object
- @param { String | Symbol } name

This allows checking whether an object has own or inherited from prototype chain named property.

Basically does the same thing as the `in` operator but works properly with null/undefined values and other primitives.

```js
var obj = {
  arr: ["a", "b", "c"],
  str: "Hello",
};
```

The following would be the results.

```js
hasProperty(obj, "str"); // true
hasProperty(obj, "constructor"); // true
hasProperty(obj, "bar"); // false

hasProperty(obj.str, "length"); // true
hasProperty(obj.str, 1); // true
hasProperty(obj.str, 5); // false

hasProperty(obj.arr, "length"); // true
hasProperty(obj.arr, 2); // true
hasProperty(obj.arr, 3); // false
```

### .getPathInfo(object, path)

- @param { Object } object
- @param { String } path

This allows the retrieval of property info in an object given a string path.

The path info consists of an object with the following properties:

- parent - The parent object of the property referenced by `path`
- name - The name of the final property, a number if it was an array indexer
- value - The value of the property, if it exists, otherwise `undefined`
- exists - Whether the property exists or not

### .getPathValue(object, path)

- @param { Object } object
- @param { String } path

This allows the retrieval of values in an object given a string path.

```js
var obj = {
  prop1: {
    arr: ["a", "b", "c"],
    str: "Hello",
  },
  prop2: {
    arr: [{ nested: "Universe" }],
    str: "Hello again!",
  },
};
```

The following would be the results.

```js
getPathValue(obj, "prop1.str"); // Hello
getPathValue(obj, "prop1.att[2]"); // b
getPathValue(obj, "prop2.arr[0].nested"); // Universe
```
