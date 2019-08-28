'use strict';

const browserSync = require('browser-sync');

browserSync({
  server: 'src',
  files: ['src/*.html', 'src/*.css'],
  port: 8080,
  notify: false,
});
