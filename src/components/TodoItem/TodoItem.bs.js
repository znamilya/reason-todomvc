'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function TodoItem(Props) {
  var id = Props.id;
  var title = Props.title;
  var isCompleted = Props.isCompleted;
  var onToggleCompleted = Props.onToggleCompleted;
  var onRename = Props.onRename;
  var onRemove = Props.onRemove;
  var match = React.useState((function () {
          return false;
        }));
  var setEditMode = match[1];
  var isEditMode = match[0];
  var match$1 = React.useState((function () {
          return title;
        }));
  var setTmpValue = match$1[1];
  var tmpTitle = match$1[0];
  var modifiers = isEditMode ? "editing" : (
      isCompleted ? "completed" : ""
    );
  var className = "todo-item " + modifiers;
  var handleDoubleClick = function (param) {
    return Curry._1(setEditMode, (function (param) {
                  return true;
                }));
  };
  var handleEditInputChange = function ($$event) {
    return Curry._1(setTmpValue, $$event.target.value);
  };
  var handleEditInputKeyDown = function ($$event) {
    var match = $$event.keyCode;
    if (match !== 13) {
      if (match !== 27) {
        return /* () */0;
      } else {
        Curry._1(setEditMode, (function (param) {
                return false;
              }));
        return Curry._1(setTmpValue, (function (param) {
                      return title;
                    }));
      }
    } else {
      Curry._1(setEditMode, (function (param) {
              return false;
            }));
      return Curry._2(onRename, id, tmpTitle);
    }
  };
  var handleEditInputBlur = function (param) {
    return Curry._1(setEditMode, (function (param) {
                  return false;
                }));
  };
  return React.createElement("li", {
              className: className,
              onDoubleClick: handleDoubleClick
            }, React.createElement("div", {
                  className: "view"
                }, React.createElement("input", {
                      className: "toggle",
                      checked: isCompleted,
                      type: "checkbox",
                      onChange: (function (_evt) {
                          return Curry._1(onToggleCompleted, id);
                        })
                    }), React.createElement("label", undefined, title), React.createElement("button", {
                      className: "destroy",
                      onClick: (function (_evt) {
                          return Curry._1(onRemove, id);
                        })
                    })), isEditMode ? React.createElement("input", {
                    className: "edit",
                    autoFocus: true,
                    value: tmpTitle,
                    onKeyDown: handleEditInputKeyDown,
                    onBlur: handleEditInputBlur,
                    onChange: handleEditInputChange
                  }) : null);
}

var make = TodoItem;

exports.make = make;
/* react Not a pure module */
