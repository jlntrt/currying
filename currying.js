function add(a) {
  return function (b) {
    return a+b
  }
}

// or

const add2 = a => b => a+b

//---

console.log(
  add(1)(2)
)

console.log(
  add(1)(2)
)

