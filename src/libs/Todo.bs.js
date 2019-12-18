'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

function someCompleted(items) {
  return Belt_List.some(items, (function (item) {
                return item[/* isCompleted */2];
              }));
}

function keepCompleted(items) {
  return Belt_List.keep(items, (function (item) {
                return item[/* isCompleted */2];
              }));
}

function keepActive(items) {
  return Belt_List.keep(items, (function (item) {
                return !item[/* isCompleted */2];
              }));
}

function countActive(items) {
  return Belt_List.length(keepActive(items));
}

function countCompleted(items) {
  return Belt_List.length(Belt_List.keep(items, (function (item) {
                    return item[/* isCompleted */2];
                  })));
}

function keepByFilter(items, filter) {
  switch (filter) {
    case /* All */0 :
        return items;
    case /* Active */1 :
        return keepActive(items);
    case /* Completed */2 :
        return Belt_List.keep(items, (function (item) {
                      return item[/* isCompleted */2];
                    }));
    
  }
}

function setCompleted(items, isCompleted) {
  return Belt_List.map(items, (function (item) {
                return /* record */[
                        /* id */item[/* id */0],
                        /* title */item[/* title */1],
                        /* isCompleted */isCompleted
                      ];
              }));
}

function toggleCompleted(items, id) {
  return Belt_List.map(items, (function (item) {
                var match = item[/* id */0] === id;
                if (match) {
                  return /* record */[
                          /* id */item[/* id */0],
                          /* title */item[/* title */1],
                          /* isCompleted */!item[/* isCompleted */2]
                        ];
                } else {
                  return item;
                }
              }));
}

function create(title) {
  return /* record */[
          /* id */Math.random(),
          /* title */title,
          /* isCompleted */false
        ];
}

function rename(items, id, title) {
  return Belt_List.map(items, (function (item) {
                var match = item[/* id */0] === id;
                if (match) {
                  return /* record */[
                          /* id */item[/* id */0],
                          /* title */title,
                          /* isCompleted */item[/* isCompleted */2]
                        ];
                } else {
                  return item;
                }
              }));
}

function remove(items, id) {
  return Belt_List.keep(items, (function (item) {
                return item[/* id */0] !== id;
              }));
}

exports.someCompleted = someCompleted;
exports.keepCompleted = keepCompleted;
exports.keepActive = keepActive;
exports.countActive = countActive;
exports.countCompleted = countCompleted;
exports.keepByFilter = keepByFilter;
exports.setCompleted = setCompleted;
exports.toggleCompleted = toggleCompleted;
exports.create = create;
exports.rename = rename;
exports.remove = remove;
/* No side effect */
