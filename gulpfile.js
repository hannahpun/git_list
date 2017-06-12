'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	jade = require('gulp-jade'),
	webserver = require('gulp-webserver');


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});


gulp.task('templates', function() {
  var YOUR_LOCALS = {};
  gulp.src('./*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./app/'))
});


// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

// webserver
gulp.task('webserver', function(){
  gulp.src('./app/')
      .pipe(webserver({
        port:1234,
	    livereload: true,
	    directoryListing: false,
	    open: true,
	    fallback: 'index.html'
      }));
})


gulp.task('watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass']);
	gulp.watch('./*.jade',['templates']);
});

gulp.task('default', ['webserver','watch']);