const sumAll = function(startNum, endNum) {

    // Initialize variable to store the total
  let totalSum = 0;

    // Check if the startNum variable is larger than the endNum variable, if so, swap the variables
  if (startNum > endNum) {
        
    let swapNum = startNum;
    startNum = endNum;
    endNum = swapNum;

  } else if (startNum < 0 || endNum < 0) {
    return 'ERROR';
  } else if (typeof(startNum) != 'number' || typeof(endNum) != 'number') {
		return 'ERROR';
	}
	
  // Loop that iterates from the starting number to the ending number (inclusive of)
  for (let i = startNum; i <= endNum; i++) {
  // For each iteration, add the value of the iterator to a variable to store the total
  totalSum += i;
  }
  // Return the total
  return totalSum;

};

// Do not edit below this line
module.exports = sumAll;
