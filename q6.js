function maxLength(arr) {
  let x;
  let count;
  let count1 = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      x = compareString(arr[i], arr[j]);
      if (x != -1) {
        count = arr[i].length * arr[j].length;
        if (count > count1) {
          count1 = count;
        }
      }
    }
  }
  console.log(count1);
}

function compareString(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        return -1;
      }
    }
  }
}

maxLength(["a", "aa", "aaa", "aaaa"]);
