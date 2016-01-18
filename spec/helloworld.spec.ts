/// <reference path="../typings/jasmine/jasmine.d.ts" />

import { HelloWorld } from '../src/helloworld';

describe("HelloWorld.getMessage", function() {
  it("should return 'Hello, world!'", function() {
    var hw = new HelloWorld();

    expect(hw.getMessage()).toBe("Hello, world!");
  });
});
