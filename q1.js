function leaders(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log(arr[i]);
      //   first = arr[i];
    }
  }
  console.log(arr[arr.length - 1]);
}

leaders([1, 2, 3, 8, 2, 5, 4]);
