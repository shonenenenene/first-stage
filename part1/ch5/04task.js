// 4
function sumInput() {
    let arr = []
    
    while (true) {

        let value = prompt('????')
    
        if (value === "" || value === null || !isFinite(value)) break

        arr.push(+value)
      }
    
      let sum = 0
      for (let num of arr) {
        sum += num
      }
      return sum
}
    
// 5

function getMaxSubSum(arr) {
    let maxSum = 0
    let partialSum = 0
  
    for (let item of arr) { 
      partialSum += item
      maxSum = Math.max(maxSum, partialSum)
      if (partialSum < 0) partialSum = 0
    }
  
    return maxSum
  }