[@react.component]
let make = (~value: int) => {
  <span className="todo-count">
    <strong>
      {React.string(
         string_of_int(value)
         ++ " "
         ++ Decl.make(value, ["item", "items"])
         ++ " left",
       )}
    </strong>
  </span>;
};