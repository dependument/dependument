export interface IFileSystem {
  canReadPackageInfo(directory: string): boolean;
  getDependencies(path: string): any;
}
