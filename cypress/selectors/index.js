export const getTitle = () => {
  return cy.get('.title');
};

export const getMain = () => {
  return cy.get('.main');
};

export const getFooter = () => {
  return cy.get('.footer');
};

export const getInput = () => {
  return cy.get('.new-todo');
};

export const getTodoCount = () => {
  return cy.get('.todo-count');
};

export const getTodoItems = () => {
  return cy.get('.todo-item');
};

export const getTodoItem = index => {
  return getTodoItems().then($todoItems => {
    return $todoItems.get(index);
  });
};

export const getClearCompleted = () => {
  return cy.get('.clear-completed');
};

export const getFilters = () => {
  return cy.get('.filters');
};
