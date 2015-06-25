'use strict';

require('babel/register');
var gulp  = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
  return gulp.src(['test/**/*.js', '!test/helpers.js'])
    .pipe(mocha({
      reporter: 'nyan',
      require: ['../../test/helpers.js']
    }));
});
