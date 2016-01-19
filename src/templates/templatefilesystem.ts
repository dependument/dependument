/// <reference path="../../typings/node/node.d.ts" />

import * as path from 'path';

export class TemplateFileSystem {
  private _baseSystem: any;

  constructor(baseSystem: any) {
    this._baseSystem = baseSystem;
  }

  getLocalTemplateInfo(): Array<any> {
    let templates = [];

    if (!this.directoryExists('template')) {
      return templates;
    }

    let files = this._baseSystem.readdirSync('template');

    for (let file of files) {
      if (this.getFileExtension(file) === 'md') {
        templates.push(file);
      }
    }

    return templates;
  }

  private directoryExists(directory: string): boolean {
    try {
      this._baseSystem.accessSync(directory, this._baseSystem.R_OK);
    } catch (err) {
      return false;
    }

    return true;
  }

  private getFileExtension(name: string): string {
    return name.substr((~-name.lastIndexOf(".") >>> 0) + 2);
  }
}
