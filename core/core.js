
// node check function
var isNode = function () {
  return (typeof module !== 'undefined' && module.exports);
};

if (!isNode()) {
  // do load of underscore using other stuff
} else {
  // load underscore here ?
}

// the ultimate debug function
var debug = function (message) {
  message = (_.isObject(message)) ? JSON.stringify(message) : message;
  console.log(message);
};

// my project namespace
var myproject = myproject || {};
(function(context) {

  context.logFunction = function () {
    debug();
  };

  context.logFunction("where is underscore?");
})(myproject);