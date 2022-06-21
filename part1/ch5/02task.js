// 1
let a = +prompt( 'first' )
let b = +prompt('second')

alert( a + b )


// 3

function readNumber() {
    let number 
    do {
       number = +prompt('num pls')
    } while ( !isFinite(number) )
    
    if ( number === null || number === '' ) {
        return null
    }
    return +number
}

// 5
function random(min, max) {
    return min + Math.random() * (max - min)
  }


  // 6

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
  }
  
