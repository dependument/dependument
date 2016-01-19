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

    (function() {
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
    })();

    (function() {
      let fileNameCombinations = [
        [
          [
            'blabla.jpg',
            'a template.md'
          ],
          ['a template.md']
        ],
        [
          [
            'a template.md',
            'music.mp3',
            'another template.md',
            'document.doc'
          ],
          ['a template.md', 'another template.md']
        ],
        [
          [
            'completely different template.md',
            'no extension',
            'outcome template.md',
            '.gitignore'
          ],
          ['completely different template.md', 'outcome template.md']
        ]
      ];

      function doesnt_return_wrong_types(index: number, input: Array<string>, output: Array<string>) {
        it("doesn't return wrong file types [test case " + index + "]", () => {
          let fileSystem = new TemplateFileSystem({
            accessSync: (file, type) => { },
            readdirSync: (path) => {
              return input;
            }
          });

          var localTemplates = fileSystem.getLocalTemplateInfo();

          expect(localTemplates).toEqual(output);
        });
      }

      for (let i in fileNameCombinations) {
        doesnt_return_wrong_types(i, fileNameCombinations[i][0], fileNameCombinations[i][1]);
      }
    })();
  });
});
