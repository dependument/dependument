#!/usr/bin/env node

(function() {
  "use strict";

  const fs = require('fs');
  const Path = require('path');
  const CONFIG_FILE = "package.json";
  const OUTPUT_FILE = "DEPENDENCIES.md";
  const TEMPLATES = loadTemplates(__dirname + "/templates");

  (function() {
    let file = readFile(CONFIG_FILE);

    let dependencies = getDependencies(file);

    writeDependencies(dependencies, TEMPLATES["dependency"], OUTPUT_FILE);
  })();

  function writeDependencies(dependencies, template, file) {
    let output = "";

    Object.keys(dependencies).forEach(function (key) {
      let name = key;
      let version = dependencies[key];
      let url = "https://www.npmjs.com/package/" + name;

      let line = template
                  .replace("{{package_name}}", name)
                  .replace("{{package_url}}", url)
                  .replace("{{package_version}}", version);

      output = output + line;
    });

    fs.writeFile(file, output, 'utf8', function (err) {
      console.log("Write complete");
    });
  }

  function loadTemplates(path) {
    let files = fs.readdirSync(path);
    let output = {};

    for (let f of files) {
      // Construct the full path of the file
      let fullPath = Path.join(path, f);

      // Read the contents of the file
      let contents = fs.readFileSync(fullPath);

      // Parse the name (without extension) from the file
      let fileName = Path.parse(f).name;

      // Conver the contents to utf-8 and store
      output[fileName] = contents.toString('utf8');
    }

    return output;
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
