// Write code that returns the number of direct and indirect child nodes for a 
// given parent node as an array.

// // sample output
// > childNodes(1);
// = [9, 12]
// > childNodes(4);
// = [3, 1]
// > childNodes(9);
// = [1, 1]

function childNodes(id) {
  let node = document.getElementById(id);
  let directChildren = node.childNodes.length;
  let totalChildren = 0;

  getIndirectChildren(node, function(node) {
    totalChildren += node.childNodes.length;
  });

  return [directChildren, totalChildren - directChildren]
}

function getIndirectChildren(node, callback) {
  callback(node);

  for (let i = 0; i < node.childNodes.length; i += 1) {
    getIndirectChildren(node.childNodes[i], callback);
  }
}

childNodes(1); // [9, 12]
childNodes(4); // [3, 1]