open Types;
open Belt;

type state = {
  todos: list(item),
  filter,
};

type action =
  | AddTodo(string)
  | RenameTodo(todoId, todoTitle)
  | RemoveTodo(todoId)
  | ToggleTodoCompleted(todoId)
  | SetTodosCompleted(bool)
  | ChangeFilter(filter)
  | RemoveCompleted;

let urlHash = [%bs.raw {|
  document.location.hash.slice(2)
|}];
let defaultState = {
  todos: [],
  filter:
    switch (urlHash) {
    | "active" => Active
    | "completed" => Completed
    | _ => All
    },
};

let reducer = (state, action: action) => {
  switch (action) {
  | AddTodo(title) => {
      ...state,
      todos: List.add(state.todos, Todo.create(title)),
    }
  | RenameTodo(todoId, title) => {
      ...state,
      todos: state.todos->Todo.rename(todoId, title),
    }
  | RemoveTodo(todoId) => {
      ...state,
      todos: state.todos->Todo.remove(todoId),
    }
  | ToggleTodoCompleted(todoId) => {
      ...state,
      todos: state.todos->Todo.toggleCompleted(todoId),
    }
  | SetTodosCompleted(isCompleted) => {
      ...state,
      todos: state.todos->Todo.setCompleted(isCompleted),
    }
  | ChangeFilter(filter) => {...state, filter}
  | RemoveCompleted => {...state, todos: state.todos->Todo.keepActive}
  };
};

[@react.component]
let make = () => {
  let ({todos, filter}, dispatch) = React.useReducer(reducer, defaultState);
  let filteredTodos = todos->Todo.keepByFilter(filter);
  let todosLen = filteredTodos->List.length;

  <div className="todoapp">
    <header className="header">
      <h1> {React.string("todos")} </h1>
      <NewTodoInput onSubmit={title => dispatch(AddTodo(title))} />
    </header>
    {todosLen > 0 || filter !== All
       ? <>
           <section className="main">
             <TodosToggler
               onChange={checked => dispatch(SetTodosCompleted(checked))}
             />
             <TodosList
               items=filteredTodos
               onItemToggleCompleted={itemId =>
                 dispatch(ToggleTodoCompleted(itemId))
               }
               onItemRename={(itemId, title) =>
                 dispatch(RenameTodo(itemId, title))
               }
               onItemRemove={itemId => dispatch(RemoveTodo(itemId))}
             />
           </section>
           <footer className="footer">
             <TodosCount value={todos->Todo.countActive} />
             <Filter
               value=filter
               onChange={filter => dispatch(ChangeFilter(filter))}
             />
             {todos->Todo.someCompleted
                ? <button
                    className="clear-completed"
                    onClick={_evt => dispatch(RemoveCompleted)}>
                    {React.string("Clear completed")}
                  </button>
                : React.null}
           </footer>
         </>
       : React.null}
  </div>;
};