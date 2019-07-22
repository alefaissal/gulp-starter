const gulp = require("gulp"); // Load Gulp!
// Now that we've installed the terser package we can require it:

const terser = require("gulp-terser"), // if use ',', don't need to say const again
    rename = require("gulp-rename");

gulp.task("default", function () {
    return gulp
        .src("./js/*.js") // What files do we want gulp to consume?
        .pipe(terser()) // Call the terser function on these files
        .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
        .pipe(gulp.dest("./build/js")); // Where do we put the result?
});



// gulp.task("hello", function (done) { // you can creat new func for gulp
//     console.log("Hello world 2");
//     done();
// });
