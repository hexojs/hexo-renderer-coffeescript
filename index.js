var coffee = require('coffee-script');

hexo.extend.renderer.register('coffee', 'js', function(data, options){
  var config = hexo.config.coffee || {};

  return coffee.compile(data.text, {
    filename: data.path,
    header: config.header,
    bare: config.bare
  });
}, true);