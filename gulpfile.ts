/// <reference path="typings/gulp/gulp.d.ts" />
/// <reference path="typings/del/del.d.ts" />
/// <reference path="typings/gulp-typescript/gulp-typescript.d.ts" />
/// <reference path="typings/run-sequence/run-sequence.d.ts" />

declare var __dirname: string;

import gulp = require('gulp');
import del = require('del');
import tsc = require('gulp-typescript');
import runSequence = require('run-sequence');

const Server = require('karma').Server;
const coveralls = require('gulp-coveralls');

class GulpEnvironment {
  private srcTSConfigAMD;
  private specTSConfigAMD;
  private srcTSConfigUMD;

  constructor() {
    this.srcTSConfigAMD = tsc.createProject('src/tsconfig.json', {
      module: 'amd'
    });
    this.specTSConfigAMD = tsc.createProject('spec/tsconfig.json', {
      module: 'amd'
    });
    this.srcTSConfigUMD = tsc.createProject('src/tsconfig.json', {
      module: 'umd'
    });
  }

  registerTasks() {
    let srcTSConfigAMD = this.srcTSConfigAMD;
    let specTSConfigAMD = this.specTSConfigAMD;
    let srcTSConfigUMD = this.srcTSConfigUMD;

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
    gulp.task('build:umd', (done) => {
      srcTSConfigUMD.src()
        .pipe(tsc(srcTSConfigUMD))
        .pipe(gulp.dest('build'))
        .on('end', done);
    });
    gulp.task('test-build:spec', (done) => {
      specTSConfigAMD.src()
        .pipe(tsc(specTSConfigAMD))
        .pipe(gulp.dest('build.spec'))
        .on('end', done);
    });
    gulp.task('test-build:src', (done) => {
      srcTSConfigAMD.src()
        .pipe(tsc(srcTSConfigAMD))
        .pipe(gulp.dest('build.spec/src'))
        .on('end', done);
    });
    gulp.task('test:start', () => {
      new Server({
        configFile: __dirname + '/build.spec/spec/karma.conf.js',
        singleRun: true
      }).start();
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
