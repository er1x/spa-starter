'use strict';

var gulp   = require('gulp');

gulp.task('watch', ['build'], function() {
  gulp.watch('app/**/*.*', ['build']);
});
