// Write a function that colors a specific generation of the DOM tree. 
// A generation is a set of elements that are on the same level of indentation. 
// We'll be using a "styled" HTML for this exercise to better visualize the generations. 
// You may use the .generation-color class to color the specific generation. 
// You can assume that only non-negative integers will be provided as arguments. 
// Following are some sample output to help you test your code:

function colorGeneration(id) {
  let object = {};

  getChildren(document.body.firstElementChild, function(node) {
    let steps = 1;
    let currentNode = node;

    while (currentNode.parentElement.tagName !== 'BODY') {
      currentNode = currentNode.parentElement;
      steps += 1;
    }

    object[node.id] = steps;
  });

  for (let key in object) {
    if (object[key] === id) {
      document.getElementById(key).classList.add('generation-color')
    }
  }
}

function getChildren(node, callback) {
  callback(node);

  for (let i = 0; i < node.children.length; i += 1) {
    getChildren(node.children[i], callback)
  }
}

colorGeneration(1);
colorGeneration(4);
colorGeneration(7);
colorGeneration(8);
colorGeneration(3);
colorGeneration(0);
