import * as selectors from '../selectors';

Cypress.Commands.add('addTodo', value => {
  selectors
    .getInput()
    .clear()
    .type(value)
    .type('{enter}');
});

Cypress.Commands.add('removeTodo', index => {
  return selectors
    .getTodoItem(index)
    .find('.destroy')
    .invoke('show')
    .click();
});

Cypress.Commands.add('checkTodo', index => {
  return selectors
    .getTodoItem(index)
    .find('.toggle')
    .check();
});

Cypress.Commands.add('uncheckTodo', index => {
  selectors
    .getTodoItem(index)
    .find('.toggle')
    .uncheck();
});

Cypress.Commands.add('todoChecked', index => {
  selectors
    .getTodoItem(index)
    .should('has.class', 'completed')
    .find('.toggle')
    .should('be.checked');
});

Cypress.Commands.add('todoUnchecked', index => {
  selectors
    .getTodoItem(index)
    .should('not.has.class', 'completed')
    .find('.toggle')
    .should('not.be.checked');
});

Cypress.Commands.add('clearCompleted', index => {
  selectors.getClearCompleted().click();
});
