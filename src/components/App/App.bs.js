'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Todo$ReasonReactExamples = require("../../libs/Todo.bs.js");
var Filter$ReasonReactExamples = require("../Filter/Filter.bs.js");
var TodosList$ReasonReactExamples = require("../TodosList/TodosList.bs.js");
var TodosCount$ReasonReactExamples = require("../TodosCount/TodosCount.bs.js");
var NewTodoInput$ReasonReactExamples = require("../NewTodoInput/NewTodoInput.bs.js");
var TodosToggler$ReasonReactExamples = require("../TodosToggler/TodosToggler.bs.js");

var urlHash = (
  document.location.hash.slice(2)
);

var tmp;

switch (urlHash) {
  case "active" :
      tmp = /* Active */1;
      break;
  case "completed" :
      tmp = /* Completed */2;
      break;
  default:
    tmp = /* All */0;
}

var defaultState = /* record */[
  /* todos : [] */0,
  /* filter */tmp
];

function reducer(state, action) {
  if (typeof action === "number") {
    return /* record */[
            /* todos */Todo$ReasonReactExamples.keepActive(state[/* todos */0]),
            /* filter */state[/* filter */1]
          ];
  } else {
    switch (action.tag | 0) {
      case /* AddTodo */0 :
          return /* record */[
                  /* todos */Belt_List.add(state[/* todos */0], Todo$ReasonReactExamples.create(action[0])),
                  /* filter */state[/* filter */1]
                ];
      case /* RenameTodo */1 :
          return /* record */[
                  /* todos */Todo$ReasonReactExamples.rename(state[/* todos */0], action[0], action[1]),
                  /* filter */state[/* filter */1]
                ];
      case /* RemoveTodo */2 :
          return /* record */[
                  /* todos */Todo$ReasonReactExamples.remove(state[/* todos */0], action[0]),
                  /* filter */state[/* filter */1]
                ];
      case /* ToggleTodoCompleted */3 :
          return /* record */[
                  /* todos */Todo$ReasonReactExamples.toggleCompleted(state[/* todos */0], action[0]),
                  /* filter */state[/* filter */1]
                ];
      case /* SetTodosCompleted */4 :
          return /* record */[
                  /* todos */Todo$ReasonReactExamples.setCompleted(state[/* todos */0], action[0]),
                  /* filter */state[/* filter */1]
                ];
      case /* ChangeFilter */5 :
          return /* record */[
                  /* todos */state[/* todos */0],
                  /* filter */action[0]
                ];
      
    }
  }
}

function App(Props) {
  var match = React.useReducer(reducer, defaultState);
  var dispatch = match[1];
  var match$1 = match[0];
  var filter = match$1[/* filter */1];
  var todos = match$1[/* todos */0];
  var filteredTodos = Todo$ReasonReactExamples.keepByFilter(todos, filter);
  var todosLen = Belt_List.length(filteredTodos);
  var match$2 = todosLen > 0 || filter !== /* All */0;
  var tmp;
  if (match$2) {
    var match$3 = Todo$ReasonReactExamples.someCompleted(todos);
    tmp = React.createElement(React.Fragment, undefined, React.createElement("section", {
              className: "main"
            }, React.createElement(TodosToggler$ReasonReactExamples.make, {
                  onChange: (function (checked) {
                      return Curry._1(dispatch, /* SetTodosCompleted */Block.__(4, [checked]));
                    })
                }), React.createElement(TodosList$ReasonReactExamples.make, {
                  items: filteredTodos,
                  onItemToggleCompleted: (function (itemId) {
                      return Curry._1(dispatch, /* ToggleTodoCompleted */Block.__(3, [itemId]));
                    }),
                  onItemRename: (function (itemId, title) {
                      return Curry._1(dispatch, /* RenameTodo */Block.__(1, [
                                    itemId,
                                    title
                                  ]));
                    }),
                  onItemRemove: (function (itemId) {
                      return Curry._1(dispatch, /* RemoveTodo */Block.__(2, [itemId]));
                    })
                })), React.createElement("footer", {
              className: "footer"
            }, React.createElement(TodosCount$ReasonReactExamples.make, {
                  value: Todo$ReasonReactExamples.countActive(todos)
                }), React.createElement(Filter$ReasonReactExamples.make, {
                  value: filter,
                  onChange: (function (filter) {
                      return Curry._1(dispatch, /* ChangeFilter */Block.__(5, [filter]));
                    })
                }), match$3 ? React.createElement("button", {
                    className: "clear-completed",
                    onClick: (function (_evt) {
                        return Curry._1(dispatch, /* RemoveCompleted */0);
                      })
                  }, "Clear completed") : null));
  } else {
    tmp = null;
  }
  return React.createElement("div", {
              className: "todoapp"
            }, React.createElement("header", {
                  className: "header"
                }, React.createElement("h1", {
                      className: "title"
                    }, "todos"), React.createElement(NewTodoInput$ReasonReactExamples.make, {
                      onSubmit: (function (title) {
                          return Curry._1(dispatch, /* AddTodo */Block.__(0, [title]));
                        })
                    })), tmp);
}

var make = App;

exports.urlHash = urlHash;
exports.defaultState = defaultState;
exports.reducer = reducer;
exports.make = make;
/* urlHash Not a pure module */
