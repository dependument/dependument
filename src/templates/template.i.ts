export interface ITemplate {
  getOpeningEscape(): string;
  getClosingEscape(): string;
  getContents(): string;
}
