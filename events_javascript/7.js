class HighLighter {
  constructor() {
    this.linkList = document.querySelector('ul');
    this.articles = document.querySelectorAll('[id*=article]')
    this.mainElement = document.querySelector('main');
    this.bindEvents();
  }

  bindEvents() {
    this.linkList.addEventListener('click', this.handleLinkClick.bind(this));
    [...this.articles].forEach(article => {
      article.addEventListener('click', this.handleArticleClick.bind(this));
    });
    document.addEventListener('click', this.handleDocumentClick.bind(this));
  }

  handleLinkClick(e) {
    e.stopPropagation();
    let articleNumber = e.target.getAttribute('href').slice(1);

    this.clearHighlight();
    document.getElementById(articleNumber).classList.add('highlight');
  }

  handleArticleClick(e) {
    e.stopPropagation();
    this.clearHighlight();
    e.target.parentNode.classList.add('highlight');
  }

  handleDocumentClick(e) {
    this.clearHighlight();

    this.mainElement.classList.add('highlight');
  }

  clearHighlight() {
    document.querySelectorAll('*').forEach(elem => elem.classList.remove('highlight'));
  }
}

new HighLighter();