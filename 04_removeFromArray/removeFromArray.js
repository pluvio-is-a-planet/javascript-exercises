const removeFromArray = function(arrayItems = [1,2,3,4]) {

	if (arguments.length > 1) {
		// get the value of the extra arguments
		// for loop to remove a value from the array for each additional argument
		for (let i = 1; i < arguments.length; i++) {
			// Checks if the argument value exists in the given array, if not, this iteration of the loop
			// will be skipped over
			if (!arrayItems.includes(arguments[i])) {
				continue;
			} else {
			// Variable to get the index of additional argument
			let index = arrayItems.indexOf(arguments[i]);
			arrayItems.splice(index, 1);
			}
		}
	}

	return arrayItems;

};

// Do not edit below this line
module.exports = removeFromArray;
