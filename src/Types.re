type todoId = float;

type todoTitle = string;

type item = {
  id: todoId,
  title: todoTitle,
  isCompleted: bool,
};

type filter =
  | All
  | Active
  | Completed;