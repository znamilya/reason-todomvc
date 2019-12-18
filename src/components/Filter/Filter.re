open Types;

[@react.component]
let make = (~value: filter, ~onChange) => {
  <ul className="filters">
    <li>
      <a
        href="#/"
        className={value === All ? "selected" : ""}
        onClick={_evt => onChange(All)}>
        {React.string("All")}
      </a>
    </li>
    <li>
      <a
        href="#/active"
        className={value === Active ? "selected" : ""}
        onClick={_evt => onChange(Active)}>
        {React.string("Active")}
      </a>
    </li>
    <li>
      <a
        href="#/completed"
        className={value === Completed ? "selected" : ""}
        onClick={_evt => onChange(Completed)}>
        {React.string("Completed")}
      </a>
    </li>
  </ul>;
};