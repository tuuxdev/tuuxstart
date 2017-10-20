// INCLUIDE GULP
var gulp = require('gulp');

// INCLUIDE PLUGINS
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// TASK CONNECT
gulp.task('connect', function () {
	connect.server({
		root: './www',
		livereload: true
	});
});

// TASK HTML
gulp.task('html', function () {
	gulp.src('./www/**/*.html')
		.pipe(connect.reload());
});

// TASK SASS
gulp.task('sass', function () {
	return gulp.src(['./sass/main.scss'])
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded'//outputStyle: nested - expanded - compact - compressed
		}).on('error', sass.logError)) 
		.pipe(autoprefixer())
		.pipe(concat('style.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./www/css'))
		.pipe(connect.reload());
});

// TASK JAVASCRIPTS
gulp.task('javascripts', function () {
	return gulp.src('javascripts/*.js')
		.pipe(concat('plugins.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./www/js'))
		.pipe(connect.reload());
});

// WATCH FILES FOR CHANGES
gulp.task('watch', function () {
	gulp.watch('javascripts/**/*.js', ['javascripts']);
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch(['./www/**/*.html'], ['html']);
});

// EXECUTE
gulp.task('default', ['connect', 'sass', 'javascripts', 'watch']);
