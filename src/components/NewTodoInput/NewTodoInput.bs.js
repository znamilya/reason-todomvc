'use strict';

var React = require("react");

function NewTodoInput(Props) {
  return React.createElement("input", {
              className: "new-todo",
              placeholder: "What needs to be done?"
            });
}

var make = NewTodoInput;

exports.make = make;
/* react Not a pure module */
