'use strict';

const babel = require('gulp-babel');
const babelify = require('babelify');
const browserify = require('browserify');
const cleancss = require('gulp-clean-css');
const eslint = require('gulp-eslint');
const exec = require('child_process').exec;
const gulp = require('gulp');
const injectModules = require('gulp-inject-modules');
const istanbul = require('gulp-babel-istanbul');
const mocha = require('gulp-mocha');
const path = require('path');
const pug = require('gulp-pug');
const puglint = require('gulp-pug-lint');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sasslint = require('gulp-sass-lint');
const source = require('vinyl-source-stream');
const uglifyify = require('uglifyify');

const onErrorCallback = function(error) {
  console.error(error.stack || error.message || error);
  this.emit('end');
};

const execute = function(cmd, doneCallback) {
  const _nonewline = function(str) {
    return str.replace(/\n/, '').replace(/\r/, '');
  };

  const proc = exec(cmd, (error) => {
    if (error) {
      console.error(error);
    }
    doneCallback(error);
  });

  proc.stdout.on('data', (data) => {
    console.log(_nonewline(data));
  });

  proc.stderr.on('data', (data) => {
    console.error(_nonewline(data));
  });
};

gulp.task('coverage', ['test'], () => {
  return gulp
    .src('coverage/lcov.info')
    .pipe(replace(`SF:${process.cwd()}`, 'SF:'))
    .pipe(replace(/SF:[\.]{0,1}\/src\//g, 'SF:src/'))
    .pipe(gulp.dest('coverage/'));
});

gulp.task('submit-codeclimate', ['coverage'], (doneCallback) => {
  const lcov = path.join(process.cwd(), 'coverage/lcov.info');
  const bin = path.join(process.cwd(), 'node_modules/.bin/codeclimate-test-reporter');

  execute([bin, '<', lcov].join(' '), doneCallback);
});

gulp.task('submit-coveralls', ['coverage'], (doneCallback) => {
  const lcov = path.join(process.cwd(), 'coverage/lcov.info');
  const bin = path.join(process.cwd(), 'node_modules/.bin/coveralls');

  execute([bin, '<', lcov].join(' '), doneCallback);
});

gulp.task('submit-coverage', ['submit-codeclimate', 'submit-coveralls']);

gulp.task('css', () => {
  const nm = path.join(__dirname, '/node_modules'); // eslint-disable-line no-undef

  return gulp
    .src(['src/styles/**/*.scss'])
    .pipe(sass({
      indentedSyntax: false,
      sourceComments: 'normal',
      outputStyle: 'nested',
      includePaths: [
        path.join(nm, '/bourbon/app/assets/stylesheets'),
        path.join(nm, '/bourbon-neat/app/assets/stylesheets')
      ]
    }))
    .on('error', onErrorCallback)
    .pipe(cleancss())
    .pipe(gulp.dest('.'));
});

gulp.task('html', () => {
  return gulp
    .src(['src/pages/**/*.jade'])
    .pipe(pug())
    .on('error', onErrorCallback)
    .pipe(gulp.dest('.'));
});

gulp.task('js', () => {
  return browserify(
    {
      entries: ['./src/scripts/client.js'],
      debug: false,
      detectGlobals: true,
      bundleExternal: false,
      transform: [babelify, uglifyify]
    })
    .bundle()
    .pipe(source('client.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('js-lint', () => {
  return gulp
    .src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('pug-lint', () => {
  return gulp
    .src(['src/**/*.jade'])
    .pipe(puglint());
});

gulp.task('sass-lint', () => {
  return gulp
    .src(['src/**/*.scss'])
    .pipe(sasslint())
    .pipe(sasslint.format());
});

gulp.task('test', (doneCallback) => {
  gulp
    .src(['src/**/*.js', '!src/**/*.spec.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire()) // or you could use .pipe(injectModules())
    .on('finish', function() {
      gulp
        .src('src/**/*.spec.js')
        .pipe(babel())
        .pipe(injectModules())
        .pipe(mocha({
          require: ['./src/scripts/setup.spec.js']
        }))
        .pipe(istanbul.writeReports({
          dir: './coverage',
          reporters: ['lcov', 'json', 'text'],
          reportOpts: { dir: './coverage' }
        }))
        .on('end', doneCallback);
    });
});

gulp.task('lint', ['js-lint', 'pug-lint', 'sass-lint']);
gulp.task('default', ['lint', 'css', 'html', 'js']);

gulp.task('watch', ['default'], () => {
  gulp.watch(['src/**/*.scss'], ['sass-lint', 'css']);
  gulp.watch(['src/**/*.js'], ['js-lint', 'js']);
  gulp.watch(['src/**/*.jade'], ['pug-lint', 'html']);
});
