[@react.component]
let make = (~onChange) => {
  <>
    <input
      className="toggle-all"
      id="toggle-all"
      type_="checkbox"
      onChange={event => onChange(event->ReactEvent.Form.target##checked)}
    />
    <label htmlFor="toggle-all" />
  </>;
};