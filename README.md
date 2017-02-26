# `no-dups-validator` [![Build status][travis-image]][travis-url] [![NPM version][version-image]][version-url] [![License][license-image]][license-url] [![Semantic Release][semantic-release-image]][semantic-release-url] [![Js Standard Style][standard-image]][standard-url]

Checks for duplicates given an [Iterable](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols).

## Install

`npm i @justinc/no-dups-validator`

### Demo

(see tests for more examples)

```js
const noDups = require('@justinc/no-dups-validator')
noDups([1, 2, 3])()
// [ true, [] ]

noDups([1, 2, 3, 2, 1])('Found the following duplicates: ')
// [ false, [ new Error('Found the following duplicates: 2, 1) ] ]
```

### [combine-validations](https://github.com/justin-calleja/combine-validations)

If you're OK with using [Folktale Validation](http://docs.folktalejs.org/en/latest/api/data/validation/Validation.html), you might be interested in [combine-validations](https://github.com/justin-calleja/combine-validations).

### Tutorials

TODO: A JSDoc 3 tutorial (re currying) needs to be injected in this README.md. For now there's only a link:

* tutorial: [curry.md](https://github.com/justin-calleja/jsdocs/blob/master/tutorials/curry.md)
* issue: jsdoc2md/jsdoc-to-markdown#115

## Modules

<dl>
<dt><a href="#module_@justinc/no-dups-validator">@justinc/no-dups-validator</a></dt>
<dd></dd>
<dt><a href="#module_@justinc/jsdocs">@justinc/jsdocs</a></dt>
<dd><p>This module houses JSDoc 3 type definitions which can be re-used in different packages.</p>
</dd>
</dl>

<a name="module_@justinc/no-dups-validator"></a>

## @justinc/no-dups-validator
<a name="module_@justinc/no-dups-validator..noDups"></a>

### @justinc/no-dups-validator~noDups(iterable, errMsgPrefix) ⇒ <code>Tuple.&lt;Boolean, Array.&lt;Error&gt;&gt;</code>
This function is curried.

**Kind**: inner method of <code>[@justinc/no-dups-validator](#module_@justinc/no-dups-validator)</code>  
**See**: [Tuple](#module_@justinc/jsdocs.Tuple)  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Iterable</code> | The iterable whose elements are checked for duplicates |
| errMsgPrefix | <code>String</code> | A string to prefix any found duplicates in the error message |

<a name="module_@justinc/jsdocs"></a>

## @justinc/jsdocs
This module houses JSDoc 3 type definitions which can be re-used in different packages.

<a name="module_@justinc/jsdocs.Tuple"></a>

### @justinc/jsdocs.Tuple : <code>Array</code>
The type `Tuple` is an `Array` of fixed length whose elements at specific
indices are of the specified types.

**Kind**: static typedef of <code>[@justinc/jsdocs](#module_@justinc/jsdocs)</code>  
**Example**  
```js
// A Tuple of arity (length) 2, whose first el is a Boolean and second el is
// an Array of Error:
Tuple<Boolean, Array<Error>>
// e.g. [ true, [] ]
// e.g. [ false, [ new Error('computer says no') ] ]
```
**Example**  
```js
// A Tuple of arity (length) 3, whose first el is a String, and both the
// second and third els are an Array of String:
Tuple<String, Array<String>, Array<String>>
// e.g. [ 'hello', [ 'world' ], [ 'goodbye', 'world' ] ]
```

[travis-image]: https://img.shields.io/travis/justin-calleja/no-dups-validator.svg?style=flat-square
[travis-url]: https://travis-ci.org/justin-calleja/no-dups-validator

[version-image]: https://img.shields.io/npm/v/@justinc/no-dups-validator.svg?style=flat-square
[version-url]: https://npmjs.org/package/@justinc/no-dups-validator

[standard-image]: https://img.shields.io/badge/code-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard

[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-release-url]: https://github.com/semantic-release/semantic-release

[license-image]: https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square
[license-url]: ./LICENSE
