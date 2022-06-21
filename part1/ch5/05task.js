// 1
function camelize( str ) {
    let arr = str.split( '-' ).map( function ( curr, index ) {
        if ( index === 0 ) {
            return curr
        }
        return curr[0].toUpperCase() + curr.slice(1)
    } ).join('')
    return arr
}

// console.log( camelize( 'list-style-image' ) )

// 2

function filterRange(arr, a, b) {
    let newArr = arr.map( function (curr) {
        if ( curr >= a && curr <= b ) {
            return curr
        } else return 'deleteMe'
    } )
    return newArr.filter(item => item === 'deleteMe' ? false : true)
}

// let arr = [5, 3, 8, 1]
// let filtered = filterRange(arr, 1, 4)
// console.log( filtered )
// console.log( arr )


// 4

function copySorted( arr ) {
    return arr.slice().sort()
}

// 5

function Calculator() {

    this.calculate = function ( str ) {

        let split = str.split( '' )
        a = +split[0]
        b = +split[2]
        math = +split[1]

        if ( !this.methods[op] || isNaN( a ) || isNaN( b ) ) {
            return NaN
        }

        return this.methods[math](a, b)
    }

    this.methods = {
        '-': ( a, b ) => a - b,
        '+': ( a, b ) => a + b,
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func
    }
    
}

// 6

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(curr => curr.name)


// 7

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [vasya, petya, masha]

        let usersMapped = users2.map( curr => ( {
            fullName: `${curr.name} ${curr.surname}`,
            id: curr.id
        }
    )
)



// 8

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 28 };

let noNames = [vasya, petya, masha];

function sortByAge( arr ) {
    arr.sort((a, b) => a.age - b.age)
}

// sortByAge( noNames )
// console.log(noNames)



// 11

function getAverageAge( guys ) {
    let sumAge = 0
    for ( let i = 0; i < guys.length; i++ ) {
        sumAge += guys[i].age
    }
    return Math.round(sumAge / guys.length)
}

// console.log( getAverageAge( noNames ) )

// 12

function unique( arr ) {
    let setix = new Set(arr)
    return setix
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

// console.log(unique(strings))