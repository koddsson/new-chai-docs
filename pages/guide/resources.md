---
title: "Resources"
layout: "guide.njk"
---

If you have questions or issues, please use this project's [GitHub Issues](https://github.com/chaijs/chai/issues). You can also stay updated through the [Google Group](https://groups.google.com/g/chaijs) or contact [@jakeluer](https://twitter.com/jakeluer) directly on Twitter. Chai developers are also available on Freenode IRC in #letstest.js.

## Developing

Please avoid making changes to the browser versions of Chai if you are developing in the browser. All changes to the library should be made to `lib/*` and then packaged for the browser using the `make` command.

## Testing

Tests are written in `exports` style on the [Mocha test framework](https://mochajs.org/). There is a test file for each of the interfaces. The tests for `expect` and `assert` must pass in Node.js and in the browser, whereas the `should` tests only need to pass in Node.js.

Browser tests are currently known to pass in Chrome 16 and Firefox 8. Please let us know if you can test in other browsers or versions.

### Server-Side Testing

It's quite simple:

```js
make test
```

### Browser-Side Testing

It's also quite simple. Open up `test/browser/index.html` in your nearest browser.

## Building

If you have made changes to any of the components, you must rebuild the browser package:

```js
make
```

## Contributors

```js
repo age : 1 year, 5 months
active   : 123 days
commits  : 638
files    : 55
authors  :
  476  Jake Luer               74.6%
   66  Veselin Todorov         10.3%
   42  Domenic Denicola        6.6%
    6  Ruben Verborgh          0.9%
    5  Juliusz Gonera          0.8%
    5  Scott Nonnenberg        0.8%
    5  Jo Liss                 0.8%
    4  josher19                0.6%
    4  John Firebaugh          0.6%
    4  Nick Heiner             0.6%
    3  Jeff Barczewski         0.5%
    2  Edwin Shao              0.3%
    2  Teddy Cross             0.3%
    2  Jakub Nešetřil          0.3%
    1  Anand Patil             0.2%
    1  Niklas Närhinen         0.2%
    1  Paul Miller             0.2%
    1  Jeff Welch              0.2%
    1  Sasha Koss              0.2%
    1  Chris Connelly          0.2%
    1  Benjamin Horsleben      0.2%
    1  Victor Costan           0.2%
    1  Chun-Yi                 0.2%
    1  Vinay Pulim             0.2%
    1  DD                      0.2%
    1  Kilian Ciuffolo         0.2%
```
