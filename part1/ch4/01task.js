// 1
let user = {}
user.name = 'Johnhnh'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name


// 2
let schedule = {};
 
function isEmpty( obj ) {
    for ( let key in obj ) {
        return false
    }
    return true
} 

// 4

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
  
let sum = null

function sumSal( obj ) {
    for ( let key in obj ) {
        sum += obj[key]
    }
    return sum
}

console.log( sumSal( salaries ) )

// 5

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}
  
function multiplyNumeric( obj ) {
    for ( let key in obj ) {
        if ( !isNaN( obj[key] ) ) {
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu)
console.log(menu)

