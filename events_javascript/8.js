// Implement a function named delegateEvent that delegates events to the descendant (inner) elements of a 
// parent element that match a given selector. The function takes four arguments: parentElement, selector, eventType, 
// and callback. It returns true if it was able to add an event listener and undefined if it wasn't. 
// For example, if the parentElement is section and selector is p, the function should delegate events of 
// eventType on the p element within section to the function callback; consequently, the function returns true.

// Assume that all event handlers listen during the bubbling phase.

function delegateEvent(parent, selector, eventType, callback) {
  if (!parent) {
    return undefined;
  }

  parent.addEventListener(eventType, function(e) {
    let descendants = parent.querySelectorAll(selector);
    if ([...descendants].includes(e.target)) {
      callback(e);
    }
  });

  return true;
}

const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

const element1 = document.querySelector('table');
delegateEvent(element1, 'p', 'click', callback)

const element2 = document.querySelector('main h1');
delegateEvent(element2, 'p', 'click', callback); 
delegateEvent(element2, 'h1', 'click', callback);
delegateEvent(element2, 'p', 'click', callback)

const element3 = document.querySelector('main');
delegateEvent(element3, 'h1', 'click', callback)
delegateEvent(element3, 'aside p', 'click', callback)