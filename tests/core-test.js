/* global it, describe */

var chai = require("chai");
    expect = chai.expect,
    core = require("../core/core.js");

describe("my amazing testing suite", function() {
  it("dummy test", function() {
    expect("test").to.be.a("string");
    core.logFunction("Hey there! I'm in a test!");
    expect(core.doSomething()).to.be.true;
  });
});