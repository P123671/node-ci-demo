function sum(a, b) {
  return a + b;
}
 
function isEven(n) {
  return n % 2 === 0;
}
 
// Export for tests
module.exports = { sum, isEven };
 
// Demo output
console.log("✅ Node.js app running!");