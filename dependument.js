#!/usr/bin/env node

(function() {
  "use strict";

  const fs = require('fs');
  const CONFIG_FILE = "package.json";

  (function() {
    let file = readFile(CONFIG_FILE);

    let dependencies = getDependencies(file);

    console.log(dependencies);
  })();

  function getDependencies(file) {
    let dependencies = file.dependencies;

    if (dependencies === undefined
      || dependencies === null) {
        dependencies = {};
    }

    return dependencies;
  }

  function readFile(path) {
    let contents = fs.readFileSync(path);
    return JSON.parse(contents);
  }
})();
