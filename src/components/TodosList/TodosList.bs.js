'use strict';

var React = require("react");

function TodosList(Props) {
  return React.createElement("ul", {
              className: "todo-list"
            }, React.createElement("li", undefined, React.createElement("div", {
                      className: "view"
                    }, React.createElement("input", {
                          className: "toggle",
                          type: "checkbox"
                        }), React.createElement("label", undefined, "one"), React.createElement("button", {
                          className: "destroy"
                        })), React.createElement("input", {
                      className: "edit",
                      value: "one"
                    })));
}

var make = TodosList;

exports.make = make;
/* react Not a pure module */
