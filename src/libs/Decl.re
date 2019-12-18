let make = (n, options) => {
  let index = n === 1 ? 0 : 1;
  let option = Belt.List.get(options, index);

  switch (option) {
  | Some(value) => value
  | None => ""
  };
};