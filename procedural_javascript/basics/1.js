// The intention of the program below is to output a paragraph. 
// Copy and paste the program into a JavaScript console (e.g., from the Chrome Developer Tools), then run it. 
// Is the output what you expected? Are there any bugs/errors?

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed' +
                  'ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim' +
                  'dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum' +
                  'ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar' +
                  'diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum' +
                  'hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);

// There is a SyntaxError in assigning the paragraph to the paragraph variable.
// There are spaces at the end of line 5 following the backslash (\) character.
// The purpose of the backslash is to escape the newline character at the end of the line.
// However, the extra whitespace prevents this from happening, causing a SyntaxError to be raised.
// There are also extra spaces in the middle of some of the sentences.
// This is because the program considers the whole string to be continuous,
// so the spaces at the beginning of each line (lines 2 to 6) are interpreted as part of the string.