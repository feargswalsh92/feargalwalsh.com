var gulp = require('gulp')
    shell = require('gulp-shell');

    gulp.task('jekyll', function() {
          return gulp.src('index.html', { read: false })
              .pipe(shell([
                    'jekyll build'
                      ]));
    });
