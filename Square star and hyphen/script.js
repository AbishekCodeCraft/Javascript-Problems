var n = 5;
var res = "";
for (i = 1; i <= n; i++) {
  for (j = 1; j <= 2 * n; j++) {
    if (j <= (2 * n) / 2) {
      res = res + "*";
    } else {
      res = res + "-";
    }
  }
  res = res + "\n";
}

console.log(res);
