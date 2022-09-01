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
    this.filterButton.addEventListener('click', this.handleFilter.bind(this));
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

  renderFiltersTemplate(filters) {
     let templateHTML = document.getElementById('filters-template').innerHTML;
     let template = Handlebars.compile(templateHTML);
     let compiledHTML = template(filters);

     document.querySelector('h1').insertAdjacentHTML('afterend', compiledHTML);
  }

  handleFilter(e) {
    e.preventDefault();

    let filteredResults = this.filtersCollection.getFilteredResults();
    document.getElementById('cars').remove();
    this.renderCarsTemplate(this.filtersCollection.getFilteredCars(filteredResults));
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

  getFilterOptions() {
    return { makes: this.makes, models: this.models, years: this.years, prices: this.prices }
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
}

let carSale = new UI;