/// <reference path="typings/gulp/gulp.d.ts" />
/// <reference path="typings/del/del.d.ts" />
/// <reference path="typings/gulp-typescript/gulp-typescript.d.ts" />
/// <reference path="typings/run-sequence/run-sequence.d.ts" />

declare var __dirname: string;

import gulp = require('gulp');
import del = require('del');
import tsc = require('gulp-typescript');
import runSequence = require('run-sequence');

const jasmineNode = require('gulp-jasmine-node');
const coveralls = require('gulp-coveralls');

class GulpEnvironment {
  private srcTSConfig;
  private specTSConfig;

  constructor() {
    this.srcTSConfig = tsc.createProject('src/tsconfig.json', {
      module: 'commonjs'
    });
    this.specTSConfig = tsc.createProject('spec/tsconfig.json', {
      module: 'commonjs'
    });
  }

  registerTasks() {
    let srcTSConfig = this.srcTSConfig;
    let specTSConfig = this.specTSConfig;

    gulp.task('test:ci', (done) => {
      runSequence('test', 'send-coveralls', () => {
        done();
      });
    });
    gulp.task('test', (done) => {
      runSequence('clean:build.spec', 'test-build:spec', 'test-build:src', 'test:start', () => {
        done();
      });
    });
    gulp.task('send-coveralls', (done) => {
      gulp.src('build.spec/coverage/**/lcov.info')
        .pipe(coveralls());

      done();
    });
    gulp.task('test-build:spec', (done) => {
      specTSConfig.src()
        .pipe(tsc(specTSConfig))
        .pipe(gulp.dest('build.spec'))
        .on('end', done);
    });
    gulp.task('test-build:src', (done) => {
      srcTSConfig.src()
        .pipe(tsc(srcTSConfig))
        .pipe(gulp.dest('build.spec/src'))
        .on('end', done);
    });
    gulp.task('test:start', () => {
      return gulp.src(['build.spec/spec/**/*.spec.js'])
        .pipe(jasmineNode())
        .on('end', done);
    });
    gulp.task('clean:build.spec', () => {
      return del([
        'build.spec'
      ]);
    });
  }
}

(function() {
  var gulp = new GulpEnvironment();
  gulp.registerTasks();
})();
