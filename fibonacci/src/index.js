'use strict'

const fibonacci = () => {
  let fibonacciArray = [ 0 , 1 ];
  let newFibonacciArray= [];
  
  Object.assign(newFibonacciArray, fibonacciArray)
  
  for(let index = 2; index < 350; index++ ){
    newFibonacciArray.push(newFibonacciArray[index - 2] + newFibonacciArray[index -1])
  }

  return newFibonacciArray
}

const isFibonnaci = (num) => {
    const checkFibonnaci = fibonacci().includes(num)
    return checkFibonnaci
}

module.exports = {
    fibonacci,
    isFibonnaci
}
