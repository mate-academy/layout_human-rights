'use strict';

const browserSync = require('browser-sync');

/**
 * Run Browsersync with server config
 */
browserSync({
  server: 'src',
  files: ['src/*.html', 'src/*.css'],
  port: 8080,
  notify: false,
});
