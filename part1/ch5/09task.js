// 1
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
function sumSalaries( sal ) {
    let sumSal = 0;
    for ( let sss of Object.values(sal) ) {
        sumSal += sss
    }
    return sumSal
}

// console.log( sumSalaries(salaries))



// 2
let user = {
    name: 'John',
    age: 30
}
  
function count( obj ) {
    let arr = Object.keys( obj )
    return arr.length
}

// console.log(count(user))
