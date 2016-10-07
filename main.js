// Exercise 1:

// var arr = [1, 2, 3, 4];
// var sum = 0;

// function sumArr (arr) {
// 	for (var i = 0; i < arr.length; i++){
// 		sum += arr[i];
// 	}
// 	return sum;
// }

// console.log (sumArr(arr));

// console.assert(sumArr(arr) === sum);







// Exercise 2a:




// function yell(a) {
// 	var result = a.toUpperCase();
// 	return result;
// }

// console.log(yell('what the what?!'));

// console.assert(yell(string) === 'WHAT THE WHAT?!');






// // Exercise 2b:



// function yell10(b) {
// 	var newArray = []
// 	for (var i = 0; i < 10; i++) {
// 		var result = newArray.push(b);
// 	}
// 	return newArray;
	
// }

// console.log(yell10(yell('what the what?!')));



// console.assert(yell10(versions).length === 10);






// Exercise 3:

// function max (a, b) {
// 	if (typeof a !=='number' || typeof b !== 'number'){
// 		return NaN;
// 	} else if (a > b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }

// console.log(max(5, 10));

// console.assert(typeof max('asdf', true) === 'number');
// console.assert(max(1, 2) === 2 && max(2, 1) === 2);




// Exercise 4a:



// function longest(str1, str2) {
// 		if (str1.length > str2.length) {
// 			return str1;
// 		} else {
// 			return str2;
// 		}
// }

// // console.log(longest('Dolphins', 'Puppies'));


// console.assert(longest('throw', 'computer') === 'computer');




// Exercise 4b:



// function findLongestWord(str) {
//   var strSplit = str.split(' ');
//   var longestWord = "";
//   for(var i = 0; i < strSplit.length; i++) {
//   		if (i === 0) {
// 		   longestWord = longest(strSplit[0], strSplit[1]);
// 		}   
// 		else {
// 			longestWord = longest(longestWord, strSplit[i])
// 		}	
//   }
//   return longestWord;
// }


// console.log(findLongestWord('I love playing volleyball'));


// console.assert(findLongestWord('Functions are not cool') === 'Functions');




// Exercise 5:


// var arr = ['a', 'e', 'i', 'o', 'u'];

// function isVowel(letter) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i].toLowerCase() === letter.toLowerCase()) {
// 			return true;
// 		}
// 	} return false;

// }

// console.log(isVowel('I'));

// console.assert(isVowel('b') === false);
// console.assert(isVowel('A') === true);






// Exercise 6a:


// function strReverse(reverse) {
// 	var result = '';
// 		for (var i = reverse.length - 1; i >= 0; i--) {
// 		result += reverse[i];
// 		}
// 	return result;
// }

// console.log(strReverse('Fall is awesome'));

// console.assert(strReverse('I need a drink') === 'knird a deen I');




// // Exercise 6b:

// var arr = ['will', 'the', 'real', 'slim', 'shady', 'please', 'stand', 'up']

// function reverseStrings(arrStrings) {
// 	for (var i = 0; i < arrStrings.length; i++) {
// 		arrStrings[i] = strReverse(arrStrings[i]);
// 	}	
// 	return arrStrings;
// }

// console.log(reverseStrings(arr))


// console.assert(reverseStrings(['i', 'love', 'lamp'])[1] ===  'evol');
// console.assert(reverseStrings(['i', 'love', 'lamp'])[2] === 'pmal');


// Exercise 7:


// var cats = [
// 	{
// 		gender: 'female',
// 		color: 'white',
// 		neutered: true
// 	},
// 	{
// 		gender: 'female',
// 		color: 'tan',
// 		neutered: true	
// 	},
// 	{
// 		gender: 'female',
// 		color: 'black',
// 		neutered: true	
// 	},
// 	{
// 		gender: 'male',
// 		color: 'white',
// 		neutered: true
// 	},
// 	{
// 		gender: 'male',
// 		color: 'tan',
// 		neutered: true	
// 	},
// 	{
// 		gender: 'male',
// 		color: 'black',
// 		neutered: true	
// 	},
// ];



// function adopt(gender, fixed, color) {
// 	for (var i = 0; i < cats.length; i++){
// 		if (cats[i].gender === gender && cats[i].neutered === fixed && cats[i].color === color) {
// 			return true;
// 		} else if (cats[i].color === color && (cats[i].neutered === fixed)){
// 			return true;
// 		}
// 	}
// 	return false;
// }

// console.log(adopt('male', true, 'black'));


// console.assert(adopt('male', false, 'black') === false);
// console.assert(adopt('male', true, 'grey') === false);

























