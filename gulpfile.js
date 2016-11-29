var gulp = require('gulp') ; 
var notify = require('gulp-notify') ; 
var livereload = require('gulp-livereload') ; 
var nodemon = require('gulp-nodemon') ; 


gulp.task('public',function(){  
    return gulp.src('public/**')
      .pipe(livereload());
});

gulp.task('watch', function() {  
    livereload.listen();
    gulp.watch('public/**', ['public']);
});


gulp.task('server',function(){  
    nodemon({
        'script': 'index.js'         
    });
});


gulp.task('serve', ['server', 'watch']) ;  
