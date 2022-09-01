// Write a function that will take a short line of text, and write it to the console log within a box.

// logInBox('To boldly go where no one has gone before.');
// will log on the console:


// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+
// You may assume that the output will always fit in your browser window.


function logInBox(string) {
  let stringLength = string.length;
  let dashedLine = "-".repeat(stringLength + 2);
  let spaces = " ".repeat(stringLength + 2);
  let firstAndLastLines = '+' + `${dashedLine}` + '+';
  let inBetweenLines = '|' + `${spaces}` + '|';
  let stringLine = '| ' + `${string}` + ' |'

  console.log(firstAndLastLines);
  console.log(inBetweenLines);
  console.log(stringLine);
  console.log(inBetweenLines);
  console.log(firstAndLastLines);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
