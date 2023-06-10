const express = require("express");
const {
  sortedAlphabeticalOrder,
  longestStringInArray,
  sumDivisibleByThreeOrFive,
  removeDuplicatesFromArray,
  sortArrayInAscendingOrder,
  secondSmallestNumber,
} = require("./logic");
const app = express();

sortedAlphabeticalOrder("Mohit");
longestStringInArray(["string", "long string", "longest string"]);
sumDivisibleByThreeOrFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
removeDuplicatesFromArray(["name", "prename", "middlename", "lastname", "name"]);
sortArrayInAscendingOrder(["abc", "def", "ghi", "abc", "jkl"]);
secondSmallestNumber([1, 2, 3, 4, 5, 6, 9, 8, 7, 0]);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
