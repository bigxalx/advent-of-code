const input = [
  3, 4, 1, 2, 1, 2, 5, 1, 2, 1, 5, 4, 3, 2, 5, 1, 5, 1, 2, 2, 2, 3, 4, 5, 2, 5,
  1, 3, 3, 1, 3, 4, 1, 5, 3, 2, 2, 1, 3, 2, 5, 1, 1, 4, 1, 4, 5, 1, 3, 1, 1, 5,
  3, 1, 1, 4, 2, 2, 5, 1, 5, 5, 1, 5, 4, 1, 5, 3, 5, 1, 1, 4, 1, 2, 2, 1, 1, 1,
  4, 2, 1, 3, 1, 1, 4, 5, 1, 1, 1, 1, 1, 5, 1, 1, 4, 1, 1, 1, 1, 2, 1, 4, 2, 1,
  2, 4, 1, 3, 1, 2, 3, 2, 4, 1, 1, 5, 1, 1, 1, 2, 5, 5, 1, 1, 4, 1, 2, 2, 3, 5,
  1, 4, 5, 4, 1, 3, 1, 4, 1, 4, 3, 2, 4, 3, 2, 4, 5, 1, 4, 5, 2, 1, 1, 1, 1, 1,
  3, 1, 5, 1, 3, 1, 1, 2, 1, 4, 1, 3, 1, 5, 2, 4, 2, 1, 1, 1, 2, 1, 1, 4, 1, 1,
  1, 1, 1, 5, 4, 1, 3, 3, 5, 3, 2, 5, 5, 2, 1, 5, 2, 4, 4, 1, 5, 2, 3, 1, 5, 3,
  4, 1, 5, 1, 5, 3, 1, 1, 1, 4, 4, 5, 1, 1, 1, 3, 1, 4, 5, 1, 2, 3, 1, 3, 2, 3,
  1, 3, 5, 4, 3, 1, 3, 4, 3, 1, 2, 1, 1, 3, 1, 1, 3, 1, 1, 4, 1, 2, 1, 2, 5, 1,
  1, 3, 5, 3, 3, 3, 1, 1, 1, 1, 1, 5, 3, 3, 1, 1, 3, 4, 1, 1, 4, 1, 1, 2, 4, 4,
  1, 1, 3, 1, 3, 2, 2, 1, 2, 5, 3, 3, 1, 1,
];

function numberOfFishAfterDays(days) {
  let tempInput = [...input];
  for (let i = 0; i < days; i++) {
    let afterDay = [...tempInput];
    for (const [index, x] of tempInput.entries()) {
      if (x == 0) {
        afterDay[index] = 6;
        afterDay.push(8);
      } else {
        afterDay[index] = x - 1;
      }
    }
    tempInput = [...afterDay];
    // console.log("Day " + i, tempInput.length);
  }
  return tempInput.length;
}
console.log("Part 1: ", numberOfFishAfterDays(80));

const generations = Array.from(
  Array(9),
  (v, i) => input.filter((n) => n === i).length
);

function generate() {
  const zeroes = generations.shift();
  generations[6] += zeroes;
  generations.push(zeroes);
}

for (i = 0; i < 256; i++) generate();

console.log(
  "Part 2: ",
  generations.reduce((a, b) => a + b)
);
