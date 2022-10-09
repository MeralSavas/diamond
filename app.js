function starDraw(n) {
  let starts = "";
  // Upside pyramid
  // upside diamond
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
      starts += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        starts += "*";
      } else {
        starts += " ";
      }
    }
    starts += "\n";
  }
  // downside diamond
  for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      starts += " ";
    }
    // printing star
    for (let k = (n - i) * 2 - 1; k >= 1; k--) {
      if (k === 1 || k === (n - i) * 2 - 1) {
        starts += "*";
      } else {
        starts += " ";
      }
    }
    starts += "\n";
  }
  document.getElementById("starString").innerHTML = starts;
  // console.log(starts);
}
