[@react.component]
let make = () => {
  <ul className="filters">
    <li> <a href="#/" className="selected"> {React.string("All")} </a> </li>
    <li> <a href="#/active"> {React.string("Active")} </a> </li>
    <li> <a href="#/completed"> {React.string("Completed")} </a> </li>
  </ul>;
};