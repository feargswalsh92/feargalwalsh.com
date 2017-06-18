'use strict';
// generated on 2014-07-15 using generator-gulp-webapp 0.1.0

var gulp = require('gulp');
var critical = require('critical');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
    return gulp.src('app/styles/main.css')
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.size());
});


gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});

gulp.task('html', ['styles', 'scripts'], function () {
    var jsFilter = $.filter('**/*.js', {restore: true});
    var cssFilter = $.filter('**/*.css' , {restore: true});
    var assets = $.useref({searchPath: ['.tmp','app']});

    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore)
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

gulp.task('fonts', function () {
    return gulp.src(require('main-bower-files')().concat('app/fonts/**/*'))
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest('dist/fonts'))
        .pipe($.size());
});

gulp.task('extras', function () {
    return gulp.src(['app/*.*', '!app/*.html'], { dot: true })
        .pipe(gulp.dest('dist'));
});


gulp.task('scripts', function () {
    return gulp.src('app/scripts/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size());
});

gulp.task('critical',['build'], function (cb) {
  critical.generate({
    inline: true,
    base:'dist/',
    src:'index.html',
    dest: 'dist/index-critical.html',
    minify: true,
    width: 320,
    height: 480
  })
});


gulp.task('critical', ['build'], function () {
   critical.generate({
      inline: true,
      base: 'dist/',
      src: 'index.html',
      dest: 'dist/index-critical.html',
      minify: true,
      width: 320,
      height: 480
   });
});


gulp.task('default', ['clean'], function () {
    gulp.start('build');
});


gulp.task('clean', function () {
    return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.clean());
});

gulp.task('build', ['html', 'images', 'fonts', 'extras']);

// gulp.task('html', ['styles', 'scripts'], function () {
//     var jsFilter = $.filter('**/*.js', {restore: true});
//     var cssFilter = $.filter('**/*.css' , {restore: true});
//     var assets = $.useref({searchPath: ['.tmp','app']});
//
//     return gulp.src('app/*.html')
//         .pipe(assets)
//         .pipe(jsFilter)
//         .pipe($.uglify())
//         .pipe(jsFilter.restore)
//         .pipe(cssFilter)
//         .pipe($.csso())
//         .pipe(cssFilter.restore)
//         .pipe($.useref())
//         .pipe(gulp.dest('dist'))
//         .pipe($.size());
// });
