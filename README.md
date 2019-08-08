# hexo-renderer-coffeescript

[![Build Status](https://travis-ci.org/hexojs/hexo-renderer-coffeescript.svg?branch=master)](https://travis-ci.org/hexojs/hexo-renderer-coffeescript)
[![NPM version](https://badge.fury.io/js/hexo-renderer-coffeescript.svg)](https://www.npmjs.com/package/hexo-renderer-coffeescript)
[![Coverage Status](https://coveralls.io/repos/hexojs/hexo-renderer-coffeescript/badge.svg)](https://coveralls.io/r/hexojs/hexo-renderer-coffeescript) 

Add support for [CoffeeScript].

## Install

``` bash
$ npm install hexo-renderer-coffeescript --save
```

## Options

You can configure this plugin in `_config.yml`.

``` yaml
coffee:
  header: false
  bare: false
```

- **header** - Prepend header to generated files
- **bare** - Compile the JavaScript without the [top-level function safety wrapper](http://coffeescript.org/#lexical-scope).

[CoffeeScript]: http://coffeescript.org/
