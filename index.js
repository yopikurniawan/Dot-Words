// my code below this line
function validatorName(name) {
  return name
}

let datas = [
  {
    "id": 1,
    "name": "paijo",
  },
  {
    "id": 2,
    "name": "baijo",
  },
  {
    "id": 3,
    "name": "caijo",
  },
]

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

console.log("tambahan data yang baru masuk")

module.exports = validatorName
