// 4

function sum( a ) {
    return b => a + b
}


// 5

function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    }
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7]


  function inArray(arr) {
    return function(x) {
      return arr.includes(x)
    }
}
  
// 6

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}
  
// 7

function makeArmy() {

    let shooters = []
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() { 
        console.log( i )
      };
      shooters.push(shooter)
  
  
    }
  
    return shooters
  }
  
  let army = makeArmy()
  
  army[0]()
  army[5]()