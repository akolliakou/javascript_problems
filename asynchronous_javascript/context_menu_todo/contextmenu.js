const todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John' }
];

// class Todos {
//   constructor() {
//     this.todos;
//     this.menu;
//     this.deleteItem;
//     this.prompt;
//     this.renderTemplate();
//   }

//   renderTemplate() {
//     let templateHTML = document.getElementById('todos_template').innerHTML;
//     let template = Handlebars.compile(templateHTML);
//     let compiledHTML = template({ todo_items: todo_items });

//     document.body.insertAdjacentHTML('beforeend', compiledHTML);
//     this.bindEvents();
//   }

//   bindEvents() {
//     this.todos = document.querySelectorAll('.todo');
//     this.promptButtons = document.querySelectorAll('input');

//     [...this.todos].forEach(todo => {
//       todo.addEventListener('contextmenu', this.handleContextmenu.bind(this));
//     });

//     [...this.promptButtons].forEach(button => {
//       button.addEventListener('click', this.handleAcceptReject.bind(this));
//     })

//     document.addEventListener('click', this.handleDocumentClick.bind(this));
//   }

//   showPrompt(id) {
//     this.prompt = document.getElementById('prompt');
//     this.prompt.dataset.id = id;
//     this.prompt.style.display = 'block';
//   }

//   hidePromptAndMenu() {
//     this.prompt.dataset.id = "";
//     this.prompt.style.display = 'none';
//     this.menu.style.display = 'none';
//   }

//   handleContextmenu(e) {
//     e.preventDefault();
//     this.menu = document.getElementById('context-menu');
//     this.deleteItem = document.getElementById('delete');
//     let targetTodoId = e.target.dataset.id;

//     this.menu.style.display = 'block';

//     this.deleteItem.addEventListener('click', (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//       this.showPrompt(targetTodoId);
//     })
//   }

//   handleDocumentClick(e) {
//     e.preventDefault();

//     this.menu.style.display = 'none';
//   }

//   handleAcceptReject(e) {
//     e.preventDefault();

//     if (e.target.id === 'yes') {
//       [...this.todos].forEach(todo => {
//         if (todo.dataset.id === e.target.closest('div').dataset.id) {
//           todo.remove();
//           this.hidePromptAndMenu();
//         }
//       })
//     } else {
//       this.hidePromptAndMenu();
//     }
//   }
// }

// new Todos();

class Todos {
  constructor() {
    this.renderTodosTemplate();
  }

  bindFirstEvents() {
    this.todos = document.querySelectorAll('.todo');

    [...this.todos].forEach(todo => {
      todo.addEventListener('contextmenu', this.handleContextMenu.bind(this));
    })
  }

  bindSecondEvents() {
    this.contextItems = document.getElementById('context-menu').querySelectorAll('li');

    [...this.contextItems].forEach(item => {
      if (item.id === 'delete') {
        item.addEventListener('click', this.handleClick.bind(this));
      }
    })
  }

  bindThirdEvents() {
    this.yesButton = document.getElementById('yes');
    this.noButton = document.getElementById('no');

    this.yesButton.addEventListener('click', this.handleAcceptReject.bind(this));
    this.noButton.addEventListener('click', this.handleAcceptReject.bind(this));
  }

  renderTodosTemplate() {
    let templateHTML = document.getElementById('todos_template').innerHTML;
    let template = Handlebars.compile(templateHTML);
    let compiledHTML = template({ todo_items: todo_items });

    document.body.insertAdjacentHTML('beforeend', compiledHTML);
    this.bindFirstEvents();
  }

  renderContextTemplate(id) {
    let templateHTML = document.getElementById('context-template').innerHTML;
    let template = Handlebars.compile(templateHTML);
    let compiledHTML = template({ id: id });

    document.body.insertAdjacentHTML('beforeend', compiledHTML);
    this.bindSecondEvents();
  }

  renderPromptTemplate(id) {
    let templateHTML = document.getElementById('prompt-template').innerHTML;
    let template = Handlebars.compile(templateHTML);
    let compiledHTML = template({ id: id });

    document.body.insertAdjacentHTML('beforeend', compiledHTML);
    this.bindThirdEvents();
  }

  handleContextMenu(e) {
    e.preventDefault();

    this.renderContextTemplate(e.target.dataset.id);
  }

  handleClick(e) {
    e.preventDefault();

    document.getElementById('context-menu').remove();
    this.renderPromptTemplate(e.target.dataset.id);
  }

  handleAcceptReject(e) {
    e.preventDefault();

    if (e.target.id === 'yes') {
      [...this.todos].forEach(todo => {
        if (todo.dataset.id === e.target.closest('div').dataset.id) {
          todo.remove();
        }
      });

      document.getElementById('prompt').remove();
    } else {
      document.getElementById('prompt').remove();
    }
  }
}

new Todos();








