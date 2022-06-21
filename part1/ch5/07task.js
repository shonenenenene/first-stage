// 2
function aclean( arr ) {
    let deDust = new Map()

    for ( let word of arr ) {
        let wordSort = word.toLowerCase().split( '' ).sort().join( '' )
        deDust.set(wordSort, word)
    }

    return Array.from(deDust.values())
}
let zxc = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
console.log( aclean( zxc ) )

// 3

let map = new Map()

map.set("name", "John")

let keys = Array.from(map.keys())

keys.push("more")