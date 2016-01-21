import { IFileSystem } from './filesystem/filesystem.i';
import { ITemplateFileSystem } from './templates/templatefilesystem.i';
import * as Path from 'path';

export class DependumentManager {
  private _fileSystem : IFileSystem;
  private _templateFileSystem : ITemplateFileSystem;

  constructor(fileSystem: IFileSystem, templateFileSystem: ITemplateFileSystem) {
    this._fileSystem = fileSystem;
    this._templateFileSystem = templateFileSystem;
  }
}
