# [CoffeeScript] renderer

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