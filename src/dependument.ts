/// <reference path="../typings/node/node.d.ts" />

import * as fs from 'fs';

export class Dependument {
  private source: string;
  private output: string;

  constructor(options: any) {
    if (!options) {
      throw new Error("No options provided");
    }

    if (!options.source) {
      throw new Error("No source path specified in options");
    }

    if (!options.output) {
      throw new Error("No output path specified in options");
    }

    this.source = options.source;
    this.output = options.output;
  }

  public process() {
    this.readInfo(() => {
      this.writeOutput();
    });
  }

  readInfo(success: () => any) {
    fs.readFile(this.source, (err, data) => {
      if (err) {
        throw err;
      }

      success();
    });
  }

  writeOutput() {
    fs.writeFile(this.output, 'dependument test writeOutput', (err) => {
      if (err) throw err;
      console.log(`Output written to ${this.output}`);
    });
  }
}
