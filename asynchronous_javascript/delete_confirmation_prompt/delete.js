const todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];


// class App {
//   constructor() {
//     this.targetedTodo;
//     this.renderTemplate();
//   }

//   renderTemplate() {
//     let templateHTML = document.getElementById('todos_template').innerHTML;
//     let template = Handlebars.compile(templateHTML);
//     let compiledHTML = template({ todo_items: todo_items });

//     document.body.insertAdjacentHTML('beforeend', compiledHTML);
//     this.bindFirstEvents();
//   }

//   bindFirstEvents() {
//     this.deleteButtons = document.querySelectorAll('input');

//     [...this.deleteButtons].forEach(button => {
//       button.addEventListener('click', this.handleDelete.bind(this));
//     });
//   }

//   bindSecondEvents() {
//     this.acceptButton = document.getElementById('yes');
//     this.rejectButton = document.getElementById('no');

//     this.acceptButton.addEventListener('click', this.handleAcceptReject.bind(this));
//     this.rejectButton.addEventListener('click', this.handleAcceptReject.bind(this));

//   }

//   renderPrompt(id) {
//     let templateHTML = document.getElementById('confirm-template').innerHTML;
//     let template = Handlebars.compile(templateHTML);
//     let compiledHTML = template({ id: id });

//     document.body.insertAdjacentHTML('beforeend', compiledHTML);
//     this.bindSecondEvents()
//   }

//   hidePrompt() {
//     this.dialogBox = document.getElementById('dialog-box')
//     this.dialogBox.remove();
//   }

//   handleDelete(e) {
//     e.preventDefault();
//     this.targetedTodoId = Number(e.target.closest('li').dataset.id);
//     this.renderPrompt(this.targetedTodoId);
//   }

//   handleAcceptReject(e) {
//     e.preventDefault();
//     this.todos = document.querySelectorAll('li');

//     if (e.target === this.acceptButton) {
//       [...this.todos].forEach(todo => {
//         if (todo.dataset.id === e.target.closest('div').dataset.id) {
//           todo.remove();
//         }
//       })
//       this.hidePrompt();
//     } else {
//       this.hidePrompt();
//     }
//   }
// }

// new App();

class App {
  constructor() {
    this.renderTodosTemplate();
  }

  bindFirstEvents() {
    this.deleteButtons = document.querySelectorAll('input');

    [...this.deleteButtons].forEach(button => {
      button.addEventListener('click', this.handleDelete.bind(this));
    });
  }

  bindSecondEvents() {
    this.yesButton = document.getElementById('yes');
    this.noButton = document.getElementById('no');

    this.yesButton.addEventListener('click', this.handleYes.bind(this));
    this.noButton.addEventListener('click', this.handleNo.bind(this));
  }

  renderTodosTemplate() {
    let templateHTML = document.getElementById('todos_template').innerHTML;
    let template = Handlebars.compile(templateHTML);
    let compiledHTML = template({ todo_items: todo_items });

    document.body.insertAdjacentHTML('beforeend', compiledHTML);
    this.bindFirstEvents();
  }

  renderConfirmTemplate(id) {
    let templateHTML = document.getElementById('confirm-template').innerHTML;
    let template = Handlebars.compile(templateHTML);
    let compiledHTML = template({ id: id} );

    document.body.insertAdjacentHTML('beforeend', compiledHTML);
  }

  handleDelete(e) {
    e.preventDefault();

    this.renderConfirmTemplate(e.target.dataset.id);
    this.bindSecondEvents();
  }

  handleYes(e) {
    e.preventDefault();

    [...document.querySelectorAll('li')].forEach(li => {
      if (li.querySelector('input').dataset.id === e.target.closest('div').dataset.id) {
        li.remove();
      }
    });

    document.getElementById('prompt').remove();
  }

  handleNo(e) {
    e.preventDefault();

    document.getElementById('prompt').remove();
  }
}

new App();











