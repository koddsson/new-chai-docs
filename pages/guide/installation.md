---
title: "Installation"
layout: "guide.njk"
---

Chai is available for both Node.js and the browser using any test framework you
like. There are also a number of other tools that include Chai.

## Node.js

The package is available through [npm](https://www.npmjs.com/):

```bash
npm install chai
```

It’s recommended to add it to your package.json devDependencies using a \* as
the version tag. This will ensure that you always have the most recent version
after running npm install, which can be especially powerful when paired with a
continuous integration tool.

```json
"devDependencies": {
  "chai": "*",
  "mocha": "*"
},
"//": "mocha is our preference, but you can use any test runner you like"
```

## Browser

Include the Chai browser build in your testing suite:

```html
<script src="chai.js" type="text/javascript"></script>
```

This will provide `chai` as a global object, or `define` it if you are using AMD.

The latest tagged version will be available for hot-linking at
<http://chaijs.com/chai.js>. If you prefer to host yourself, use the `chai.js`
file from the root of the github project. We recommend that you always use a
version tag as your starting point, so the
[tag download list](https://github.com/chaijs/chai/tags) is the best place to
start.

Currently supports all modern browsers: IE 9+, Chrome 7+, FireFox 4+, Safari 5+.
Please note that the `should` style is currently not compatible with IE9.

If you want to know if your browser is compatible, run the [online test suite](https://www.chaijs.com/api/test/).

## Other Platforms

### Ruby

[Konacha](https://github.com/jfirebaugh/konacha)

For testing your Ruby on Rails application using Chai assertions and the Mocha
test framework, check out Konacha – a modern test harness that takes full
advantage of Rails 3 features such as the asset pipeline and engines.
