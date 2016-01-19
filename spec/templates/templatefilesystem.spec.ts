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

    it("returns empty array if there is no files in directory", () => {
      let fileSystem = new TemplateFileSystem({
        accessSync: (file, type) => { }
      });

      var localTemplates = fileSystem.getLocalTemplateInfo();

      expect(localTemplates).toEqual([]);
    });
  });
});
