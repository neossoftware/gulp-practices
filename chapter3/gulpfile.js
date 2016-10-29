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

//  .src('images/**/*.{png,jpg}') copy n level in image folder

gulp.task('images', function() {
  return gulp
      .src('images/**/*.{png,jpg}') //in this case it doesnt have spaces ;)
      .pipe(gulp.dest('dist/images'));
});

//copy /exclude

gulp.task('data', function() {
     return gulp
       .src(['json/*.json','xml/*.xml','!json/*-secret.json'])
       .pipe(gulp.dest('dist/data'))       
});

gulp.task('default',['copy-index', 'images', 'data']);
