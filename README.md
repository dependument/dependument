# dependument

[![Build Status](https://travis-ci.org/Jameskmonger/dependument.svg?branch=typescript)](https://travis-ci.org/Jameskmonger/dependument)
[![npm version](https://badge.fury.io/js/dependument.svg)](https://badge.fury.io/js/dependument)
[![Dependency status](https://david-dm.org/dependument/dependument/status.png)](https://david-dm.org/dependument/dependument#info=dependencies&view=table)
[![Dev Dependency Status](https://david-dm.org/dependument/dependument/dev-status.png)](https://david-dm.org/dependument/dependument#info=devDependencies&view=table)
[![license](https://img.shields.io/badge/license-unlicense-blue.svg)](http://shields.io/)

Dependument is an open-source, lightweight tool for automatically documenting the dependencies associated with your project.

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
