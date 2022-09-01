// const cars = [
//   { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
//   { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
//   { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
//   { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
//   { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
//   { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
//   { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
// ];

// class Filter {
//   constructor() {
//     this.renderFilterTemplate();
//     this.bindEvents();
//   }

//   bindEvents() {
//     document.querySelector('input').addEventListener('click', this.handleFilterClick.bind(this));
//     document.getElementById('make').addEventListener('change', this.handleMakeChange.bind(this));
//   }

//   renderFilterTemplate() {
//     let makes = this.getMakes();
//     let models = this.getModels()
//     let years = this.getYears();
//     let prices = this.getPrices();

//     let templateHTML = document.getElementById('filters-template').innerHTML;
//     let template = Handlebars.compile(templateHTML);
//     let compiledHTML = template({ makes: makes, models: models, years: years, prices: prices });

//     document.querySelector('h1').insertAdjacentHTML('afterend', compiledHTML);
//   }

//   getMakes() {
//     let makes = [];

//     cars.forEach(car => {
//       for (let key in car) {
//         if (!makes.includes(car[key]) && key === 'make') {
//           makes.push(car[key]);
//         }
//       }
//     });

//     return makes;
//   }

//   getModels() {
//     let models = [];

//     cars.forEach(car => {
//       for (let key in car) {
//         if (!models.includes(car[key]) && key === 'model') {
//           models.push(car[key]);
//         }
//       }
//     });

//     return models;
//   }

//   getYears() {
//     let years = [];

//     cars.forEach(car => {
//       for (let key in car) {
//         if (!years.includes(car[key]) && key === 'year') {
//           years.push(car[key]);
//         }
//       }
//     });
//     return years;
//   }

//   getPrices() {
//     let prices = [];

//     cars.forEach(car => {
//       for (let key in car) {
//         if (!prices.includes(car[key]) && key === 'price') {
//           prices.push(car[key]);
//         }
//       }
//     });

//     return prices;
//   }

//   getFilters() {
//     let filteredCars = {};

//     let makeValue = document.getElementById('make').value;
//     let modelValue = document.getElementById('model').value;
//     let priceValue = document.getElementById('price').value;
//     let yearValue = document.getElementById ('year').value;

//     if (makeValue) { 
//       filteredCars.make = makeValue;
//     } else {
//       document.getElementById('cars').remove();
//       carSale.renderCarsTemplate();
//     }

//     if (modelValue) {
//       filteredCars.model = modelValue;
//     }

//     if (priceValue) {
//       filteredCars.price = Number(priceValue);
//     }

//     if (yearValue) {
//       filteredCars.year = Number(yearValue);
//     }

//     return filteredCars;
//   }

//   getMakesModels() {
//     let makesModels = {};

//     cars.forEach(car => {
//       if (Object.keys(makesModels).includes(car['make'])) {
//         if (!makesModels[car['make']].includes(car['model'])) {
//           makesModels[car['make']].push(car['model']);
//         }
//       } else {
//         makesModels[car['make']] = [car['model']];
//       }
//     })

//     return makesModels;
//   }

//   handleFilterClick(e) {
//     e.preventDefault();

//     let filteredCars = [];

//     let filters = this.getFilters();
//     let filterValues = Object.values(filters);

//     cars.forEach(car => {
//       if (filterValues.every(value => Object.values(car).includes(value))) {
//         filteredCars.push(car);
//       }
//     })

//     carSale.renderCarsTemplate(filteredCars);
//   }

//   handleMakeChange(e) {
//     let makesModels = this.getMakesModels();

//     let makeValue = document.getElementById('make').value;
//     [...document.getElementById('model').children].filter(option => option.value).forEach(option => option.remove());

//     if (makeValue === '') {
//       document.getElementById('select').remove();
//       this.renderFilterTemplate();
//       this.bindEvents();
//     } else {
//       makesModels[makeValue].forEach(model => {
//         let option = new Option();
//         option.value = model;
//         option.textContent = model;
//         document.getElementById('model').appendChild(option);
//       });
//     }
//   }
// }

// class Cars {
//   constructor() {
//     this.renderCarsTemplate();
//     new Filter();
//   }

//   renderCarsTemplate(filteredCars) {
//     let templateHTML = document.getElementById('cars-template').innerHTML;
//     let template = Handlebars.compile(templateHTML);
//     let compiledHTML;

//     if (filteredCars) {
//       document.getElementById('cars').remove();
//       compiledHTML = template({cars: filteredCars});
//     } else {
//       compiledHTML = template({cars: cars});
//     }

//     document.body.insertAdjacentHTML('beforeend', compiledHTML);
//   }
// }

// let carSale = new Cars();

const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

class UI {
  constructor() {
    this.filtersCollection = new Filters();
    this.renderCarsTemplate();
    this.renderFiltersTemplate(this.filtersCollection.filters);

    this.bindEvents();
  }

  bindEvents() {
    this.filterButton = document.getElementById('filter');
    this.makesFilter = document.getElementById('makes');

    this.filterButton.addEventListener('click', this.handleFilter.bind(this));
    this.makesFilter.addEventListener('change', this.handleMakesChange.bind(this));
  }

  registerPartials() {
   this.makesTemplateHTML = document.getElementById('make-options').innerHTML;
   this.modelsTemplateHTML = document.getElementById('model-options').innerHTML;
   this.pricesTemplateHTML = document.getElementById('price-options').innerHTML;
   this.yearsTemplateHTML = document.getElementById('year-options').innerHTML;

   Handlebars.registerPartial('make-options', this.makesTemplateHTML);
   Handlebars.registerPartial('model-options', this.modelsTemplateHTML );
   Handlebars.registerPartial('price-options', this.pricesTemplateHTML);
   Handlebars.registerPartial('year-options', this.yearsTemplateHTML);
  }

  renderCarsTemplate(filteredCars) {
    let templateHTML = document.getElementById('cars-template').innerHTML;
    let template = Handlebars.compile(templateHTML);
    let compiledHTML;

    if (filteredCars) {
      compiledHTML = template({ cars: filteredCars });
    } else {
      compiledHTML = template({ cars: cars });
    }

    document.body.insertAdjacentHTML('beforeend', compiledHTML)
  }

  renderFilterTemplate(filterOptions) {
    let template = Handlebars.compile(this.modelsTemplateHTML);
    let compiledHTML = template(filterOptions);

    document.getElementById('models').innerHTML = compiledHTML;
  }

  renderFiltersTemplate(filters) {
     let templateHTML = document.getElementById('filters-template').innerHTML;
     this.registerPartials();

     let template = Handlebars.compile(templateHTML);
     let compiledHTML = template(filters);

     document.querySelector('h1').insertAdjacentHTML('afterend', compiledHTML);
     this.bindEvents();
  }

  handleFilter(e) {
    e.preventDefault();

    let filteredResults = this.filtersCollection.getFilteredResults();
    document.getElementById('cars').remove();
    this.renderCarsTemplate(this.filtersCollection.getFilteredCars(filteredResults));
  }

  handleMakesChange(e) {
    if (e.target.value !== 'All') {
      let models = this.filtersCollection.getRelatedModels();
      this.renderFilterTemplate(models);
    } else {
      document.getElementById('filters').remove();
      this.renderFiltersTemplate(this.filtersCollection.filters);
    }
  }
}

class Filters {
  constructor() {
    this.makes = this.getMakes();
    this.models = this.getModels();
    this.years = this.getYears();
    this.prices = this.getPrices();
    this.filters = this.getFilterOptions();
  }

  getMakes() {
    let carMakes = [];

    cars.forEach(car => {
      if (!carMakes.includes(car.make)) {
        carMakes.push(car.make);
      }
    });

    return carMakes;
  }

  getModels() {
    let carModels = [];

    cars.forEach(car => {
      if (!carModels.includes(car.model)) {
        carModels.push(car.model);
      }
    });

    return carModels;
  }

  getYears() {
    let carPrices = [];

    cars.forEach(car => {
      if (!carPrices.includes(car.year)) {
        carPrices.push(car.year);
      }
    });

    return carPrices;
  }

  getPrices() {
    let carYears = [];

    cars.forEach(car => {
      if (!carYears.includes(car.price)) {
        carYears.push(car.price);
      }
    });

    return carYears;
  }

  getFilterOptions(options) {
    if (options) {
      return { makes: [carSale.makesFilter.value], models: options, years: this.years, prices: this.prices }
    } else {
      return { makes: this.makes, models: this.models, years: this.years, prices: this.prices }
    }
  }

  getFilteredResults() {
    let makes = document.getElementById('makes');
    let models = document.getElementById('models');
    let years = document.getElementById('years');
    let prices = document.getElementById('prices');

    let filterValues = {};

    if (makes.value !== 'All') {
      filterValues.make = makes.value;
    }

    if (models.value !== 'All') {
      filterValues.model = models.value;
    }

    if (years.value !== 'All') {
      filterValues.year = Number(years.value);
    }

    if (prices.value !== 'All') {
      filterValues.price = Number(prices.value);
    }

    return filterValues;
  }

  getFilteredCars(results) {
    return cars.filter(car => {
      return Object.keys(results).every(key => {
        return results[key] === car[key]
      });
    });
  }

  getRelatedModels() {
    let models = { models: [] };

    cars.forEach(car => {
      if(carSale.makesFilter.value === car.make) {
        if (!models.models.includes(car.model)) {
          models.models.push(car.model);
        }
      }
    });

    return models;
  }
}

let carSale = new UI;