// my code below this line
function validatorName(name) {
  return name
}

console.log(validatorName("A. Kesya")) // true
console.log(validatorName("A. K. Putri")) // true
console.log(validatorName("Angelina K. Putri")) // true
console.log(validatorName("Angelina Kesya Putri")) // true
console.log(validatorName("Angelina")) // false
console.log(validatorName("a. Kesya")) // false
console.log(validatorName("A Kesya")) // false
console.log(validatorName("A. Kesya Putri")) // false
console.log(validatorName("A. Kesya P.")) // false
console.log(validatorName("Angelina. Kesya Putri")) // false
console.log(validatorName("A. K. P.")) // false
console.log(validatorName("Angelina. K. Putri")) // false

module.exports = validatorName