// 1
// Выведется, т.к. строка не пустая => true

// 2
let a = prompt( 'Какое «официальное» название JavaScript?' )
if ( a == 'ECMAScript' ) {
    alert( 'Good!' )
} else {
    alert('Не знаете? ECMASript!')
}

// 3
let b = +prompt( 'Some Number???' )
if (b > 0) {
    alert(1)
} else if (b === 0) {
    alert(0)
} else {
    alert(-1)
}


//4

let result;

result = ( a + b < 4 ) ? 'Мало' : 'Много'

//5
let message
message = ( login == 'Sotrudnik' ) ? 'Privet' :
    ( login == 'Директор' ) ? 'Здравствуйте' :
    ( login == '' ) ? 'Нет логина' : ''
            