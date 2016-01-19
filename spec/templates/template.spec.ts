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

  describe('bindObject (alphabet bindings)', () => {
    let testCases = [
      [
        '{{dependencies}}',
        {
          dependencies: 'bind me!'
        },
        'bind me!'
      ],
      [
        '{{a}}bla{{b}}',
        {
          a: 'apple',
          b: 'melon'
        },
        'appleblamelon'
      ],
      [
        '{{animal}} are my favourite animal',
        {
          animal: 'cats'
        },
        'cats are my favourite animal'
      ]
    ];

    function should_return(index, inputTemplate, inputBinding, output) {
      it('should return "' + output + '" [test case ' + index + ']', () => {
        let tmp = new Template(inputTemplate);

        expect(tmp.bindObject(inputBinding)).toBe(output);
      });
    }

    for (let t in testCases) {
      should_return(t, testCases[t][0], testCases[t][1], testCases[t][2]);
    }
  });

  describe('bindObject (complex bindings)', () => {
    let testCases = [
      [
        '{{dependency.name}} - {{dependency.description}}',
        {
          'dependency.name': 'a',
          'dependency.description': 'b'
        },
        'a - b'
      ],
      [
        '{{a.a}}bla{{b.c}}',
        {
          'a.a': 'jj',
          'b.c': 'kk'
        },
        'jjblakk'
      ],
      [
        '{{food.name}} is my favourite food',
        {
          'food.name': 'cheese'
        },
        'cheese is my favourite food'
      ]
    ];

    function should_return(index, inputTemplate, inputBinding, output) {
      it('should return "' + output + '" [test case ' + index + ']', () => {
        let tmp = new Template(inputTemplate);

        expect(tmp.bindObject(inputBinding)).toBe(output);
      });
    }

    for (let t in testCases) {
      should_return(t, testCases[t][0], testCases[t][1], testCases[t][2]);
    }
  });
});
