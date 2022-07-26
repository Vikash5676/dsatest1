function targetIndex(arr, target) {
  let newarr = [];
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (target == arr[i]) newarr.push(i);
  }
  console.log(arr);
  console.log(newarr);
}

targetIndex([1, 2, 3, 4, 2, 5], 2);
