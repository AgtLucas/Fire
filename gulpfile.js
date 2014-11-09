var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , uglify = require('gulp-uglify')
  , concat = require('gulp-concat')
  , sass = require('gulp-sass');

// Browserify Task
gulp.task('browserify', function () {
  gulp.src('src/js/main.js')
    .pipe(browserify({transform:'reactify'}))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});