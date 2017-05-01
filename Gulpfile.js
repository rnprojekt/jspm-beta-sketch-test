
var gulp = require('gulp');

// TODO vendor css
global.path = {
  source: './src',
  js_source: './src/**/*.js',
  build: './dist',
  stage: './',
  index: './index.html',
  main: './src/main.js',
  sw: './sw.js',
  images: './images/**/*.png',
  vendor: {
    css: []
  }
};

// Require all tasks
require( 'require-dir' )( './gulp_modules' );

// Init
gulp.task( 'init', [ ] );

// Bundle
gulp.task( 'build', [ 'build-index', 'build-sw', 'build-images' ] );

// Default
gulp.task( 'default', [ 'init' ] );
