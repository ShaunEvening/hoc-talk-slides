export default
`const combineFunctions = (funcOne, funcTwo) =>
  (x) => funcOne(funcTwo(x));

const totalAfterTaxesAsString =
  combineFunctions(
    dollarsAsString,
    applyHST,
  );

// returns (x) => dollarsAsString(applyHST(x))

totalAfterTaxesAsString(20.99) // => "$23.72"`;
