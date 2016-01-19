import { IBaseFileSystem } from '../src/basefilesystem.i';

export class SpecUtils {
  static getMockFilesystem(): IBaseFileSystem {
    return {
      R_OK: undefined,
      accessSync: (path: string, mode?: number): void => {},
      readFileSync: (filename: string, options?: { flag?: string; }): Buffer => {
        return undefined;
      },
      writeFileSync: (filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void => {},
      readdirSync: (path: string): string[] => {
        return undefined;
      }
    }
  }
}
