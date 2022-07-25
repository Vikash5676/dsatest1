function palindromePattern(length) {
  let str = "";
  for (let i = 1; i <= length; i++) {
    for (let j = i; j >= 1; j--) {
      str += `${j} `;
    }
    if (i > 1) {
      for (let j = 2; j <= i; j++) {
        str += `${j} `;
      }
    }
    str += "\n";
  }
  console.log(str);
}
palindromePattern(4);
