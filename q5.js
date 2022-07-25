function anagram(str1, str2) {
  let counter = {};

  for (let item of str1) {
    counter[item] = (counter[item] || 0) + 1;
  }
  // console.log(counter);

  for (let item1 of str2) {
    if (!counter[item1]) {
      console.log(item1);
    }
    counter[item1] -= 1;
  }
}

anagram("ellab", "ellabc");
