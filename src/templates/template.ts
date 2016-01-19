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

  getTemplate(): string {
    return this._contents;
  }

  bindObject(object: any): string {
    let output: string = this.getTemplate();

    for (let key in object) {
      let tag = this.getTag(key);

      output = output.replace(tag, object[key]);
    }

    return output;
  }

  private getTag(key: string): string {
    return this.getOpeningEscape()
      + key
      + this.getClosingEscape();
  }
}
