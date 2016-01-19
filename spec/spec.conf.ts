class SpecConfiguration {
  constructor() {
    const files: Array<any> = new Array<any>();
    const MATCHER: RegExp = /.*(\.spec\.js)/i;

    Object.keys((window as any).__karma__.files).forEach(function(file) {
      if (MATCHER.test(file) || file === 'spec.utils.js') {
        // Normalize paths to RequireJS module names.
        // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
        // then do not normalize the paths
        var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
        files.push(normalizedTestModule);
      }
    });

    (require as any).config({
      // Karma serves files under /base, which is the basePath from your config file
      baseUrl: '/base',

      // dynamically load all test files
      deps: files,

      // we have to kickoff jasmine, as it is asynchronous
      callback: (window as any).__karma__.start
    });
  }
}

(function() {
  new SpecConfiguration();
})();
