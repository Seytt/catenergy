const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function buildStyles() {
  return gulp.src('./scss//*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./scss'));

});

gulp.task('sass:watch', function buildStyles() {
    gulp.watch('./scss//*.scss', gulp.parallel('sass'));
  });