#!/usr/bin/env node

(function() {
  "use strict";

  const fs = require('fs');
  const Path = require('path');
  const CONFIG_FILE = "package.json";
  const OUTPUT_FILE = "DEPENDENCIES.md";
  const TEMPLATES = loadTemplates(__dirname + "/templates");

  (function() {
    if (!canReadFile(CONFIG_FILE)) {
      console.log("Unable to start dependument, unable to read package.json");
      return;
    }

    if (!canWriteFile(OUTPUT_FILE)) {
      console.log("Unable to start dependument, unable to write to " + OUTPUT_FILE);
      return;
    }

    let file = readFile(CONFIG_FILE);

    let messages = getDependenciesMessages(file);

    writeDependencies(messages, TEMPLATES["output"], OUTPUT_FILE);
  })();

  function writeDependencies(messages, template, file) {
    let tmpl = template;

    Object.keys(messages).forEach(function (key) {
      tmpl = tmpl.replace("{{" + key + "}}", messages[key]);
    });

    fs.writeFile(file, tmpl, 'utf8', function (err) {
      console.log("Write complete");
    });
  }

  function getDependenciesOutput(dependencies, template) {
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

    if (output === "") {
      return "None";
    }

    return output;
  }

  function getDependenciesMessages(file) {
    let dependencies = getFileToken(file, "dependencies");
    let devDependencies = getFileToken(file, "devDependencies");

    let dependenciesOutput = getDependenciesOutput(dependencies, TEMPLATES["dependency"]);
    let devDependenciesOutput = getDependenciesOutput(devDependencies, TEMPLATES["dependency"]);

    return {
      dependencies: dependenciesOutput,
      devDependencies: devDependenciesOutput
    };
  }

  function canReadFile(path) {
    try {
      fs.accessSync(path, fs.R_OK);
    } catch (err) {
      return false;
    }

    return true;
  }

  function canWriteFile(path) {
    try {
      fs.accessSync(path, fs.W_OK);
    } catch (err) {
      // If the error is that the file doesn't exist, then we can write
      if (err.code == "ENOENT") {
        return true;
      }

      return false;
    }

    return true;
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

  function getFileToken(file, token) {
    let part = file[token];

    if (part === undefined
      || part === null) {
        part = {};
    }

    return part;
  }

  function readFile(path) {
    let contents = fs.readFileSync(path);
    return JSON.parse(contents);
  }
})();
