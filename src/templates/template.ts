export class Template {
  private _contents: string;

  constructor(contents: string) {
    this._contents = contents;
  }

  getOpeningEscape(): string {
    return "{{";
  }

  getClosingEscape(): string {
    return "}}";
  }

  getContents(): string {
    return this._contents;
  }
}
