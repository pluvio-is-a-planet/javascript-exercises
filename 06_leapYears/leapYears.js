const leapYears = function(year) {

	// If year is divisble by 4, or 400 it is a leap year, else if it is divisible by 100 it is not
	if (year % 100 === 0) {
		if (year % 400 === 0) {
			return true;
		} else {
			return false;
		}
	} else if (year % 4 === 0) {
		return true;
	} else {
		return false;
	}

};

// Do not edit below this line
module.exports = leapYears;
