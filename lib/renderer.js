'use strict';

var coffee = require('coffee-script');
var assign = require('object-assign');

function coffeeRenderer(data, options) {
  return coffee.compile(data.text, assign({
    filename: data.path
  }, this.config.coffee, options));
}

module.exports = coffeeRenderer;
