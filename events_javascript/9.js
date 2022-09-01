let divRed = document.getElementById('red');
let divBlue = document.getElementById('blue');
let divOrange = document.getElementById('orange');
let divGreen = document.getElementById('green');

function track(callback) {
  return event => {
    if (!tracker.list().includes(event)) {
      tracker.add(event);
      callback(event);
    }
  }
}

let tracker = (() => {
  let events = [];

  return {
    elements() {
      return events.map(event => event.target);
    },
    clear() {
      events = [];
    },
    list() {
      return events.slice();
    },
    add(event) {
      events.push(event)
    },
  };
})();


divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));