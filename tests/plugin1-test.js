/* global it, describe */

var chai = require("chai");
    expect = chai.expect,
    plugin1 = require("../plugins/plugin1.js");

describe("my amazing testing suite for Plugin1", function() {
  it("dummy plugin test", function() {
    expect("test").to.be.a("string");
    expect(plugin1.add(2, 2)).to.equal(4);
  });
});