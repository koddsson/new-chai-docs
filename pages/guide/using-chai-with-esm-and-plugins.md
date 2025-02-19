---
title: "Using Chai with ESM and Plugins"
layout: "base.njk"
---

This guide provides an overview of how to use Chai with ECMAScript modules (ESM) and plugins, including examples using the `chai-http` plugin.

## Importing Chai

To use Chai with ESM, you can import Chai in your test files using the `import` statement. Here’s how you can import the `expect` interface:

```js
import { expect } from "chai";
```

## Using Plugins

Chai plugins can extend Chai’s capabilities. To use a plugin, you first need to install it, then use the `use` method to load it. Here’s how to use the `chai-http` plugin as an example:

```js
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

// Now you can use `chai-http` with the `chai` object.
```

### chai-http Example

Here’s an example of using `chai-http` to test an HTTP GET request:

```js
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

describe("GET /user", () => {
  it("should return the user", (done) => {
    chai
      .request("http://example.com")
      .get("/user")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        done();
      });
  });
});
```
