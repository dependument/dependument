export interface IBaseFileSystem {
  R_OK: number;

  accessSync(path: string, mode?: number): void;
  readFileSync(filename: string, options?: { flag?: string; }): Buffer;
  writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
  readdirSync(path: string): string[];
}
