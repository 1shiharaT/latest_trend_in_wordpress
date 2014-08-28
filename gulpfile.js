var gulp = require("gulp");
var sketch = require("gulp-sketch");

gulp.task('sketch', function(){
  return gulp.src("./*.sketch")
    .pipe(sketch({
      export: 'artboards',
      formats: 'png'
    }))
    .pipe(gulp.dest("./export/"));
});


// task "watch"
gulp.task( 'watch', ['sketch'], function() {

  // Watch .scss files
  gulp.watch('./*.sketch', ['sketch']);

});
