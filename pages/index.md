---
title: "Chai Assertion Library"
layout: "base.njk"
---

Chai is a BDD / TDD assertion library for [Node.js](https://nodejs.org) and the browser that can be delightfully paired with any JavaScript testing framework.

## Download Chai

### For Node

The `chai` package is available on npm.

```bash
npm install chai --save-dev
```

[View Node Guide](/guide/installation/)

### For Browser

The `chai.js` script is available for download or a hotlink.

[Download chai.js](/chai.js)

[View Browser Guide](/guide/installation/)

## Getting Started

Learn how to install and use Chai through a series of guided walkthroughs.

[Getting Started Guide](/guide/)

## API Documentation

Explore the BDD & TDD language specifications for all available assertions.

[API Documentation](/api/)

## Plugin Directory

Extend Chai with additional assertions and vendor integration.

[Plugin Directory](/plugins/)

## Interfaces

Chai has several interfaces that allow the developer to choose the most comfortable. The chain-capable BDD styles provide an expressive language & readable style, while the TDD assert style provides a more classical feel.

### Should

```javascript
import "chai/register-should.js";

foo.should.be.a("string");
foo.should.equal("bar");
foo.should.have.lengthOf(3);
tea.should.have.property("flavors").with.lengthOf(3);
```

[Visit Should Guide →](/guide/styles/#should)

### Expect

```javascript
import { expect } from "chai";

expect(foo).to.be.a("string");
expect(foo).to.equal("bar");
expect(foo).to.have.lengthOf(3);
expect(tea).to.have.property("flavors").with.lengthOf(3);
```

[Visit Expect Guide →](/guide/styles/#expect)

### Assert

```javascript
import { assert } from "chai";

assert.typeOf(foo, "string");
assert.equal(foo, "bar");
assert.lengthOf(foo, 3);
assert.property(tea, "flavors");
assert.lengthOf(tea.flavors, 3);
```

[Visit Assert Guide →](/guide/styles/#assert)

## Plugins

Plugins extend Chai's assertions to new contexts such as vendor integration & object construction. Developers can build their own plugins to share with the community or use the plugin pattern to DRY up existing tests.

### Featured Plugin: chai-webdriver

Create expressive integration tests with Chai and [selenium-webdriver](https://www.npmjs.org/package/selenium-webdriver).

```javascript
import sw = from 'selenium-webdriver';
import { expect, use } from 'chai';
import chaiWebdriver from 'chai-webdriver';

const driver = new sw.Builder()
  .withCapabilities(sw.Capabilities.chrome())
  .build();

// And then...
use(chaiWebdriver(driver));

driver.get("http://chaijs.com/");
expect("nav h1").dom.to.contain.text("Chai");
expect("#node .button").dom.to.have.style("float", "left");
```

[Learn More & Install →](/plugins/chai-webdriver/)

### Custom Plugins

Browse our growing directory of custom plugins & vendor integrations to find the best tool for your needs.

[Browse Plugins →](/plugins/)

### Develop Plugins

Chai has an extensive utility belt for plugin developers. Learn how to build your plugins & share.

[Plugin Guide →](/guide/plugins/)

## Join our Community

We have an active **GitHub Discussions** forum where you can ask questions, discuss improvements, and contribute to Chai.

[Visit GitHub Discussions →](https://github.com/chaijs/chai/discussions)
