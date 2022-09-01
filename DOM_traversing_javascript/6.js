// Write a function that takes two element ids as arguments and swaps the positions of the 
// elements represented by the ids. The function returns true for valid swaps and undefined 
// for invalid. To put the focus on the node swapping functionality, you can assume that 
//   nodes will have a value for the id attribute and two arguments will always be provided.
//   Use the following HTML and sample codes to test your output:

function nodeSwap(id1, id2) {
  let elem1 = document.getElementById(id1);
  let elem2 = document.getElementById(id2);

  if (!elem1 || !elem2 || elem1.contains(elem2) || elem2.contains(elem1)) {
    return undefined;
  }

  let clone1 = elem1.cloneNode(true);
  let clone2 = elem2.cloneNode(true);

  elem1.replaceWith(clone2);
  elem2.replaceWith(clone1);

  return true;
}

nodeSwap(1, 20);
nodeSwap(1, 4);
nodeSwap(9, 3);
nodeSwap(1, 2);
nodeSwap(3, 1);
nodeSwap(7, 9);
