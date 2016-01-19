/// <reference path="../../typings/jasmine/jasmine.d.ts" />

import { CurlyBraceTemplate } from '../../src/templates/curlybracetemplate';

describe('CurlyBraceTemplate', () => {
  describe('getOpeningEscape', () => {
    it('should return "{{"', () => {
      let tmp = new CurlyBraceTemplate('');

      expect(tmp.getOpeningEscape()).toBe("{{");
    });
  });

  describe('getClosingEscape', () => {
    it('should return "}}"', () => {
      let tmp = new CurlyBraceTemplate('');

      expect(tmp.getClosingEscape()).toBe("}}");
    });
  });

  describe('getContents', () => {
    let testCases = ['', 'asjdaidja', 'the quick brown dog jumps over the lazy white parrot'];

    function should_return(index, output) {
      it('should return "' + output + '" [test case ' + index + ']', () => {
        let tmp = new CurlyBraceTemplate(output);

        expect(tmp.getContents()).toBe(output);
      });
    }

    for (let t in testCases) {
      should_return(t, testCases[t]);
    }
  });
})
