var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    cssmin = require('gulp-cssmin'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    jsmin = require('gulp-jsmin'),
    watch = require('gulp-watch'),
    cache = require('gulp-cache');

var directory_project = "out";

/* pug files */
gulp.task('pug', function() {
    return gulp.src("pug/*.pug")        
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(directory_project + "/"));
});

/* sass files */
gulp.task('scss', function() {
    return gulp.src(['./scss/includes.scss']) 
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(concatCss("styles.min.css"))
        .pipe(cssmin())  
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(directory_project + '/css/')); 
});

/* image files */
gulp.task("img", function() {
    return gulp.src("img/**/*")
        .pipe(watch("img/**/*")) 
		.pipe(imagemin())
        .pipe(gulp.dest(directory_project + "/img/"));
});

/* js main files */
gulp.task("js", function() {
    return gulp.src("js/**/*.js")
        .pipe(concat("main.min.js"))
        .pipe(jsmin())
	    .pipe(gulp.dest(directory_project + "/js/"));
});

/* libraries (js) */
gulp.task("jsLibraries", function() {
    return gulp.src("libraries/js/**/*.js")
        .pipe(concat("libraries.min.js"))
        .pipe(jsmin())
	    .pipe(gulp.dest(directory_project + "/js/"));
});

/* libraries (css) */
gulp.task("cssLibraries", function() {
    return gulp.src("libraries/css/**/*.css")
        .pipe(concatCss("libraries.min.css"))
        .pipe(cssmin()) 
	    .pipe(gulp.dest(directory_project + "/css/"));
});

gulp.task('watch', function() {
    gulp.watch(['scss/**/*.scss'], ['scss']);
    gulp.watch(['js/**/*.js'], ['js']);
    gulp.watch(['pug/**/*.pug'], ['pug']);
});

/* clear cache */
gulp.task('clear-cache', function() {
    return cache.clearAll();
});

gulp.task('default', ['pug', 'scss', 'img', 'js', 'jsLibraries', 'cssLibraries', 'watch']);