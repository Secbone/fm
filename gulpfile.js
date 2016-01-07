"use strict"

let gulp = require("gulp");
let less = require("gulp-less");
let webpack = require("webpack-stream");

let webpack_config = require("./webpack.config.js");


gulp.task("jsx", () => {
    return gulp.src("jsx/*.jsx")
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('dist/js'));
});

gulp.task("less", () => {
    return gulp.src("less/*.less")
        .pipe(less())
        .pipe(gulp.dest("dist/css"));
});

gulp.task("watch", () => {
    gulp.watch("jsx/**/*.jsx", ["jsx"]);
    gulp.watch("less/**/*.less", ["less"]);
});
