import * as selectors from '../selectors';

describe('App', function() {
  beforeEach(function() {
    cy.visit('/');

    cy.fixture('todos.json').as('todos');
  });

  it('Render the title', function() {
    selectors
      .getTitle()
      .should('have.text', 'todos')
      .and('match', 'h1');
  });

  context('No todos', function() {
    it('should hide main and footer', function() {
      selectors.getTodoItems().should('not.exist');
      selectors.getMain().should('not.exist');
      selectors.getFooter().should('not.exist');
    });
  });

  context('Todo', function() {
    context('New todo', function() {
      it('shouldd add new todo', function() {
        // Act: Add First todo
        cy.addTodo(this.todos[0]);
        // Assert
        selectors.getTodoItems().should('have.length', 1);
        selectors.getTodoItem(0).should('have.text', this.todos[0]);

        // Act: Add second todo
        cy.addTodo(this.todos[1]);
        // Assert
        selectors.getTodoItems().should('have.length', 2);
        selectors.getTodoItem(0).should('have.text', this.todos[1]);

        // Act: Add third todo
        cy.addTodo(this.todos[2]);
        // Assert
        selectors.getTodoItems().should('have.length', 3);
        selectors.getTodoItem(0).should('have.text', this.todos[2]);
      });

      it('should trim text input', function() {
        cy.addTodo(`    ${this.todos[0]}     `);

        selectors.getTodoItem(0).should('have.text', this.todos[0]);
      });

      it('should clear input after adding', function() {
        cy.addTodo(this.todos[0]);
        selectors.getInput().should('have.value', '');
      });

      it('should update count description', function() {
        cy.addTodo(this.todos[0]);
        selectors.getTodoCount().should('have.text', '1 item left');

        cy.addTodo(this.todos[1]);
        selectors.getTodoCount().should('have.text', '2 items left');

        cy.addTodo(this.todos[2]);
        selectors.getTodoCount().should('have.text', '3 items left');
      });
    });

    context('Mark todo as completed', function() {
      beforeEach(function() {
        cy.addTodo(this.todos[0]);
      });

      it('should toggle todo checked', function() {
        cy.checkTodo(0);
        cy.todoChecked(0);

        cy.uncheckTodo(0);
        cy.todoUnchecked(0);
      });

      it('should update count description', function() {
        cy.checkTodo(0);
        selectors.getTodoCount().should('have.text', '0 items left');

        cy.uncheckTodo(0);
        selectors.getTodoCount().should('have.text', '1 item left');
      });

      it('should show "Clear completed" when completed', function() {
        cy.checkTodo(0);
        selectors.getClearCompleted().should('be.visible');

        cy.uncheckTodo(0);
        selectors.getClearCompleted().should('not.be.visible');
      });
    });

    context('Remove todo', function() {
      beforeEach(function() {
        cy.addTodo(this.todos[0]);
        cy.addTodo(this.todos[1]);
      });

      it('should remove todo from list', function() {
        selectors.getTodoItems().should('have.length', 2);
        cy.removeTodo(0);
        selectors.getTodoItems().should('have.length', 1);
        cy.removeTodo(0);
        selectors.getTodoItems().should('have.length', 0);
      });

      it('should update count description', function() {
        selectors.getTodoCount().should('have.text', '2 items left');
        cy.removeTodo(0);
        selectors.getTodoCount().should('have.text', '1 item left');
        cy.removeTodo(0);
        selectors.getTodoCount().should('not.exist');
      });
    });

    context('Rename todo', function() {
      it('should rename todo', function() {
        const newName = 'New name';

        cy.addTodo(this.todos[0]);

        selectors
          .getTodoItem(0)
          .find('label')
          .dblclick();

        selectors.getTodoItem(0).should('have.class', 'editing');

        selectors
          .getTodoItem(0)
          .find('input.edit')
          .clear()
          .type(`${newName}{enter}`);

        selectors
          .getTodoItem(0)
          .find('label')
          .should('contain', newName);
      });
    });
  });

  context('Clear completed', function() {
    it('should clear completed todos', function() {
      cy.addTodo(this.todos[0]);
      cy.addTodo(this.todos[1]);
      cy.addTodo(this.todos[2]);

      cy.checkTodo(0);
      cy.checkTodo(1);
      cy.clearCompleted();

      selectors.getTodoItems().should('have.length', 1);
      cy.todoUnchecked(0);
      selectors.getTodoItem(0).should('have.text', this.todos[0]);
    });
  });

  context('Toggle filter', function() {
    beforeEach(function() {
      cy.addTodo(this.todos[0]);
      cy.addTodo(this.todos[1]);
      cy.addTodo(this.todos[2]);
      cy.checkTodo(1);
    });

    it('should show all todos', function() {
      selectors
        .getFilters()
        .contains('All')
        .click()
        .should('have.class', 'selected');

      selectors.getTodoItems().should('have.length', 3);
      cy.hash().should('eq', '#/');
    });

    it('should show only active todos', function() {
      selectors
        .getFilters()
        .contains('Active')
        .click()
        .should('have.class', 'selected');

      selectors.getTodoItems().should('have.length', 2);
      cy.hash().should('eq', '#/active');
    });

    it('should show only completed todos', function() {
      selectors
        .getFilters()
        .contains('Completed')
        .click()
        .should('have.class', 'selected');

      selectors.getTodoItems().should('have.length', 1);
      cy.hash().should('eq', '#/completed');
    });
  });
});
