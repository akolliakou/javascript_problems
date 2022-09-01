let classifications = {
  'Classifications': ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich'],
};

let animals = {
  'Animals': ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'],
  'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle': ['Vertebrate', 'Cold-blooded'],
  'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon': ['Vertebrate', 'Cold-blooded'],
  'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
};

class Filters {
  constructor() {
    this.animalsList = document.getElementById('animals');
    this.classificationsList = document.getElementById('animal-classifications');
    this.clearButton = document.getElementById('clear');
    this.bindEvents();
  }

  bindEvents() {
    this.classificationsList.addEventListener('input', this.handleClassificationsChange.bind(this));
    this.animalsList.addEventListener('input', this.handleAnimalsChange.bind(this));
    this.clearButton.addEventListener('click', this.handleClear.bind(this));
  }

  handleClassificationsChange(e) {
    let selectedValue = this.classificationsList.value;
    let animalOptions = this.getOptions(classifications, selectedValue);
    this.populateAnimalsList(animalOptions);
  }

  handleAnimalsChange(e) {
    let selectedValue = this.animalsList.value;
    let classificationOptions = this.getOptions(animals, selectedValue);
    this.populateClassificationsList(classificationOptions);
  }

  handleClear(e) {
    e.preventDefault();
    this.reset();
  }

  getOptions(list, selectedValue) {
    return list[selectedValue];
  }

  populateClassificationsList(animalOptions) {
    this.clearList(this.classificationsList);
    animalOptions.forEach(animal => {
      let option = new Option();
      option.textContent = animal;
      this.classificationsList.appendChild(option);
    });
  }

  populateAnimalsList(classificationOptions) {
    this.clearList(this.animalsList)
    classificationOptions.forEach(classification => {
      let option = new Option();
      option.textContent = classification;
      this.animalsList.appendChild(option);
    });
  }

  clearList(list) {
    list.innerHTML = '';
  }

  reset() {
    this.clearList(this.classificationsList);
    this.clearList(this.animalsList)

    let classificationOptions = Object.keys(animals);
    let animalOptions = Object.keys(classifications);

    this.populateClassificationsList(animalOptions);
    this.populateAnimalsList(classificationOptions);
  }
}

new Filters();