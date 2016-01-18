/// <reference path="../typings/jasmine/jasmine.d.ts" />

import { FileSystem } from '../src/filesystem/filesystem';

describe('FileSystem.canReadPackageInfo', function() {
  it('should return false if unable to access', function() {
    let fileSystem = new FileSystem({
      accessSync: (file: any, type: any) => {
        throw new Error("mock error");
      }
    });

    let canRead = fileSystem.canReadPackageInfo('');

    expect(canRead).toBe(false);
  });

  it('should return true if able to access', function() {
    let fileSystem = new FileSystem({
      accessSync: (file: any, type: any) => { }
    });

    let canRead = fileSystem.canReadPackageInfo('');

    expect(canRead).toBe(true);
  });
});
