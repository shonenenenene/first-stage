// 4
const calculator = {

    read() {
        this.a = +prompt( 'first num' )
        this.b = +prompt( 'second num' )
    },

    sum() {
        return this.a + this.b
    },

    mul() {
        return this.a + this.b
    },

}

// 5

let ladder = {
    step: 0,
    up() {
        this.step++
        return this
    },
    down() {
        this.step--
        return this
    },
    showStep: function() { 
        alert( this.step )
        return this
    },
};
  