var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');
var gitRev = require('git-rev');
var filter = require('gulp-filter');
var run = require('gulp-run');
var size = require('gulp-filesize');
var runSequence = require('run-sequence');

// var connect = require('gulp-connect');
// var revReplace = require('gulp-rev-replace');
// var rename = require("gulp-rename");
// var gitRev = require('git-rev');
// var gulp = require('gulp');
// var gulp_jspm_build = require('gulp-jspm-build');
// var sourcemaps = require('gulp-sourcemaps');
// var size = require('gulp-filesize');
// var rev = require('gulp-rev');
// var filter = require('gulp-filter');
// var run = require('gulp-run');

// Index
gulp.task( 'build-index', function() {
  gitRev.short( function(short) {
    gulp.src(global.path.index)
      .pipe(htmlreplace( {
        'js': 'bundle.js',
      }))
      .pipe(gulp.dest(global.path.build));
  });
});

gulp.task( 'build-sw', function() {
  return gulp
    .src( global.path.sw )
    .pipe(gulp.dest(global.path.build))
    .pipe(size());
});

gulp.task('build-jspm', function(callback) {
  runSequence('build-jspm-1', 'build-jspm-2', callback);
});

gulp.task( 'build-jspm-1', function(done) {
  return gulp
    .src( global.path.main )
    .pipe( run( './node_modules/.bin/jspm build <%= file.path %> dist/bundle.js --minify' ));
});

gulp.task( 'build-jspm-2', function(done) {
  return gulp
    .src('dist/bundle.js')
    .pipe(size());
});

/*
// main.js
gulp.task( 'build-jspm', function(done) {
  var filter_js = filter(['src/main.js'], {restore: true});
  var filter_jsx = filter(['src/main.jsx'], {restore: true});
  return gulp
    .src( global.path.main )
    .pipe(size())
    .pipe(filter_js)
    .pipe( run( './node_modules/.bin/jspm bundle-sfx <%= file.path %> build/main.js --minify' ) )
    .pipe(filter_js.restore)
    .pipe(filter_jsx)
    .pipe( run( './node_modules/.bin/jspm bundle-sfx <%= file.path %>! build/main.js --minify' ) )
  ;
});

gulp.task( 'build-jspm-post', function(done) {
  // var filterMain = filter(['build/main.js'], {restore: true});
  return gulp
    .src('build/main.js')
    .pipe(size())
    // .pipe(filterMain)
    // .pipe(rev())
    // .pipe(gulp.dest(global.path.build))
    // .pipe(rev.manifest("main-rev-manifest.json"))
    // .pipe(gulp.dest(global.path.build))
    // .pipe(filterMain.restore)
  ;
});
*/
