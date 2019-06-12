var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');



function defaultTask(done) {
  // place code for your default task here
  done();
}

gulp.task('minify-css', function(done) {
  return gulp.src('./css/*.css')
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist/css/'))

  done();
});

gulp.task('move-js', function(done) {
  return gulp.src('./js/*.js')
  .pipe(gulp.dest('dist/js/'))

  done();
});

gulp.task('htmlmin', function(done) {
  return gulp.src('./*.html')
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest('dist/'))

  done();
});

gulp.task('fonts', function(done) {
  return gulp.src('./fonts/**/*')
  .pipe(gulp.dest('dist/fonts/'))

  done();
});

gulp.task('tinypng', function(done) {
  gulp.src('./img/**/*.{png,jpg,jpeg}')
      .pipe(tinypng({
        key: '3bdW9ymPtXVpGFAVhd20hj9BBtg8YOgh'
      }))
      .pipe(gulp.dest('dist/img/'));
      done();
});

gulp.task('default', gulp.parallel('minify-css', 'move-js', 'fonts', 'htmlmin', 'tinypng', function(done) {
  done();
}));