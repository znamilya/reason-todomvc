'use strict';

var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var TodoItem$ReasonReactExamples = require("../TodoItem/TodoItem.bs.js");

function TodosList(Props) {
  var items = Props.items;
  var onItemToggleCompleted = Props.onItemToggleCompleted;
  var onItemRename = Props.onItemRename;
  var onItemRemove = Props.onItemRemove;
  return React.createElement("ul", {
              className: "todo-list"
            }, Belt_List.toArray(Belt_List.map(items, (function (param) {
                        var id = param[/* id */0];
                        return React.createElement(TodoItem$ReasonReactExamples.make, {
                                    id: id,
                                    title: param[/* title */1],
                                    isCompleted: param[/* isCompleted */2],
                                    onToggleCompleted: onItemToggleCompleted,
                                    onRename: onItemRename,
                                    onRemove: onItemRemove,
                                    key: id.toString()
                                  });
                      }))));
}

var make = TodosList;

exports.make = make;
/* react Not a pure module */
