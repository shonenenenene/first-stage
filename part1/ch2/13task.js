// 4
for ( let i = 2; i <= 10; i++ ) {
    if ( i % 2 === 0 ) {
        console.log(i)
    }
}

// 5

let i = 0
while ( i < 3 ) {
    console.log( `number ${i}!` )
    ++i
}

//6

let value 
do {
    value = prompt('Pls number > 100')
} while ( num < 100 && num !== null )

// 7

let n = 7

cycle:
for ( let i = 2; i <= n; i++ ) {
    for ( let j = 2; j < i; j++ ) {
       if (i % j == 0) continue cycle
    }
    console.log(i)
}