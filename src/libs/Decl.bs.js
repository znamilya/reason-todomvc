'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

function make(n, options) {
  var match = n === 1;
  var index = match ? 0 : 1;
  var option = Belt_List.get(options, index);
  if (option !== undefined) {
    return option;
  } else {
    return "";
  }
}

exports.make = make;
/* No side effect */
