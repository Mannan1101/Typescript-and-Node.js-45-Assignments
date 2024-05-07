//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want
//to try more comparisons, write more tests. Have at least one True and one False result
//for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal
// to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//*/
var city = 'Karachi';
// Test 11: Is the city equal to 'Karachi'? Expecting True.
console.log("Is city == 'Karachi'? I predict True.");
console.log(city == 'Karachi');
// Test 12: Is the city not equal to 'Lahore'? Expecting True.
console.log("Is city != 'Lahore'? I predict True.");
console.log(city != 'Lahore');
var language = 'Urdu';
// Test 13: Is the language equal to 'urdu' (case insensitive)? Expecting True.
console.log("Is language == 'urdu'? I predict True.");
console.log(language.toLowerCase() == 'urdu');
// Test 14: Is the language equal to 'English' (case insensitive)? Expecting False.
console.log("Is language == 'English'? I predict False.");
console.log(language.toLowerCase() == 'English');
var population = 220892340;
// Test 15: Is the population greater than 200 million? Expecting True.
console.log("Is population > 200 million? I predict True.");
console.log(population > 200000000);
// Test 16: Is the population less than or equal to 100 million? Expecting False.
console.log("Is population <= 100 million? I predict False.");
console.log(population <= 100000000);
var temperature2 = 32;
// Test 17: Is the temperature2 not equal to 35? Expecting True.
console.log("Is temperature2 != 35? I predict True.");
console.log(temperature2 != 35);
// Test 18: Is the temperature2 greater than or equal to 30? Expecting True.
console.log("Is temperature2 >= 30? I predict True.");
console.log(temperature2 >= 30);
var isMonsoon = true;
var isSunny = false;
// Test 19: Is it monsoon and not sunny? Expecting True.
console.log("Is it monsoon and not sunny? I predict True.");
console.log(isMonsoon && !isSunny);
// Test 20: Is it monsoon or sunny? Expecting True.
console.log("Is it monsoon or sunny? I predict True.");
console.log(isMonsoon || isSunny);
var cities = ['Karachi', 'Lahore', 'Islamabad'];
// Test 21: Is 'Lahore' in the cities array? Expecting True.
console.log("Is 'Lahore' in the cities array? I predict True.");
console.log(cities.indexOf('Lahore') !== -1);
// Test 22: Is 'Quetta' in the cities array? Expecting False.
console.log("Is 'Quetta' in the cities array? I predict False.");
console.log(cities.indexOf('Quetta') !== -1);
// Test 23: Is 'Peshawar' not in the cities array? Expecting True.
console.log("Is 'Peshawar' not in the cities array? I predict True.");
console.log(cities.indexOf('Peshawar') === -1);
// Test 24: Is 'Islamabad' not in the cities array? Expecting False.
console.log("Is 'Islamabad' not in the cities array? I predict False.");
console.log(cities.indexOf("Islamabad") === -1);
