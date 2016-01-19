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

  describe('getTemplate (no bindings)', () => {
    let testCases = ['', 'asjdaidja', 'the quick brown dog jumps over the lazy white parrot'];

    function should_return(index, output) {
      it('should return "' + output + '" [test case ' + index + ']', () => {
        let tmp = new Template(output);

        expect(tmp.getTemplate()).toBe(output);
      });
    }

    for (let t in testCases) {
      should_return(t, testCases[t]);
    }
  });

  describe('getTemplate (with bindings)', () => {
    let testCases = ['{{dependencies}}', 'hello, my name is {{name}}', '## {{dependencyName}}'];

    function should_return(index, output) {
      it('should return "' + output + '" [test case ' + index + ']', () => {
        let tmp = new Template(output);

        expect(tmp.getTemplate()).toBe(output);
      });
    }

    for (let t in testCases) {
      should_return(t, testCases[t]);
    }
  });
});
