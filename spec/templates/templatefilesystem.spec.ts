/// <reference path="../../typings/jasmine/jasmine.d.ts" />

import { TemplateFileSystem } from '../../src/templates/templatefilesystem';

describe("TemplateFileSystem", () => {
  describe("getLocalTemplateInfo", () => {
    it("returns empty array if there is no template directory", () => {
      let fileSystem = new TemplateFileSystem({
        accessSync: (file, type) => {
          throw new Error("mock error");
        }
      });

      var localTemplates = fileSystem.getLocalTemplateInfo();

      expect(localTemplates).toEqual([]);
    });

    it("returns empty array if directory exists with no files", () => {
      let fileSystem = new TemplateFileSystem({
        accessSync: (file, type) => { },
        readdirSync: (path) => {
          return [];
        }
      });

      var localTemplates = fileSystem.getLocalTemplateInfo();

      expect(localTemplates).toEqual([]);
    });

    let fileNameCombinations = [
      ['a template.md'],
      ['a template.md', 'another template.md'],
      ['completely different template.md', 'outcome template.md']
    ];

    function returns_correct_file_names_if_files_in_directory(index: number, input: Array<string>) {
      it("returns correct file names if files in directory [test case " + index + "]", () => {
        let fileSystem = new TemplateFileSystem({
          accessSync: (file, type) => { },
          readdirSync: (path) => {
            return input;
          }
        });

        var localTemplates = fileSystem.getLocalTemplateInfo();

        expect(localTemplates).toEqual(input);
      });
    }

    for (let i in fileNameCombinations) {
      returns_correct_file_names_if_files_in_directory(i, fileNameCombinations[i]);
    }
  });
});
