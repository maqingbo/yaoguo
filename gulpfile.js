var gulp         = require('gulp');
var less         = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin      = require('gulp-htmlmin');
var cleanCSS     = require('gulp-clean-css');
var uglify       = require('gulp-uglify');
var imagemin     = require('gulp-imagemin');
var rename       = require('gulp-rename');
var runSequence  = require('run-sequence');  // 同步的执行gulp任务
// var concat       = require('gulp-concat');  // 已安装，未使用

var src = {
  html: 'src/*.html',
  less: [
    './src/less/custom-bootstrap/custom-bootstrap.less',
    './src/less/pages/*.less',
    './src/less/pages/*.less'
  ],
  css: 'src/css/*.css',
  js: 'src/js/*.js',
  imgs: './src/imgs/*'
}

var dist = {
  css: 'dist/css/*.css',
  js: 'dist/js/*.js'
}

gulp.task('less', function() {
  return gulp.src(src.less)
  .pipe(less())
  .pipe(gulp.dest('./src/css'));
});

gulp.task('autoprefixer', function() {
  gulp.src(src.css)
  .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
  .pipe(gulp.dest('./src/css'));
});

gulp.task('htmlmin', function() {
  return gulp.src(src.html)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('cssmin', function() {
  return gulp.src(src.css)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('jsmin', function () {
  // returns a Node.js stream, but no handling of error messages
  return gulp.src(src.js)
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('imgmin', function() {
  gulp.src(src.imgs)
      .pipe(imagemin())
      .pipe(gulp.dest('dist/imgs'))
});

gulp.task('go', function() {
  runSequence('less',
              'autoprefixer',
              ['htmlmin', 'cssmin', 'jsmin', 'imgmin']);
});

gulp.task('watch', function() {
  gulp.watch([src.less,], ['autoprefixer']);
  gulp.watch([src.less,], ['less']);
  gulp.watch([src.html,], ['htmlmin']);
  gulp.watch([src.css,], ['cssmin']);
});
