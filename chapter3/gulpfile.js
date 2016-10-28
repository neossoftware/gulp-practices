var gulp = require('gulp');

//original code is:
/*
gulp.task('copy-index', function() {
   return gulp
     .src('index.html')
     .pipe(gulp.src('dist')); //this a bug it needs des function
});

*/

//copy index.html to dist folder
gulp.task('copy-index', function() {
   return gulp
     .src('index.html')
     .pipe(gulp.dest('dist'));
});

gulp.task('default',['copy-index']);
