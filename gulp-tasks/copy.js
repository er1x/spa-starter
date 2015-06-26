'use strict';

var gulp        = require('gulp');

gulp.task('copy', function() {
  gulp.src(['app/assets/**/*']).pipe(gulp.dest('build/static'));
});
