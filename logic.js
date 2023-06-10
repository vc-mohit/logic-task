// Write a function that takes a string as input and returns the characters in the string in alphabetical order.
function sortedAlphabeticalOrder(str) {
  str = str.split(""); // Convert to array for comparision
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i].toLowerCase() > str[j].toLowerCase()) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
    }
  }
  return console.log(str.join(""));
}

// Write a function that takes an array of strings and returns the longest string in the array.
function longestStringInArray(stringArray) {
  let longString = "";
  for (let value of stringArray) {
    if (value.length > longString.length) {
      longString = value;
    }
  }
  return console.log(longString);
}

// Given an array of numbers, write a function to find the sum of all the numbers that are divisible by 3 or 5.
function sumDivisibleByThreeOrFive(numberArray) {
  // Below function return the sum of all the numbers which are divisible by 3 OR 5.
  // OR
  // Below function return the sum of all the numbers if the sum is divisible by 3 OR 5.
  let sum = 0;
  for (let value of numberArray) {
    sum = sum + value;
  }
  if (sum % 3 == 0 || sum % 5 == 0) {
    return console.log("Divisible by 3 OR 5: ", sum);
  }
  return console.log("Not divisible by 3 OR 5: ", sum);

  // // Below function returns the sum of all the value which are divisible by 3 OR 5.
  // let values = [];
  // for (let value of numberArray) {
  //   if (value % 3 == 0 || value % 5 == 0) {
  //     sum += value;
  //     values.push(value);
  //   }
  // }
  // return console.log(values.join(" + ") + " =", sum);
}

// Write a function that takes an array of strings and returns a new array with only the unique strings (removing duplicates).
function removeDuplicatesFromArray(stringArray) {
  let tempArr = [];
  for (let i = 0; i < stringArray.length; i++) {
    let exists = false;
    for (let j = 0; j < tempArr.length; j++) {
      if (stringArray[i] === stringArray[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      tempArr.push(stringArray[i]);
    }
  }
  return console.log(tempArr);
}

// Given an array of strings, write a function to sort the strings based on their length, from shortest to longest.
function sortArrayInAscendingOrder(stringArray) {
  let temp;
  for (let i = 0; i < stringArray.length; i++) {
    for (let j = i + 1; j < stringArray.length; j++) {
      if (stringArray[i] > stringArray[j]) {
        temp = stringArray[i];
        stringArray[i] = stringArray[j];
        stringArray[j] = temp;
      }
    }
  }
  return console.log(stringArray);
}

// Write a function that takes an array of numbers and returns the second smallest number in the array.
function secondSmallestNumber(numberArray) {
  let temp;
  for (let i = 0; i < numberArray.length; i++) {
    for (let j = i + 1; j < numberArray.length; j++) {
      if (numberArray[i] > numberArray[j]) {
        temp = numberArray[i];
        numberArray[i] = numberArray[j];
        numberArray[j] = temp;
      }
    }
  }
  return console.log(numberArray[1]);
}

module.exports = {
  sortedAlphabeticalOrder,
  longestStringInArray,
  sumDivisibleByThreeOrFive,
  removeDuplicatesFromArray,
  sortArrayInAscendingOrder,
  secondSmallestNumber,
};
