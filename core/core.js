if (typeof module !== 'undefined' && module.exports) {
  var _ = require("./underscore-min.js");
  require("./json2.min.js");
} else {
  // load requirements another way
}

// the ultimate debug function
var debuglog = function (message) {
  message = (_.isObject(message)) ? JSON.stringify(message) : message;
  console.log("message->" + message);
};

// my project namespace
var myproject = myproject || {};
(function(context) {
  "use strict";

  var that = {};

  that.doSomething = function () {
    return true;
  };

  that.logFunction = function (message) {
    debuglog(message);
  };

  // for testing purposes
  that.debuglog = debuglog;

  context.core = that;
})(myproject);

// have to export as a module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = myproject.core;
}