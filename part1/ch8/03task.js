//1

Function.prototype.defer = function ( t ) {
    setTimeout(this, t)
}



// 2

Function.prototype.defer = function(t) {
    let f = this
    return function(...args) {
      setTimeout(() => f.apply(this, args), t)
    }
  }
  
