/// <reference path="typings/requirejs/require.d.ts" />

declare var __dirname: string;

class GulpEnvironment {
  private gulp;
  private tsc;
  private Server;
  private srcTSConfig;
  private specTSConfig;

  constructor() {
    this.gulp = require('gulp');
    this.tsc = require('gulp-typescript');
    this.Server = require('karma').Server;
    this.srcTSConfig = this.tsc.createProject('src/tsconfig.json');
    this.specTSConfig = this.tsc.createProject('spec/tsconfig.json');
  }

  registerTasks() {
    let gulp = this.gulp;
    let tsc = this.tsc;
    let Server = this.Server;
    let srcTSConfig = this.srcTSConfig;
    let specTSConfig = this.specTSConfig;

    gulp.task('test', ['test-build:spec', 'test-build:src'], () => {
      new this.Server({
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
  }
}

(function() {
  var gulp = new GulpEnvironment();
  gulp.registerTasks();
})();
