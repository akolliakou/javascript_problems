
// Write a JavaScript function that takes an element's id and returns the DOM tree of 
// the element in a two-dimensional array. The first subarray contains the element and its 
// siblings, the second contains the parent of the element and its siblings, so on and so 
// forth, all the way up to the "grandest" parent. Assume that the grandest parent is the 
// element with an id of "1". 
// Use the following HTML and test cases to test your code:

// function domTreeTracer(id) {
//   let tree = [];

//   let element = document.getElementById(String(id));
//   let parent;

//   do {
//     parent = element.parentElement
//     tree.push(parent.children)
//     element = parent;
//   } while (parent.tagName !== 'BODY');

//   return tree.map(subarr => {
//     return Array.prototype.slice.call(subarr).map(elem => {
//       return elem.tagName
//     })
//   });
// }


function domTreeTracer(id) {
  let element = document.getElementById(id);
  let tree = [];
  let parent;
  let children;

  do {
    parent = element.parentElement;
    tree.push(parent.children);
    element = element.parentElement;
  } while (parent.tagName !== 'BODY');

  return tree.map(subarr => {
    return [...subarr].map(element => {
      return element.tagName;
    })
  });
}

domTreeTracer(1);
// [["ARTICLE"]]
domTreeTracer(2);
// [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
domTreeTracer(22);
// // [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]