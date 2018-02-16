'use strict';

var gulp = require('gulp');
 var  minifyCSS = require('gulp-minify-css');
 var sass = require('gulp-sass');
 



 
gulp.task('sass', function () {
  return gulp.src('bower_components/boostrap/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('recursos/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('bower_components/boostrap/scss/*.scss', ['sass']);
});

gulp.task('css', function() {
  return gulp.src('recursos/css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('recursos/css/min'))
});