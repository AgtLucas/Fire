var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , uglify = require('gulp-uglify')
  , concat = require('gulp-concat')
  , sass = require('gulp-sass')
  , gh = require('gulp-gh-pages');

// Browserify Task
gulp.task('browserify', function () {
  gulp.src('src/js/main.js')
    .pipe(browserify({transform:'reactify'}))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Copy Task
gulp.task('copy', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

// Default Task
gulp.task('default', ['browserify', 'copy']);

// Watch Task
gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['default']);
});

// Deploy Task
gulp.task('gh', function () {
  return gulp.src('dist/**/*')
    .pipe(deploy(options))
});