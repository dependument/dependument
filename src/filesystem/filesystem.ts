import { IFileSystem } from './filesystem.i';

export class FileSystem implements IFileSystem {
  private _baseSystem: any;

  constructor(baseSystem: any) {
    this._baseSystem = baseSystem;
  }

  canReadPackageInfo(directory: string): boolean {
    try {
      this._baseSystem.accessSync(directory + '/package.json', this._baseSystem.R_OK);
    } catch (err) {
      return false;
    }

    return true;
  }

  getDependencies(path: string): any {
    let contents = this._baseSystem.readFileSync(path);
    return JSON.parse(contents).dependencies;
  }
}
