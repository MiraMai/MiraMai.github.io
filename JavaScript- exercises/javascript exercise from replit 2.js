let actual, expected;

actual = makeHTML("<p>hej</p>");
expected = "<p>hej</p>";

if(actual === expected) {
  console.log('Test passed');
} else {
  console.log(`Test failed: wrong string. Actual=${actual}, expected=${expected}`);
}