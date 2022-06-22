// 1

function work(a, b) {
    console.log( a + b ); 
  }
  

function spy( func, hash ) {

    function wrapper(...args) {
        wrapper.calls.push( args )
        return func.apply(this, arguments)
    }

    wrapper.calls = []

    return wrapper
}




  work = spy(work)
  
  work(1, 2)
  work(4, 5)
  
//   for (let args of work.calls) {
//     console.log( 'call:' + args.join() )
// }
  




// 2

function f(x) {
    alert(x)
  }
  
  function delay(f, ms) {

    return function() {
      setTimeout(() => f.apply(this, arguments), ms)
    }
  }
  

  let f1000 = delay(f, 1000)
  let f1500 = delay(f, 1500)
  
f1000("test")
f1500( "test" )
  



// 3


function debounce(f, ms) {

    let isCooldown = false
  
    return function() {
      if (isCooldown) return
  
      f.apply(this, arguments)
  
      isCooldown = true
  
      setTimeout(() => isCooldown = false, ms)
    }
  
}
  
// 4


function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;
  
    function wrapper() {
  
      if (isThrottled) {
        savedArgs = arguments
        savedThis = this
        return
      }
  
      func.apply(this, arguments)
  
      isThrottled = true
  
      setTimeout(function() {
        isThrottled = false
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs)
          savedArgs = savedThis = null
        }
      }, ms)
    }
  
    return wrapper
  }