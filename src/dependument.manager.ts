import { IFileSystem } from './filesystem/filesystem.i';
import { ITemplateFileSystem } from './templates/templatefilesystem.i';
import { IOptions } from './options/options.i';
import * as Path from 'path';

export class DependumentManager {
  private _fileSystem : IFileSystem;
  private _templateFileSystem : ITemplateFileSystem;
  public options: IOptions;

  constructor(fileSystem: IFileSystem, templateFileSystem: ITemplateFileSystem) {
    this._fileSystem = fileSystem;
    this._templateFileSystem = templateFileSystem;

    this.options = {
      templates: {
        dependencyTemplateFile: "dependency.md",
        outputTemplateFile: "output.md"
      }
    };
  }
}
