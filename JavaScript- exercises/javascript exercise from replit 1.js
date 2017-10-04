function isFingerNumber(n) {
  return `<p>${n}</p>`;
}

let actual, expected;

actual = isFingerNumber(10);
expected = true;

if(actual === 10) {
  console.log('Test passed: 10');
} else {
  console.log(`Test failed: wrong number. actual=${actual}, expected=${expected}`);
}
