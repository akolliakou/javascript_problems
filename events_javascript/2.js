// Without changing the behavior of the following code, remove the call to event.stopPropagation 
// and refactor the result.

// document.querySelector('html').addEventListener('click', () => {
//   document.querySelector('#container').style = 'display: none';
// });

// document.querySelector('#container').addEventListener('click', event => {
//   event.stopPropagation();
// });

document.querySelector('html').addEventListener('click', (e) => {
  let container = document.querySelector('#container');

  if (e.target !== container && ![...container.children].includes(e.target) {
    container.style = 'display: none';
  }
});

