'use strict';

var React = require("react");
var Filter$ReasonReactExamples = require("../Filter/Filter.bs.js");
var TodosList$ReasonReactExamples = require("../TodosList/TodosList.bs.js");
var TodosCount$ReasonReactExamples = require("../TodosCount/TodosCount.bs.js");
var NewTodoInput$ReasonReactExamples = require("../NewTodoInput/NewTodoInput.bs.js");

function App(Props) {
  return React.createElement("div", {
              className: "todoapp"
            }, React.createElement("header", {
                  className: "header"
                }, React.createElement("h1", undefined, "todos"), React.createElement(NewTodoInput$ReasonReactExamples.make, { })), React.createElement("section", {
                  className: "main"
                }, React.createElement("input", {
                      className: "toggle-all",
                      id: "toggle-all",
                      type: "checkbox"
                    }), React.createElement("label", {
                      htmlFor: "toggle-all"
                    }), React.createElement(TodosList$ReasonReactExamples.make, { })), React.createElement("footer", {
                  className: "footer"
                }, React.createElement(TodosCount$ReasonReactExamples.make, { }), React.createElement(Filter$ReasonReactExamples.make, { }), React.createElement("button", {
                      className: "clear-completed"
                    }, "Clear completed")));
}

var make = App;

exports.make = make;
/* react Not a pure module */
