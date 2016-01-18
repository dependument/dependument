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
  }

  registerTasks() {
    let gulp = this.gulp;

    gulp.task('bla', () => {
      console.log("bla bla gulp is working");
    });
  }
}

(function() {
  var gulp = new GulpEnvironment();
  gulp.registerTasks();
})();
