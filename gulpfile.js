const { src, dest, parallel } = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function copyHTML() {
  return src('*.html')
    .pipe(dest('build'))
}

function copyCSS() {
  return src(['node_modules/bootstrap/dist/css/bootstrap.min.css', 'custom.css'])
    .pipe(minifyCSS())
    .pipe(dest('build/css'))
}

function copyJS() {
  return src('scripts/*.js')
    .pipe(concat('app.min.js'))
    .pipe(dest('build/scripts'))
}
function copyImages(){
  return src('images/*.*')
    .pipe(dest('build/images'))
}

exports.js = copyJS;
exports.css = copyCSS;
exports.html = copyHTML;
exports.images = copyImages;
exports.default = parallel(copyHTML, copyCSS, copyJS, copyImages);
