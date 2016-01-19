/// <reference path='../typings/node/node.d.ts'/>

module.exports = (config) => {
  var configuration = ({
    basePath: '../',

    frameworks: ['jasmine', 'requirejs'],

    files: [
      'spec/spec.conf.js',
      {pattern: 'spec/**/*.spec.js', included: false},
      {pattern: 'src/**/*.js', included: false}
    ],

    exclude: [ ],

    preprocessors: {
      'src/**/*.js': ['coverage'],
    },

    reporters: ['spec', 'coverage'],

    coverageReporter: {
		  reporters: [
        {type: 'lcov'},
        {type: 'text-summary'}
      ],
		  dir: 'coverage/'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true,

    plugins: [
      'karma-jasmine',
      'karma-requirejs',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-coverage'
    ],

    concurrency: Infinity
  });

  if(process.env.TRAVIS) {
    configuration.browsers = ['PhantomJS'];
    configuration.reporters.push('coveralls');
    configuration.plugins.push('karma-phantomjs-launcher');
    configuration.plugins.push('karma-coveralls');
  }

  config.set(configuration);
};
