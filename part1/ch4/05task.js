// 2

function Calculator() {

    this.read = function() {
        this.a = +prompt( 'first num' )
        this.b = +prompt( 'second num' )
    }

    this.sum = function() {
        return this.a + this.b
    }

    this.mul = function() {
        return this.a + this.b
    }

}

// 3

function Accumulator( startingValue ) {
    this.value = startingValue
    this.read = function () {
       this.value += +prompt('Num pls')
    }
}