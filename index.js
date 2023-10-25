// let arr = [1, 5, 7, 8, 22, 24, 37, 51]
// let total = 0
// arr.forEach((num) => total += num)
// console.log(total)

// let cars = [16000, 1000, 3500, 10000, 11000, 33000, 18000, 40000, 35000, 45000, 100000]

// from = prompt('from')
// up = prompt('up')
// foryou = cars.filter((car) => car >= from && car <= up)

// console.log(foryou)




let arr = ['hello', 1234, '', false, NaN, 123, true, ' ', null]

let trueElems = [] //arr.map((item) => Boolean(item) === true)
let falseElems = [] //arr.map((item) => Boolean(item) !== true)

arr.forEach((item) => Boolean(item) === true ? trueElems.push(item) : falseElems.push(item))

console.log(trueElems, falseElems);
