// Include gulp
var gulp = require('gulp');

// Include Plugins
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// Task server
gulp.task('webserver', function () {
	gulp.src('')
		.pipe(webserver({
			livereload: true
			, directoryListing: true
			, open: 'http://localhost:8000/www/index.html'
		}));
});

// Tasks sass
gulp.task('sass', function () {
	return gulp.src(['./sass/main.scss'])
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write(''))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./www/css'))
		.pipe(cssnano({
			autoprefixer: {
				add: true
			}
		}))
		.pipe(sourcemaps.write(''))
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('./www/css'));
});

// Tasks javascript
gulp.task('javascripts', function () {
	return gulp.src('javascripts/*.js')
		.pipe(concat('plugins.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./www/js'))
});

// Watch Files For Changes
gulp.task('watch', function () {
	gulp.watch('javascripts/*.js', ['javascripts']);
	gulp.watch('sass/*.scss', ['sass']);
});

// Execute
gulp.task('default', ['webserver', 'sass', 'javascripts', 'watch']);