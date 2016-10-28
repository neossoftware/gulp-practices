var gulp = require('gulp');

gulp.task('hello', function() {
    console.log('Hello World Gulp');
});

gulp.task('default', ['hello']);
