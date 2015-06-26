'use strict';

var gulp        = require('gulp');
var reload      = require('./browser-sync').reload;

gulp.task('build', ['browserify', 'styles', 'html', 'copy'], function() {
  reload();
});
