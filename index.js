// 1. Return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2); // Return the first two elements of the array
  };
  
  // 2. Return the last two drivers from an array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2); // Return the last two elements of the array
  };
  
  // 3. Array containing the two functions defined above
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // 4. Higher-order function that returns a multiplier function
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier; // Return the fare multiplied by the given multiplier
    };
  }
  
  // 5. Function to double a fare
  const fareDoubler = createFareMultiplier(2); // Create a function that doubles the fare
  
  // 6. Function to triple a fare
  const fareTripler = createFareMultiplier(3); // Create a function that triples the fare
  
  // 7. Function that selects drivers based on the passed function
  function selectDifferentDrivers(drivers, func) {
    return func(drivers); // Invoke the passed function with the drivers array
  }
  