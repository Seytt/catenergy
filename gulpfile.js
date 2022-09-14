const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function buildStyles() {
  return gulp.src('./css//*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'));

});

gulp.task('sass:watch', function buildStyles() {
    gulp.watch('./css//*.scss', gulp.parallel('sass'));
  });