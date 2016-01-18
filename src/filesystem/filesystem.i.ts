export interface IFileSystem {
  canReadPackageInfo(directory: string): boolean;
}
