open Types;

[@react.component]
let make =
    (
      ~items: list(item),
      ~onItemToggleCompleted,
      ~onItemRename,
      ~onItemRemove,
    ) => {
  <ul className="todo-list">
    {items
     ->Belt.List.map(({id, title, isCompleted}) =>
         <TodoItem
           id
           title
           isCompleted
           onToggleCompleted=onItemToggleCompleted
           onRename=onItemRename
           onRemove=onItemRemove
           key={Js.Float.toString(id)}
         />
       )
     ->Belt.List.toArray
     ->ReasonReact.array}
  </ul>;
};