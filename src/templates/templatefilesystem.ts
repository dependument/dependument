/// <reference path="../../typings/node/node.d.ts" />

import * as path from 'path';
import { IBaseFileSystem } from '../basefilesystem.i';
import { ITemplateFileSystem } from './templatefilesystem.i';

export class TemplateFileSystem implements ITemplateFileSystem {
  private _baseSystem: IBaseFileSystem;

  constructor(baseSystem: IBaseFileSystem) {
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
