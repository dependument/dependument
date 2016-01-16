#!/usr/bin/env node

"use strict";

const fs = require('fs');
const CONFIG_FILE = "package.json";

(function() {
  console.log(readFile(CONFIG_FILE));
})();

function readFile(path) {
  let contents = fs.readFileSync(path);
  let data = JSON.parse(contents);

  return data;
}
