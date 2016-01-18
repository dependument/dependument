/// <reference path="typings/requirejs/require.d.ts" />

declare var __dirname: string;

class GulpEnvironment {
  private const gulp;
  private const tsc;
  private const Server;
  private const srcTSConfig;
  private const specTSConfig;

  constructor() {
    this.gulp = require('gulp');
    this.tsc = require('gulp-typescript');
    this.Server = require('karma').Server;

    this.srcTSConfig = tsc.createProject('src/tsconfig.json');
    this.specTSConfig = tsc.createProject('spec/tsconfig.json');
  }

  registerTasks() {
    let gulp = this.gulp;
  }
}

(function() {
  var gulp = new GulpEnvironment();
  gulp.registerTasks();
})();
