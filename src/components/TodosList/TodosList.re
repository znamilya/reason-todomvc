[@react.component]
let make = () => {
  <ul className="todo-list">
    <li>
      <div className="view">
        <input className="toggle" type_="checkbox" />
        <label> {React.string("one")} </label>
        <button className="destroy" />
      </div>
      <input className="edit" value="one" />
    </li>
  </ul>;
};