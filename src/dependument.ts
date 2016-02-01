export class Dependument {
  private package: string;
  private templates: string;

  constructor(options: any) {
    if (!options.path) {
      throw new Error("No path specified in options");
    }

    if (!options.path.package) {
      throw new Error("No package path specified in options");
    }

    if (!options.path.output) {
      throw new Error("No output path specified in options");
    }
  }
}
