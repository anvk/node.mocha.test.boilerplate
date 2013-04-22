var chai = require("chai"),
    expect = chai.expect;
var _ = require("../core/underscore-min.js");
var core = require("../core/core.js");

describe("my simple test", function(){
  it("dummy test", function(){
    expect("test").to.be.a("string");
  });
});