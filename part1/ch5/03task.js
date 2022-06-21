// 1
function ucFirst( str ) {
    if ( !str ) return str
    let newWord = str[0].toUpperCase() + str.slice(1)
    return newWord
}

console.log( ucFirst( 'sasuke' ) )

// 2

function checkSpam( str ) {
    if ( str.toUpperCase().includes( ( 'buy ViAgRA now' ).toUpperCase() ) ||
        str.toUpperCase().includes( ( 'free xxxxx' ).toUpperCase()) ) {
        return true
    } else return false
}

console.log(checkSpam('buy ViAgRA now') )
console.log(checkSpam('free xxxxx') )
console.log(checkSpam("innocent rabbit"))

// 3

function truncate( str, maxlength ) {
    if ( str.length > maxlength ) {
        return str.slice(0, maxlength - 1) + '...'
    } else return str
}

console.log( truncate( "Вот, что мне хотелось бы сказать на эту тему:", 20 ) )

//4

function extractCurrencyValue( str ) {
    return +str.slice(1)
}