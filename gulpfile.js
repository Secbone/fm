"use strict"

let gulp = require("gulp");
let webpack = require("webpack-stream");

let webpack_config = require("./webpack.config.js");


gulp.task("jsx", () => {
    return gulp.src("jsx/*.jsx")
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('dist/js'));
});

gulp.task("watch", () => {
    gulp.watch("jsx/**/*.jsx", ["jsx"]);
});
