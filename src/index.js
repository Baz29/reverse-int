module.exports = function reverse (n) {
  let str = 0;
  if (n < 0) {
  n = n * (-1);
  str = String(n).split("").reverse().join("");
 } 
 else str = String(n).split("").reverse().join("");
  return (str); 
}
