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

var defaultState = /* record */[
  /* items : [] */0,
  /* filter : All */0
];

function reducer(state, action) {
  if (typeof action === "number") {
    return /* record */[
            /* items */Todo$ReasonReactExamples.keepActive(state[/* items */0]),
            /* filter */state[/* filter */1]
          ];
  } else {
    switch (action.tag | 0) {
      case /* AddTodo */0 :
          return /* record */[
                  /* items */Belt_List.add(state[/* items */0], Todo$ReasonReactExamples.create(action[0])),
                  /* filter */state[/* filter */1]
                ];
      case /* RenameTodo */1 :
          return /* record */[
                  /* items */Todo$ReasonReactExamples.rename(state[/* items */0], action[0], action[1]),
                  /* filter */state[/* filter */1]
                ];
      case /* RemoveTodo */2 :
          return /* record */[
                  /* items */Todo$ReasonReactExamples.remove(state[/* items */0], action[0]),
                  /* filter */state[/* filter */1]
                ];
      case /* ToggleTodoCompleted */3 :
          return /* record */[
                  /* items */Todo$ReasonReactExamples.toggleCompleted(state[/* items */0], action[0]),
                  /* filter */state[/* filter */1]
                ];
      case /* SetTodosCompleted */4 :
          return /* record */[
                  /* items */Todo$ReasonReactExamples.setCompleted(state[/* items */0], action[0]),
                  /* filter */state[/* filter */1]
                ];
      case /* ChangeFilter */5 :
          return /* record */[
                  /* items */state[/* items */0],
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
  var items = match$1[/* items */0];
  var filteredItems = Todo$ReasonReactExamples.filterItems(items, filter);
  var itemsLen = Belt_List.length(filteredItems);
  var match$2 = itemsLen > 0 || filter !== /* All */0;
  var tmp;
  if (match$2) {
    var match$3 = Todo$ReasonReactExamples.someCompleted(items);
    tmp = React.createElement(React.Fragment, undefined, React.createElement("section", {
              className: "main"
            }, React.createElement(TodosToggler$ReasonReactExamples.make, {
                  onChange: (function (checked) {
                      return Curry._1(dispatch, /* SetTodosCompleted */Block.__(4, [checked]));
                    })
                }), React.createElement(TodosList$ReasonReactExamples.make, {
                  items: filteredItems,
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
                  value: Todo$ReasonReactExamples.countActive(items)
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
                }, React.createElement("h1", undefined, "todos"), React.createElement(NewTodoInput$ReasonReactExamples.make, {
                      onSubmit: (function (title) {
                          return Curry._1(dispatch, /* AddTodo */Block.__(0, [title]));
                        })
                    })), tmp);
}

var make = App;

exports.defaultState = defaultState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
