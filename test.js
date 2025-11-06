const assert = require('assert');
const { sum, isEven } = require('./index.js');
 
try {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(isEven(4), true);
  assert.strictEqual(isEven(5), false);
  console.log("✅ All tests passed successfully!");
} catch (err) {
  console.error("❌ Test failed:", err.message);
  process.exit(1);
}