// Implement a function that makes an element bold and allows the user of the function 
// to optionally do something else with it.

function makeBold(element, callback) {
  callback(element);
  element.style.fontWeight = 'bold';
}

let sectionElement = document.querySelector('section')

makeBold(sectionElement, function(elem) {
  elem.classList.add('highlight');
});

sectionElement.classList.contains('highlight');
// true
sectionElement.style.fontWeight;
// "bold"

// You can get the same behavior as the above solution by creating your own custom event. 
// For this further exploration exercise, create your own CustomEvent called bolded that allows 
// the user to add it as the type of event to listen to.

let sectionElement = document.querySelector('section');

function makeBold(sectionElement) {
  sectionElement.style.fontWeight = 'bold';
  let event = new CustomEvent('bolded');
  sectionElement.dispatchEvent(event);
}

sectionElement.addEventListener('bolded', (e) => {
  e.target.classList.add('highlight');
})

makeBold(sectionElement);