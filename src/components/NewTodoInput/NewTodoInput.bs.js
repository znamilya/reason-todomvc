'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");

function checkIfKeyEnter($$event) {
  return $$event.keyCode === 13;
}

function NewTodoInput(Props) {
  var onSubmit = Props.onSubmit;
  var match = React.useState((function () {
          return "";
        }));
  var setValue = match[1];
  var value = match[0];
  var handleChange = function ($$event) {
    return Curry._1(setValue, $$event.target.value);
  };
  var handleKeyDown = function ($$event) {
    var finalValue = $$String.trim(value);
    var match = $$event.keyCode === 13;
    var match$1 = finalValue.length !== 0;
    if (match && match$1) {
      Curry._1(onSubmit, finalValue);
      return Curry._1(setValue, (function (param) {
                    return "";
                  }));
    } else {
      return /* () */0;
    }
  };
  return React.createElement("input", {
              className: "new-todo",
              placeholder: "What needs to be done?",
              value: value,
              onKeyDown: handleKeyDown,
              onChange: handleChange
            });
}

var make = NewTodoInput;

exports.checkIfKeyEnter = checkIfKeyEnter;
exports.make = make;
/* react Not a pure module */
