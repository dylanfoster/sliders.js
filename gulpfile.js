"use strict";

var gulp = require("gulp");
var eslint = require("gulp-eslint");
var jsonlint = require("gulp-jsonlint");
var uglify = require("gulp-uglify");
var minifyCSS = require("gulp-minify-css");
var rename = require("gulp-rename");

var css = ["./src/**/*.css"];
var js = ["./src/**/*.js"];

gulp.task("default", ["lint", "build", "copy"]);

gulp.task("build", function(){
  gulp.src(css)
  .pipe(minifyCSS())
  .pipe(rename(function(file){
    file.basename += ".min";
    file.ext = ".css";
  }))
  .pipe(gulp.dest("./build"));

  gulp.src(js)
  .pipe(uglify())
  .pipe(rename(function(file){
    file.basename += ".min";
    file.ext = ".js";
  }))
  .pipe(gulp.dest("./build"));
});

gulp.task("copy", function(){
  gulp.src("./src/img/*", { base: "./src/img"})
  .pipe(gulp.dest("./build/img"));
});

gulp.task("lint", function(){
  gulp.src([].concat(js, "./gulpfile.js"))
  .pipe(eslint())
  .pipe(eslint.format("stylish", console.error));

  gulp.src(["./package.json", "./sliders.js.jquery.json"])
  .pipe(jsonlint())
  .pipe(jsonlint.reporter("stylish", console.error));
});
