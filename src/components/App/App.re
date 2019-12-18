open Types;

type state = {
  items: list(item),
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

let defaultState = {items: [], filter: All};

let reducer = (state, action: action) => {
  switch (action) {
  | AddTodo(title) => {
      ...state,
      items: Belt.List.add(state.items, Todo.create(title)),
    }
  | RenameTodo(todoId, title) => {
      ...state,
      items: state.items->Todo.rename(todoId, title),
    }
  | RemoveTodo(todoId) => {
      ...state,
      items: state.items->Todo.remove(todoId),
    }
  | ToggleTodoCompleted(todoId) => {
      ...state,
      items: state.items->Todo.toggleCompleted(todoId),
    }
  | SetTodosCompleted(isCompleted) => {
      ...state,
      items: state.items->Todo.setCompleted(isCompleted),
    }
  | ChangeFilter(filter) => {...state, filter}
  | RemoveCompleted => {...state, items: state.items->Todo.keepActive}
  };
};

[@react.component]
let make = () => {
  let ({items, filter}, dispatch) = React.useReducer(reducer, defaultState);
  let filteredItems = Todo.filterItems(items, filter);
  let itemsLen = Belt.List.length(filteredItems);

  <div className="todoapp">
    <header className="header">
      <h1> {React.string("todos")} </h1>
      <NewTodoInput onSubmit={title => dispatch(AddTodo(title))} />
    </header>
    {itemsLen > 0 || filter !== All
       ? <>
           <section className="main">
             <TodosToggler
               onChange={checked => dispatch(SetTodosCompleted(checked))}
             />
             <TodosList
               items=filteredItems
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
             <TodosCount value={Todo.countActive(items)} />
             <Filter
               value=filter
               onChange={filter => dispatch(ChangeFilter(filter))}
             />
             {Todo.someCompleted(items)
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