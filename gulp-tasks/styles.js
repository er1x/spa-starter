'use strict';

var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var nib    = require('nib');

gulp.task('styles', function(){
  return gulp.src('app/index.styl')
    .pipe(stylus({
      use: nib(),
      'include css': true
    }))
    .pipe(gulp.dest('build/'));
});
