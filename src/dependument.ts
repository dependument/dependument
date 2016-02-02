/// <reference path="../typings/node/node.d.ts" />

import * as fs from 'fs';

import { Adapter } from './adapter';

export class Dependument {
  private source: string;
  private output: string;

  private static DEPENCENCY_TEMPLATE: string = "* [{{package_name}}]({{package_url}}) ({{package_version}})\n";

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
    this.readDependencies((deps: string[][]) => {
      this.writeDependencies(deps);
    });
  }

  private readDependencies(success: (info: string[][]) => void) {
    fs.readFile(this.source, (err, data: Buffer) => {
      if (err) {
        throw err;
      }

      let json = JSON.parse(data.toString());

      let deps: string[][] = [];

      deps["dependencies"] = json["dependencies"];
      deps["devDependencies"] = json["devDependencies"];

      success(deps);
    });
  }

  private writeDependencies(deps: string[][]) {
    let output = Adapter.getFileOutput(deps);

    fs.writeFile(this.output, output, (err) => {
      if (err) throw err;
      console.log(`Output written to ${this.output}`);
    });
  }
}
