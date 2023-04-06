const reverseString = function(string) {

	stringReversed = '';
// Loop to go through each character of given string, from the end to the start of the string
for (let i = string.length -1; i >= 0; i--) {
// Code to extract a character from each iteration of the loop,
// and append it to a string that will be returned
	stringReversed += string[i];

}

	return stringReversed;

};

// Do not edit below this line
module.exports = reverseString;
