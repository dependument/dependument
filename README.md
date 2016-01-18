# dependument

[![license](https://img.shields.io/badge/license-unlicense-blue.svg)](http://shields.io/)[![npm version](https://badge.fury.io/js/dependument.svg)](https://badge.fury.io/js/dependument)

Dependument is an open-source, lightweight (ironically, it has no dependencies) tool for automatically documenting the dependencies associated with your project.

## Setup
To install dependument, simply run the following command to install the [npm package](https://www.npmjs.com/package/dependument).

    $ npm install -g dependument

### Why does it need global installation?
Dependument needs to be installed globally (with the `-g` argument) so that you can run it from the command line.

## Usage
To use dependument, first navigate to your project folder with your terminal.

Then, run the following command:

    $ dependument

A markdown file called `DEPENDENCIES.md` will be generated displaying some information about your dependencies and the developer dependencies from your `package.json`.

## Licence
Dependument is (un)licensed under [The Unlicense](http://unlicense.org/). Do what you like with it.
