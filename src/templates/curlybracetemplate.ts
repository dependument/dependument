import { ITemplate } from 'template.i';

export class CurlyBraceTemplate implements ITemplate {
  getOpeningEscape(): string {
    return "{{";
  }

  getClosingEscape(): string {
    return "}}";
  }

  getContents(): string {
    return "";
  }
}
