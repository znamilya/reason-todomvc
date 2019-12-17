'use strict';

var React = require("react");

function Filter(Props) {
  return React.createElement("ul", {
              className: "filters"
            }, React.createElement("li", undefined, React.createElement("a", {
                      className: "selected",
                      href: "#/"
                    }, "All")), React.createElement("li", undefined, React.createElement("a", {
                      href: "#/active"
                    }, "Active")), React.createElement("li", undefined, React.createElement("a", {
                      href: "#/completed"
                    }, "Completed")));
}

var make = Filter;

exports.make = make;
/* react Not a pure module */
