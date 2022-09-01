// Implement a function that converts the DOM, starting from the body, to nested arrays. Each element in the DOM is represented as 
// ["PARENT_TAG_NAME", [children]] where children are elements as well and as such follow the same format. When an element has no 
// children, it's represented as ["PARENT_TAG_NAME", []]. For instance, if the HTML doesn't have any elements inside the body, 
// the result array would be: ["BODY", []]. 
// Likewise, if the HTML only has a div element as its content, the result array would be: ["BODY", [["DIV", []]]].

function nodesToArr() {
  let body = document.body;
  let nodes = [body.tagName, getChildren(body)];
  return nodes;
}

function getChildren(node) {
  let result = [];

  for (let i = 0; i < node.children.length; i += 1) {
    result.push([[node.children[i].tagName], getChildren(node.children[i])]);
  }

  return result;
}

nodesToArr();
// ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]
