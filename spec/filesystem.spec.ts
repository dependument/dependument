/// <reference path="../typings/jasmine/jasmine.d.ts" />

import { FileSystem } from '../src/filesystem/filesystem';

describe('FileSystem.canReadPackageInfo', () => {
  it('should return false if unable to access', () => {
    let fileSystem = new FileSystem({
      accessSync: (file: any, type: any) => {
        throw new Error("mock error");
      }
    });

    let canRead = fileSystem.canReadPackageInfo('');

    expect(canRead).toBe(false);
  });

  it('should return true if able to access', () => {
    let fileSystem = new FileSystem({
      accessSync: (file: any, type: any) => { }
    });

    let canRead = fileSystem.canReadPackageInfo('');

    expect(canRead).toBe(true);
  });
});

describe('FileSystem.getDependencies', () => {
  let testCases = [
    ['{"dependencies": {}}', {}],
    ['{"dependencies": {"i have one": "0.0.1"}}', {"i have one": "0.0.1"}],
    ['{"dependencies": {"ice cream": "2.3.1"}}', {"ice cream": "2.3.1"}],
  ];

  function returnCorrectDependencies(testCase, input, output) {
    it('should return the correct dependencies [test case ' + testCase + ']', () => {
      let fileSystem = new FileSystem({
        readFileSync: (file: any) => {
          return input;
        }
      });

      let dependencies = fileSystem.getDependencies('');

      expect(dependencies).toEqual(output);
    });
  }

  for (let i in testCases) {
    let testCase = testCases[i];

    returnCorrectDependencies(i, testCase[0], testCase[1]);
  }
});
