export class Dependument {
  private package: string;
  private templates: string;

  constructor(options: any) {
    if (!options.path) {
      throw new Error("No path specified in options");
    }
  }
}
