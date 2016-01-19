/// <reference path="typings/gulp/gulp.d.ts" />
/// <reference path="typings/del/del.d.ts" />
/// <reference path="typings/gulp-typescript/gulp-typescript.d.ts" />

declare var __dirname: string;

import gulp = require('gulp');
import del = require('del');
import tsc = require('gulp-typescript');

const Server = require('karma').Server;

class GulpEnvironment {
  private srcTSConfig;
  private specTSConfig;

  constructor() {
    this.srcTSConfig = tsc.createProject('src/tsconfig.json');
    this.specTSConfig = tsc.createProject('spec/tsconfig.json');
  }

  registerTasks() {
    let srcTSConfig = this.srcTSConfig;
    let specTSConfig = this.specTSConfig;

    gulp.task('test', ['test-build:spec', 'test-build:src'], () => {
      new Server({
        configFile: __dirname + '/build.spec/spec/karma.conf.js',
        singleRun: true
      }).start();
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
