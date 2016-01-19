/// <reference path="../../typings/jasmine/jasmine.d.ts" />

import { CurlyBraceTemplate } from '../../src/templates/curlybracetemplate';

describe('CurlyBraceTemplate', () => {
  describe('getOpeningEscape', () => {
    it('should return "{{"', () => {
      let tmp = new CurlyBraceTemplate();

      expect(tmp.getOpeningEscape()).toBe("{{");
    });
  });

  describe('getClosingEscape', () => {
    it('should return "}}"', () => {
      let tmp = new CurlyBraceTemplate();

      expect(tmp.getClosingEscape()).toBe("}}");
    });
  });

  describe('getContents', () => {
    it('should return ""', () => {
      let tmp = new CurlyBraceTemplate();

      expect(tmp.getContents()).toBe("");
    });
  });
})
