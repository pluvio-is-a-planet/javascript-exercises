const convertToCelsius = function(tempFahrenheit) {
  return parseFloat(((tempFahrenheit - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(tempCelsius) {
  return parseFloat(((tempCelsius * 9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
