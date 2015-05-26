var gulp = require('gulp'),
	del = require('del'),
	gulpif = require('gulp-if'),
	livereload = require('gulp-livereload'),
	watchify = require('watchify'),
	reactify = require('reactify'),
	source = require('vinyl-source-stream'),
	browserify = require('browserify'),
	uglify = require('gulp-uglify'),
	buffer = require('vinyl-buffer'),
	babelify = require('babelify'),
	pck = require('./package.json');

var libs = pck.externalLibs,
	watch = false,
	debug = true;

function build() {
	var b = browserify({ debug: debug, entries : [pck.main] })
		.transform(babelify)
    	.transform(reactify)
    	.external(libs);

    if(watch) {
	    b = watchify(b)
	    	.on('update', function() {
				console.log("Watchify detected change -> Rebuilding bundle");
				return bundleShare(b);
			});
	}

    return bundleShare(b);
};

function bundleShare(b) {
    return b.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulpif(!watch, uglify()))
        .pipe(gulp.dest('./build/js'))
        .pipe(gulpif(watch, livereload()));
}

gulp.task('build-libs', ['clean-libs'], function() {
	return browserify({ debug: debug })
		.require(libs)
		.bundle()
		.pipe(source('libs.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./build/js'));
});

gulp.task('clean-libs', function(done) {
	del(['./build/js/libs.js'], done);
});

gulp.task('clean-all', function(done) {
	del(['./build'], done);
});

gulp.task('clean-app', function(done) {
	del(['./build/js/app.js'], done);
});

gulp.task('build-app', ['clean-app'], function() {
    return build();
});

gulp.task('watch-app', ['clean-app'], function() {
	return watch = true, build();
});

gulp.task('watch', ['watch-app'], function(){
  livereload.listen(35729);
});

gulp.task('default', ['build-app']);
gulp.task('build-all', ['build-libs', 'build-app']);