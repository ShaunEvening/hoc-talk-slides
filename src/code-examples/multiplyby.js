export default
`const multiplyby = (multiplier) =>
  (number) => number * multiplier;


const applyHST = multiplyby(1.13);

// returns (x) => x * 1.13

applyHST(20.99) // returns 23.7187`;
