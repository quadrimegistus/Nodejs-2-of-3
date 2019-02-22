var arg1 = process.argv[2];
var arg2 = process.argv[3];

if (arg1 === arg2) {
    console.log('True');
} else {
    console.log('False');
}

console.log(arg1 % 7 === 0 && arg2 % 7 === 0);


// Function that checks if a duplicate exists in an array, strips duplicates and outputs an array of non-duplicates:
var deduper = function (numArr) {
    var newArr = [];
    for (var i = 0; i <numArr.length; i++){
        if(!newArr.includes(numArr[i])) {
          newArr.push(numArr[i]);
        }
    }
    return newArr;
  }
  
  console.log(deduper([1, 2, 2, 4, 6, 6, 8, 9, 1]));