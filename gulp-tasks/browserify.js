'use strict';

var watchify   = require('watchify');
var browserify = require('browserify');
var gulp       = require('gulp');
var source     = require('vinyl-source-stream');
var gutil      = require('gulp-util');
var assign     = require('lodash.assign');

var reload     = require('./browser-sync').reload;

var customOpts = {
  entries: ['app/index.jsx'],
  debug: true
};

var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts))
                .transform('babelify');

gulp.task('browserify', bundle);
b.on('update', bundle);
b.on('log', gutil.log);

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('index.js'))
    .pipe(gulp.dest('build'))
    .pipe(reload({stream: true}));
}
