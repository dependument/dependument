import { ITemplate } from 'template.i';

export class CurlyBraceTemplate implements ITemplate {
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
