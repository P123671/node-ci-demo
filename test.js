const assert = require('assert');
const { greet, add } = require('./index.js');
 
try {
  assert.strictEqual(greet("Thiago"), "Hello, Thiago!");
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
 
  console.log("✅ All tests passed successfully!");
} catch (err) {
  console.error("❌ Test failed:", err.message);
  process.exit(1);
}