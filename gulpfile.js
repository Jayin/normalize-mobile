var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var header = require('gulp-header');

var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('default', function() {
    return gulp.src('./src/normalize-mobile.css')
        .pipe(cssnano())
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist'));
});


