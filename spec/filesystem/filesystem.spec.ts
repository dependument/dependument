/// <reference path="../../typings/jasmine/jasmine.d.ts" />

import { FileSystem } from '../../src/filesystem/filesystem';
import { SpecUtils } from '../spec.utils';

describe('FileSystem', () => {
  describe('canReadPackageInfo', () => {
    it('should return false if unable to access', () => {
      let mock = SpecUtils.getMockFilesystem();
      mock.accessSync = (file, type) => {
        throw new Error("mock error");
      };

      let fileSystem = new FileSystem(mock);

      let canRead = fileSystem.canReadPackageInfo('');

      expect(canRead).toBe(false);
    });

    it('should return true if able to access', () => {
      let mock = SpecUtils.getMockFilesystem();

      let fileSystem = new FileSystem(mock);

      let canRead = fileSystem.canReadPackageInfo('');

      expect(canRead).toBe(true);
    });
  });

  describe('getDependencies', () => {
    let testCases = [
      ['{"dependencies": {}}', {}],
      ['{"dependencies": {"i have one": "0.0.1"}}', {"i have one": "0.0.1"}],
      ['{"dependencies": {"ice cream": "2.3.1"}}', {"ice cream": "2.3.1"}],
    ];

    function returnCorrectDependencies(testCase, input, output) {
      it('should return the correct dependencies [test case ' + testCase + ']', () => {
        let mock = SpecUtils.getMockFilesystem();
        mock.readFileSync = (file, options?) => {
          return input;
        };

        let fileSystem = new FileSystem(mock);

        let dependencies = fileSystem.getDependencies('');

        expect(dependencies).toEqual(output);
      });
    }

    for (let i in testCases) {
      let testCase = testCases[i];

      returnCorrectDependencies(i, testCase[0], testCase[1]);
    }
  });

  describe('getDevDependencies', () => {
    let testCases = [
      ['{"devDependencies": {}}', {}],
      ['{"devDependencies": {"i have one": "0.0.1"}}', {"i have one": "0.0.1"}],
      ['{"devDependencies": {"ice cream": "2.3.1"}}', {"ice cream": "2.3.1"}],
    ];

    function returnCorrectDevDependencies(testCase, input, output) {
      it('should return the correct dev dependencies [test case ' + testCase + ']', () => {
        let mock = SpecUtils.getMockFilesystem();
        mock.readFileSync = (file, options?) => {
          return input;
        };

        let fileSystem = new FileSystem(mock);

        let devDependencies = fileSystem.getDevDependencies('');

        expect(devDependencies).toEqual(output);
      });
    }

    for (let i in testCases) {
      let testCase = testCases[i];

      returnCorrectDevDependencies(i, testCase[0], testCase[1]);
    }
  });

  describe('writeDependencies', () => {
    it('should call writeFileSync', () => {
      let mock = SpecUtils.getMockFilesystem();

      spyOn(mock, 'writeFileSync');

      let fileSystem = new FileSystem(mock);

      fileSystem.writeDependencies({});

      expect(mock.writeFileSync).toHaveBeenCalledWith('DEPENDENCIES.md', { }, null);
    });
  });
});
