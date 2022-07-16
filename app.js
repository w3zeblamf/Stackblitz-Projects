/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

const months = [
	'January', // i = [0]
	'February', // i = [1] 
	'March', // i = [2]
	'April', // i = [3]
	'May', // i = [4]
	'June', // i = [5]
	'July', // i = [6]
	'August', // i = [7]
	'September', // i = [8]
	'October', // i = [9]
	'November', // i = [10]
	'December', // i = [11]
];

const weekdays = [
	'Sunday', // [0]
	'Monday', // [1]
	'Tuesday', // [2]
	'Wednesday', // [3]
	'Thursday', // [4]
	'Friday', // [5]
	'Saturday', // [6]
];

/*Remember that the months inside an array are cero based, it means that we count from zero [0] to eleven [11]: 
Example: 
May is moths number four [4] not five [5] inside the array
July is moths number four [6] and so on...

For weekdays is the same functionality as explained before
*/

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
//console.log(items);

let futureDate = new Date(2020, 3, 25, 11, 38, 0);
//let futureDate = new Date();
// 'new Date()' use the 24 hours format
//console.log(futureDate)

//Get current year 
const year = futureDate.getUTCFullYear()
//console.log(year);

//Get current hour 
const hours = futureDate.getHours()

//Get current minutes 
const minutes = futureDate.getMinutes()

//Get current month
let month = futureDate.getMonth();
month = months[month];
//console.log(months[month]);

//Get current date 
const date = futureDate.getDate();
//console.log(date);

//Get current day
const weekday = weekdays[futureDate.getDay()];
//console.log(weekday);


giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`

