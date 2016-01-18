/// <reference path='../typings/node/node.d.ts'/>

module.exports = (config) => {
  var configuration = ({
    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      'spec/spec.conf.js',
      {pattern: 'spec/**/*.spec.js', included: false},
      {pattern: 'src/**/*.js', included: false}
    ],

    exclude: [ ],

    preprocessors: { },

    reporters: ['spec'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true,

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-spec-reporter'
    ],

    concurrency: Infinity
  });

  if(process.env.TRAVIS) {
    configuration.browsers = ['PhantomJS'];
    configuration.plugins.push('karma-phantomjs-launcher');
  }

  config.set(configuration);
};
