export interface IFileSystem {
  canReadPackageInfo(directory: string): boolean;
  getDependencies(path: string): any;
  getDevDependencies(path: string): any;
  writeDependencies(dependencies: any): any;
}
