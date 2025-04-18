---
title: "Assertion Styles"
layout: "base.njk"
---

This section of the guide introduces you to the three different assertion styles that you may use in your testing environment. Once you have made your selection, it is recommended that you look at the API Documentation for your selected style.

## Assert

[View full Assert API](/api/assert/)

The assert style is exposed through the `assert` interface. This provides the classic assert-dot notation, similar to that packaged with Node.js. This assert module, however, provides several additional tests and is browser compatible.

```js
let assert = require("chai").assert;
let foo = "bar";
let beverages = { tea: ["chai", "matcha", "oolong"] };

assert.typeOf(foo, "string"); // without optional message
assert.typeOf(foo, "string", "foo is a string"); // with optional message
assert.equal(foo, "bar", "foo equal `bar`");
assert.lengthOf(foo, 3, "foo's value has a length of 3");
assert.lengthOf(beverages.tea, 3, "beverages has 3 types of tea");
```

In all cases, the assert style allows you to include an optional message as the last parameter in the `assert` statement. These will be included in the error messages should your assertion not pass.

## BDD

[View full BDD API](/api/bdd/)

The BDD style comes in two flavors: `expect` and `should`. Both use the same chainable language to construct assertions, but they differ in the way an assertion is initially constructed. In the case of `should`, there are also some caveats and additional tools to overcome them.

### Expect

The BDD style is exposed through the `expect` or `should` interfaces. In both scenarios, you chain together natural language assertions.

```js
let expect = require("chai").expect;
let foo = "bar";
let beverages = { tea: ["chai", "matcha", "oolong"] };

expect(foo).to.be.a("string");
expect(foo).to.equal("bar");
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property("tea").with.lengthOf(3);
```

`Expect` also allows you to include arbitrary messages to prepend to any failed assertions that might occur.

```js
let answer = 43;

// AssertionError: expected 43 to equal 42.
expect(answer).to.equal(42);

// AssertionError: topic [answer]: expected 43 to equal 42.
expect(answer, "topic [answer]").to.equal(42);
```

This comes in handy when being used with non-descript topics such as booleans or numbers.

### Should

The `should` style allows for the same chainable assertions as the `expect` interface; however, it extends each object with a `should` property to start your chain. This style has some issues when used with Internet Explorer, so be aware of browser compatibility.

```js
let should = require("chai").should(); // actually call the function
let foo = "bar";
let beverages = { tea: ["chai", "matcha", "oolong"] };

foo.should.be.a("string");
foo.should.equal("bar");
foo.should.have.lengthOf(3);
beverages.should.have.property("tea").with.lengthOf(3);
```

### Differences

First of all, notice that the `expect` require is just a reference to the `expect` function, whereas with the `should` require, the function is being executed.

```js
let chai = require("chai");
let expect = chai.expect;
let should = chai.should();
```

The `expect` interface provides a function as a starting point for chaining your language assertions. It works on Node.js and in all browsers.

The `should` interface extends `Object.prototype` to provide a single getter as the starting point for your language assertions. It works on Node.js and in all modern browsers except Internet Explorer.

### Should Extras

Given that `should` works by extending `Object.prototype`, there are some scenarios where `should` will not work. Mainly, if you are trying to check the existence of an object. Take the following pseudocode:

```js
db.get(1234, function (err, doc) {
  // we expect error to not exist
  // we expect doc to exist and be an object
});
```

Given that `err` should be null or undefined, `err.should.not.exist` is not a valid statement as `undefined` and `null` haven’t been extended with a `should` chain starter. As such, the appropriate assertions for this scenario are:

```js
let should = require("chai").should(); // actually call the function

should.not.exist(err);
should.exist(doc);
doc.should.be.an("object");
```

In the above case, `should.not.exist` and `should.exist` are standalone assertions that do not rely on the object being tested.

## Configuration

Chai has several configurable settings that can customize how certain assertions behave. These configurations can be accessed via the `chai.config` object.

### includeStack

By default, Chai does not show stack traces for failed assertions. To enable stack traces, set:

```js
chai.config.includeStack = true; // turn on stack trace
```

### showDiff

When an assertion fails, Chai can display a diff of the expected and actual values. This is true by default but can be turned off:

```js
chai.config.showDiff = false; // turn off reporter diff display
```

### truncateThreshold

This setting controls the length threshold for actual and expected values in assertion errors. If this threshold is exceeded, the value is truncated. Set it to zero to disable truncating altogether:

```js
chai.config.truncateThreshold = 0; // disable truncating
```
