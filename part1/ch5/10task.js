// 1
let user = {
    name: "John",
    years: 30
}
  
let { name, years, isAdmin = false } = user



// 2

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}
  
function topSalary( sal ) {

    let maxSal = 0
    let maxName = null
  
    for(let [name, salary] of Object.entries(salaries)) {
      if (maxSal < salary) {
        maxSal = salary
        maxName = name
      }
    }
  
    return maxName;
}

console.log(topSalary(salaries))