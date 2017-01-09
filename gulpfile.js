var gulp = require('gulp');
var sass = require('gulp-compass');
var plumber = require('gulp-plumber');
var rimraf = require('rimraf');
//var livereload = require('gulp-livereload');

var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');

// var miscUtil = require('./gulp-util');

var srcDir = 'src/';
var dest = 'public/';
var srcJs = srcDir + 'js/app.js';

gulp.task('clean', function (cb) {
    return rimraf(dest, cb);
});

gulp.task('copy:index', function () {
    return gulp.src('./src/index.html').pipe(gulp.dest(dest));
});

gulp.task('webpack', function () {
    //webpackConfig.watch = true;
    gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(webpackConfig.output.path))
        //.pipe(livereload());
});
