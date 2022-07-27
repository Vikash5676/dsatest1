function sumOfAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (
        i == 0 ||
        j == 0 ||
        i == arr.length - 1 ||
        j == arr.length - 1 ||
        i == j ||
        i + j == arr.length - 1
      ) {
        sum += arr[i][j];
        // console.log(sum);
      }
    }
  }
  console.log(sum);
}

sumOfAll([
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
]);
