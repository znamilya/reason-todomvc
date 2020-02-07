[@react.component]
let make =
    (~id, ~title, ~isCompleted, ~onToggleCompleted, ~onRename, ~onRemove) => {
  let (isEditMode, setEditMode) = React.useState(() => false);
  let (tmpTitle, setTmpValue) = React.useState(() => title);
  let modifiers = isEditMode ? "editing" : isCompleted ? "completed" : "";
  let className = "todo-item " ++ modifiers;

  // Handlers
  let handleDoubleClick = _ => setEditMode(_ => true);
  let handleEditInputChange = event =>
    ReactEvent.Form.target(event)##value->setTmpValue;
  let handleEditInputKeyDown = event =>
    switch (event->ReactEvent.Keyboard.keyCode) {
    | 13 =>
      setEditMode(_ => false);
      onRename(id, tmpTitle);
    | 27 =>
      setEditMode(_ => false);
      setTmpValue(_ => title);
    | _ => ()
    };
  let handleEditInputBlur = _ => setEditMode(_ => false);

  <li className onDoubleClick=handleDoubleClick>
    <div className="view">
      <input
        className="toggle"
        type_="checkbox"
        checked=isCompleted
        onChange={_evt => onToggleCompleted(id)}
      />
      <label> {React.string(title)} </label>
      <button className="destroy" onClick={_evt => onRemove(id)} />
    </div>
    {isEditMode
       ? <input
           className="edit"
           value=tmpTitle
           autoFocus=true
           onChange=handleEditInputChange
           onKeyDown=handleEditInputKeyDown
           onBlur=handleEditInputBlur
         />
       : React.null}
  </li>;
};