'use strict';

var React = require("react");

function TodosCount(Props) {
  return React.createElement("span", {
              className: "todo-count"
            }, React.createElement("strong", undefined, "2 items left"));
}

var make = TodosCount;

exports.make = make;
/* react Not a pure module */
