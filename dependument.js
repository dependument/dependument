#!/usr/bin/env node

(function() {
  "use strict";

  const fs = require('fs');
  const CONFIG_FILE = "package.json";
  const templates = loadTemplates(__dirname + "/templates");

  (function() {
    let file = readFile(CONFIG_FILE);

    let dependencies = getDependencies(file);
  })();

  function loadTemplates(path) {
    let files = fs.readdirSync(path);
    let output = {};

    for (let f of files) {
      console.log(f);
    }
  }

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
