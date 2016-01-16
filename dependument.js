#!/usr/bin/env node

(function() {
  "use strict";

  const fs = require('fs');
  const CONFIG_FILE = "package.json";

  console.log(readFile(CONFIG_FILE));

  function readFile(path) {
    let contents = fs.readFileSync(path);
    return JSON.parse(contents);
  }
})();
