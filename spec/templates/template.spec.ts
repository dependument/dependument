/// <reference path="../../typings/jasmine/jasmine.d.ts" />

import { Template } from '../../src/templates/template';

describe('Template', () => {
  describe('getOpeningEscape', () => {
    it('should return "{{"', () => {
      let tmp = new Template('');

      expect(tmp.getOpeningEscape()).toBe("{{");
    });
  });

  describe('getClosingEscape', () => {
    it('should return "}}"', () => {
      let tmp = new Template('');

      expect(tmp.getClosingEscape()).toBe("}}");
    });
  });

  describe('getContents', () => {
    let testCases = ['', 'asjdaidja', 'the quick brown dog jumps over the lazy white parrot'];

    function should_return(index, output) {
      it('should return "' + output + '" [test case ' + index + ']', () => {
        let tmp = new Template(output);

        expect(tmp.getContents()).toBe(output);
      });
    }

    for (let t in testCases) {
      should_return(t, testCases[t]);
    }
  });
})
