const compress = (a, b = true) => {
	//TODO: implementați funcția
	// TODO: implement the function

	// check if the parameters have the required types

	if ((typeof a !== 'string' && !(a instanceof String)) || typeof b !== 'boolean') {
		throw new Error('InvalidType');
	}

	let newString = "";
	let letter = "";
	let digitString = "";
	let counter = 0;
	let lastChar = a[0];

	// treating case when a is an empty string

	if (a.length == 0) {
		return newString;
	}

	/*my algorithm is simple, in the situation where b is true we go through the string and count how many times 
	  the same character appears until a new character is encountered, in this time we also build the string that 
	  we will return at the end of our function

	  on the else string we apply in the first phase a logic similar to the one above except that here we check each 
	  character if it is a letter, either big or small, if we have a letter we save it in a variable and skip this iteration,
	   then we look for the next letter in the string and in all this time we build the number that tells us how many times 
	   we will write the letter found above, we reset the number and repeat the process until we finish the whole string,
	   it's an algorithm written more in C/C++ style to be honest 
	*/

	if (b == true) {
		for (let itString of a) {

			if (itString != lastChar) {
				newString = newString + lastChar + counter;
				counter = 0;
				lastChar = itString;
			}

			counter++;
		}

		newString = newString + lastChar + counter;
	}
	else {
		for (let itString of a) {

			if ((itString >= 'a' && itString <= 'z') || (itString >= 'A' && itString <= 'Z')) {
				letter = itString;
				continue;
			}
			else {
				digitString += itString;

				if (a.indexOf(itString) + 1 !== a.length && ((a[a.indexOf(itString) + 1] >= 'a' && a[a.indexOf(itString) + 1] <= 'z') ||
					(a[a.indexOf(itString) + 1] >= 'A' && a[a.indexOf(itString) + 1] <= 'Z'))) {
					let number = parseInt(digitString, 10);

					for (j = 0; j < number; j++) {
						newString += letter;
					}

					digitString = "";
				}
			}
		}
	}

	return newString;
}

module.exports = compress