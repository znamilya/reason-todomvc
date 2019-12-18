'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function TodosToggler(Props) {
  var onChange = Props.onChange;
  return React.createElement(React.Fragment, undefined, React.createElement("input", {
                  className: "toggle-all",
                  id: "toggle-all",
                  type: "checkbox",
                  onChange: (function ($$event) {
                      return Curry._1(onChange, $$event.target.checked);
                    })
                }), React.createElement("label", {
                  htmlFor: "toggle-all"
                }));
}

var make = TodosToggler;

exports.make = make;
/* react Not a pure module */
