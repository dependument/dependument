import { IFileSystem } from './filesystem/filesystem.i';
import * as Path from 'path';

export class DependumentManager {
  private _fileSystem : IFileSystem;

  constructor(fileSystem: IFileSystem) {
    let rootName = Path.resolve(__dirname, '../');

    this._fileSystem = fileSystem;

    console.log(this._fileSystem.getDependencies(rootName + "/package.json"));
    console.log(this._fileSystem.getDevDependencies(rootName + "/package.json"));
  }
}
