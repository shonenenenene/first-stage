// 1    2

// 2    1 and 2

// 3     null

// 4     1 and undefined

// 5     3

// 6     
let age

if ( age >= 14 || age <= 90 ) {
   alert('Cool') 
}


// 7
if ( !(age >= 14 || age <= 90 )) {
    alert('Cool') 
}
 
if (age < 14 || age > 90) {
    alert('chill')
}

// 8

if (-1 || 0) alert( 'first' ) // Выполнится (true)
if (-1 && 0) alert( 'second' ); // Не выполнится (false)
if ( null || -1 && 1 ) alert( 'third' ); // Выполнится (true)

// 9

let login = prompt( 'Логин?' )

if ( login === 'Админ' ) {
    let password = prompt( 'P.A.S.S.' )
    
        ( password === 'Я главный' ) ? alert( 'Hello' ) :
        ( password === '' || password === null ) ? alert( 'Cancel' ) :
        alert( 'Wrong!!!' )
    
} else if ( login === '' || login === null ) {
    alert('CANCEL!!!!!')
} else {
    alert('WHO ARE YOU????')
}