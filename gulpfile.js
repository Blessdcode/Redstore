const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('create-io/**/*.scss')
        .pipe(sass())
        // .pipe(purgecss({ content:['*.html']}))
        .pipe(dest('css'))
}

function watchTask() {
    watch(['create-io/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)