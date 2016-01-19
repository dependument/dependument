export class TemplateFileSystem {
  private _baseSystem: any;

  constructor(baseSystem: any) {
    this._baseSystem = baseSystem;
  }

  getLocalTemplateInfo(): Array<any> {
    var templates = [];

    if (!this.directoryExists('template')) {
      return templates;
    }

    return this._baseSystem.readdirSync('template');
  }

  private directoryExists(directory: string): boolean {
    try {
      this._baseSystem.accessSync(directory, this._baseSystem.R_OK);
    } catch (err) {
      return false;
    }

    return true;
  }
}
