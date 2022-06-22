// 1
function printNumbers( from, to ) {
    let curr = from

    let timer = setInterval( function () {
        console.log( curr )
        if ( curr === to ) {
            clearInterval(timer)
        }
        curr++

    }, 1000)
}

// printNumbers( 5, 10 )


function printNumbers2(from, to) {
    let curr = from
  
    setTimeout(function letsGo() {
      console.log(curr)
      if (curr < to) {
        setTimeout(letsGo, 1000)
      }
        curr++
        
    }, 1000);
  }

printNumbers2(1, 3)