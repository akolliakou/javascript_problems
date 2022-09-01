const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];

// class App {
//   constructor() {
//     this.renderTemplate();
//   }

//   bindEvents() {
//     [...this.moreButtons].forEach(button => {
//       button.addEventListener('click', this.handleMore.bind(this))
//     });

//     [...this.lessButtons].forEach(button => {
//       button.addEventListener('click', this.handleLess.bind(this))
//     });
//   }

//   getButtons() {
//     this.moreButtons = document.querySelectorAll('#more');
//     this.lessButtons = document.querySelectorAll('#less');

//     this.bindEvents();
//   }

//   renderTemplate() {
//     let languagesTemplate = document.getElementById('languages_template').innerHTML;
//     let template = Handlebars.compile(languagesTemplate);

//     let compiledHTML = template({languages: languages});
//     document.body.insertAdjacentHTML('beforeend', compiledHTML);

//     this.getButtons();
//   }

//   handleMore(e) {
//     e.preventDefault();

//     this.hideElement(e.target, e.target.parentNode.querySelector('#short'));
//     this.showElement(e.target.nextElementSibling, e.target.parentNode.querySelector('#long'));
//   }

//   handleLess(e) {
//     e.preventDefault();

//     this.hideElement(e.target, e.target.parentNode.querySelector('#long'));
//     this.showElement(e.target.previousElementSibling, e.target.parentNode.querySelector('#short'));
//   }

//   hideElement(element1, element2) {
//     [...arguments].forEach(elem => {
//       elem.style.display = 'none';
//     })
//   }

//   showElement(element1, element2) {
//     [...arguments].forEach(elem => {
//       elem.style.display = 'block';
//     })
//   }
// }

// new App();

class App {
  constructor() {
    this.renderTemplate();
  }

  bindEvents() {
    this.moreButtons = document.querySelectorAll('.more');
    this.lessButtons = document.querySelectorAll('.less');

    [...this.moreButtons].forEach(button => {
      button.addEventListener('click', this.handleMore.bind(this));
    });

    [...this.lessButtons].forEach(button => {
      button.addEventListener('click', this.handleLess.bind(this));
    });
  }

  renderTemplate() {
    let templateHTML = document.getElementById('languages_template').innerHTML;
    let template = Handlebars.compile(templateHTML);
    let compiledHTML = template({ languages: languages });

    document.body.insertAdjacentHTML('beforeend', compiledHTML);
    this.bindEvents();
  }

  handleMore(e) {
    e.preventDefault();

    e.target.parentNode.querySelector('.long').style.display = 'block';
    e.target.parentNode.querySelector('.short').style.display = 'none';
    e.target.nextElementSibling.style.display = 'block';
    e.target.style.display = 'none';
  }

  handleLess(e) {
    e.preventDefault();

    e.target.parentNode.querySelector('.long').style.display = 'none';
    e.target.parentNode.querySelector('.short').style.display = 'block';
    e.target.previousElementSibling.style.display = 'none';
    e.target.style.display = 'block';
  }
}

new App();
















