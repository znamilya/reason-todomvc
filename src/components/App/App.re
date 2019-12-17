[@react.component]
let make = () => {
  <div className="todoapp">
    <header className="header">
      <h1> {React.string("todos")} </h1>
      <NewTodoInput />
    </header>
    <section className="main">
      <input className="toggle-all" id="toggle-all" type_="checkbox" />
      <label htmlFor="toggle-all" />
      <TodosList />
    </section>
    <footer className="footer">
      <TodosCount />
      <Filter />
      <button className="clear-completed">
        {React.string("Clear completed")}
      </button>
    </footer>
  </div>;
};