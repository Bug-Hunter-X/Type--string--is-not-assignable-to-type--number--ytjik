function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 5); // Correct usage

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or throw an error
  }

  return numA + numB;
}

let result2 = addSafe(5, "5"); // Correct usage
let result3 = addSafe("5", "10"); // Correct usage