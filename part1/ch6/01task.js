// 1

function sumTo( n ) {
    return (n === 1) ? 1 : n + sumTo(n-1)
}
// console.log( sumTo( 100 ) )


// 2

function factorial( n ) {
    return ( n === 1 ) ? n : n * factorial( n - 1 )
}
// console.log( factorial( 5 ) )



// 3

function fib( n ) {
    return ( n <= 1 ) ? n : fib( n - 1 ) + fib( n - 2 )
}
// console.log(fib(7))


// 4
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
}
  
function printList(list) {

    console.log(list.value)
  
    if (list.next) {
      printList(list.next)
    }
  
  }


  // 5

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next)
  }

  console.log(list.value)
}