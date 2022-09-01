// Take a look at the following code:

let name = 'Bob';
const saveName = name;
name = 'Alice';
console.log(name, saveName);

// What does this code log to the console? Think about it for a moment before continuing.

// If you said that this code logged:

Alice Bob

// you would be 100% correct, and the answer should come as no surprise. 
// Now let's look at something slightly different:


const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

// What does this code log? Can you explain these results?

// If you take another look at the code, you'll notice that on line 3,
// the string referenced by the name variable calls the String.prototype.toUpperCase method. 
// How is it possible that even though this string is a primitive, it's still able to call a method?

// 1. The variable name is assigned a value of 'Bob'. 
// The variable saveName is assigned a copy of the value referenced by the variable name.
// So, both name and saveName now reference the value 'Bob'. But, this value 'Bob' is in 2
// different locations in memory. Both name and saveName are NOT pointing to the same location
// in memory. They are pointing to 2 different locations in memory where both the locations contain
// the value 'Bob'. When you reassign a new value to the variable name, the variable saveName is still
// pointing to the value 'Bob' and the changes reflected in the variable name will not be reflected in
// the variable saveName.

// 2. It logs 'Bob Bob'. This is because of the immutability of primitive values.
// In JavaScript, primitive values cannot be modified by any operation,
// be it assignment or a method. All these operations only return the resulting
// value of the operation and do not modify or change the original value. name.toUpperCase()
// simply returns 'BOB'. It does not change the original value 'Bob'.

// 3. The data types string, number and boolean contain a String, Number and Boolean
// object counterpart respectively. When we call a method or a property (such as the length property)
// on a primitive value, Javascript temporarily coerces the primitive value to it's object counterpart.
// This temporary coercion allows us to use object methods and properties on primitive values instead of
// manually creating a String, Number or a Boolean object and then calling the methods and properties on them.