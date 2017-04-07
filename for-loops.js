for (var i = 5; i < 120; i += 10) {
	console.log("Current value is " + i);
}

console.log(" ");

for (var j = 4096; j >= 1 ; (j = j / 2)) {
	console.log("Current value is " + j);
}

console.log(" ");

var usPresidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "Willian Henry Harrison", "John Tyler", "James K. Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "Rutherford B. Hayes", "James A. Garfield", "Chester Arthur", "Grover Cleveland", "Benjamin Harrison", "Grover Cleveland", "William McKinley", "Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren G. Harding", "Calvin Coolidge", "Herbert Hoover", "Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower", "John F. Kennedy", "Lyndon B. Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan", "George Bush", "Bill Clinton", "George W. Bush", "Barack Obama", "Donald J. Trump"];

for (var k = 0; k < usPresidents.length; k += 1) {
	console.log("President #" + (k + 1) + " " + usPresidents[k])
}

console.log(" ");

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies) {
	console.log(prop);
}