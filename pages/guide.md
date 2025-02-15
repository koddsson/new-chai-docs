---
title: "Getting Started Guide"
layout: "guide.njk"
---

Welcome to Chai! We are glad that you have decided to give Chai.js a try! If
this is your first visit, get acquainted with the basics, such as installation
and our included assertion styles.

## The Basics

- **Installation**: Install Chai in Node.js, the browser, and other environments.
- **Assertion Styles**: Learn about styles that you can use to define assertions.
- **Using Chai with ESM and Plugins**: Learn how to use Chai with ECMAScript
  Modules (ESM) and plugins.

## Making Plugins

After you have a solid knowledge of what is included in Chai, the next step is
learning how to extend Chai through plugins. Chai is infinitely more powerful
than what is included, limited only by what you want to achieve. The Plugin API
is also intended as a way to simplify testing by providing users a way to
encapsulate common assertions for repeat use.

### Exposing Globals in Plugins

When creating a Chai plugin, it’s possible to expose globals that can be used
across multiple files. Here’s how to do it sustainably:

#### Good Practice

Prefer exporting any global in the module record so it can be imported directly
instead of adding it as a property in the chai object:

```javascript
// An example of a good plugin:

export const myGlobal = {...};

export default function myPlugin(chai, utils) {
  // Plugin implementation
}
```

#### Potential Issues

Avoid exposing globals only through `chai.use()` without making them available
for import, as this can lead to issues when trying to use the global across
multiple files:

```javascript
// An example of a plugin which may have issues:

const myGlobal = {...};

export default function myPlugin(chai, utils) {
  chai.myGlobal = myGlobal;
}

// Another example of a plugin which may have issues:

export default function myPlugin(chai, utils) {
  chai.myGlobal = {...};
}
```

### Guard against multiple calls to `use(..)`

In certain situations, the `use(..)` function could be called multiple times
with your plugin. For a lot of plugins, this won’t be an issue, but it’s
considered best practice to check if the plugin has been applied already.

Here’s a contrived example of how you might implement a check in your plugin,
but the actual implementation is left up to the plugin author.

```javascript
import * as chai from "chai";

let overwritten = false;

function somePlugin(base) {
  if (!overwritten) {
    base.util.overwriteMethod(
      base.Assertion.prototype,
      "equal",
      function (_super) {
        return function (...args) {
          console.log("Called!"); // log something out
          return _super.call(this, ...args);
        };
      },
    );
    overwritten = true;
  }
}

chai.use(somePlugin);
chai.use(somePlugin);

chai.expect(123).to.equal(123); // Logs `Called!` only once
```

By following these guidelines, you can create Chai plugins that are easy to use
and maintain.

- [Core Plugin Concepts](/guide/plugins/) covers the
  basics of using the Chai Plugin API.
- [Building a Helper](/guide/helpers/) is a walk-through
  for writing your first plugin.
