open Belt;
open Types;

let someCompleted = (items: list(item)) => {
  items->List.some(item => item.isCompleted);
};

let keepCompleted = (items: list(item)) =>
  items->List.keep(item => item.isCompleted);

let keepActive = (items: list(item)) =>
  items->List.keep(item => !item.isCompleted);

let countActive = (items: list(item)) => {
  items->keepActive->List.length;
};

let countCompleted = (items: list(item)) => {
  items->keepCompleted->List.length;
};

let keepByFilter = (items, filter) => {
  switch (filter) {
  | All => items
  | Active => items->keepActive
  | Completed => items->keepCompleted
  };
};

let setCompleted = (items, isCompleted) =>
  items->List.map(item => {...item, isCompleted});

let toggleCompleted = (items: list(item), id) => {
  items->List.map(item =>
    item.id === id ? {...item, isCompleted: !item.isCompleted} : item
  );
};

let create = (title): item => {
  id: Js.Math.random(),
  title,
  isCompleted: false,
};

let rename = (items: list(item), id, title) => {
  items->List.map(item => item.id === id ? {...item, title} : item);
};

let remove = (items: list(item), id) => {
  items->List.keep(item => item.id !== id);
};