# obj-assign

`Object.assign` copies all own enumerable values but does not copies getters, setters and other value descriptors. This library allows you copy with all property descriptors of object.

[![](https://img.shields.io/npm/v/obj-assign.svg)](https://www.npmjs.com/package/obj-assign)
[![Build Status](https://travis-ci.com/doniyor2109/obj-assign.svg?branch=master)](https://travis-ci.com/doniyor2109/obj-assign)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/doniyor2109/obj-assign/blob/master/LICENSE)

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Description
The Object.assign() method only copies enumerable and own properties from a source object to a target object. It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters. Therefore it assigns properties versus just copying or defining new properties. This may make it unsuitable for merging new properties into a prototype if the merge sources contain getters.

## Installation

```bash
npm install obj-assign

or

yarn add obj-assign

```

## Usage

```js
const assign = require('obj-assign');

const obj = Object.create({}, {
  bar: {
    enumerable: true,
    value: 'bar',
  },
  foo: {
    enumerable: true,
    get: function() {
      return this.bar;
    }
  }
});

const clone = assign({}, obj);

clone.bar = 'Hello World';

clone.foo // 'Hello World'
```

## License

MIT
