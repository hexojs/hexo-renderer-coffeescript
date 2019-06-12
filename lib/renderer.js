'use strict';

var coffee = require('coffeescript');

function coffeeRenderer(data, options) {
  return coffee.compile(data.text, Object.assign({
    filename: data.path
  }, this.config.coffee, options));
}

module.exports = coffeeRenderer;
