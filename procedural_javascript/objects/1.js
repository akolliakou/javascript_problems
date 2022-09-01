// Identify the bug in the following code. 

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

// The expression myObject[a] raises a ReferenceError. When using bracket notation, we have to
// to use a string that references the property name(key). The expression myObject[a] 
// raises a ReferenceError because JavaScript cannot find the value of the variable a, 
// since it has not been declared.