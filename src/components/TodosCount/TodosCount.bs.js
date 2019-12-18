'use strict';

var React = require("react");
var Decl$ReasonReactExamples = require("../../libs/Decl.bs.js");

function TodosCount(Props) {
  var value = Props.value;
  return React.createElement("span", {
              className: "todo-count"
            }, React.createElement("strong", undefined, String(value) + (" " + (Decl$ReasonReactExamples.make(value, /* :: */[
                          "item",
                          /* :: */[
                            "items",
                            /* [] */0
                          ]
                        ]) + " left"))));
}

var make = TodosCount;

exports.make = make;
/* react Not a pure module */
