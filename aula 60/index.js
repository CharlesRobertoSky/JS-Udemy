function max(x, y) {
  if (x > y) {
    return x
  }
  return y
}
let max2 = (x, y) => (x > y ? x : y)
console.log(max2(123, 34))
