export class Dependument {
  private source: string;
  private output: string;

  constructor(options: any) {
    if (!options.source) {
      throw new Error("No source path specified in options");
    }

    if (!options.output) {
      throw new Error("No output path specified in options");
    }

    this.source = source;
    this.output = output;
  }

  writeOutput() {
    fs.writeFile(this.output, 'dependument test writeOutput', (err) => {
      if (err) throw err;
      console.log(`Output written to ${this.output}`);
    });
  }
}
