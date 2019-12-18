let checkIfKeyEnter = event => event->ReactEvent.Keyboard.keyCode === 13;

[@react.component]
let make = (~onSubmit) => {
  let (value, setValue) = React.useState(() => "");

  // Handlers
  let handleChange = event => {
    ReactEvent.Form.target(event)##value->setValue;
  };
  let handleKeyDown = event => {
    let finalValue = value->String.trim;

    switch (event->checkIfKeyEnter, finalValue->String.length > 0) {
    // call onSubmit only if a pressed key is Enter and a value of the input is not empty
    | (true, true) =>
      onSubmit(finalValue);
      setValue(_ => "");
    | _ => ()
    };
  };

  <input
    className="new-todo"
    value
    placeholder="What needs to be done?"
    onChange=handleChange
    onKeyDown=handleKeyDown
  />;
};