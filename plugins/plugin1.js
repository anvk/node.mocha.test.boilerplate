if (typeof module !== 'undefined' && module.exports) {
  core = require("../core/core.js");
} else {
  // do a freeswitch load
  include("../core/core.js");
}

// my project namespace
var myproject = myproject || {};
(function(context) {
  "use strict";

  var that = {};

  that.add = function (a, b) {
    core.debuglog(a + b);
    return a + b;
  };

  context.plugin1 = that;
})(myproject);

// have to export as a module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = myproject.plugin1;
}