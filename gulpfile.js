const gulp = require('gulp');
//so we start by installing it with npm install --save-dev gulp-babel
const babel = require('gulp-babel');
//gulp dependencies go here
const eslint = require('gulp-eslint');

gulp.task('default', function(){
	//gulp tasks go here

	// run ESLint
	gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());
	// Node source
	gulp.src("es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));
	// browser source
	gulp.src("public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));
});