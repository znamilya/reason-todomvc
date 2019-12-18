'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Filter(Props) {
  var value = Props.value;
  var onChange = Props.onChange;
  var match = value === /* All */0;
  var match$1 = value === /* Active */1;
  var match$2 = value === /* Completed */2;
  return React.createElement("ul", {
              className: "filters"
            }, React.createElement("li", undefined, React.createElement("a", {
                      className: match ? "selected" : "",
                      href: "#/",
                      onClick: (function (_evt) {
                          return Curry._1(onChange, /* All */0);
                        })
                    }, "All")), React.createElement("li", undefined, React.createElement("a", {
                      className: match$1 ? "selected" : "",
                      href: "#/active",
                      onClick: (function (_evt) {
                          return Curry._1(onChange, /* Active */1);
                        })
                    }, "Active")), React.createElement("li", undefined, React.createElement("a", {
                      className: match$2 ? "selected" : "",
                      href: "#/completed",
                      onClick: (function (_evt) {
                          return Curry._1(onChange, /* Completed */2);
                        })
                    }, "Completed")));
}

var make = Filter;

exports.make = make;
/* react Not a pure module */
