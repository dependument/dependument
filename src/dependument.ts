export class Dependument {
  private package: string;
  private templates: string;

  constructor(options: any) {
    if (!options.source) {
      throw new Error("No source path specified in options");
    }

    if (!options.output) {
      throw new Error("No output path specified in options");
    }
  }
}
