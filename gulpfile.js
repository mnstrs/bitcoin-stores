
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    print = require('gulp-print')
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync');

gulp.task('js', function(){
  gulp.src('assets/javascripts/**/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/'))
})

gulp.task('image', function(){
  gulp.src('assets/images/**/*')
    .pipe(imagemin({
        progressive: true
    }))
    .pipe(gulp.dest('assets/images/'))

})

gulp.task('server', function(){
  browserSync.init({
    // setup for fuerza when static files
    server: {
      proxy: 'localhost/bitcoin/front'
    }

    // setup for home
    //  proxy : 'localhost:80/~thommorais/megusta/front/'

  })

  gulp.watch(['public/*.css','public/*.js','*.html','*.php']).on('change', browserSync.reload)

})


gulp.task('default',['js', 'image', 'server'], function(){
  gulp.watch('assets/javascripts/**/*.js', ['js'])
})
