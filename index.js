/* global hexo */
'use strict';

hexo.extend.renderer.register('coffee', 'js', require('./lib/renderer'), true);
