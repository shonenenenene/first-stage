// 1
document.body.firstChild

document.body.lastChild

document.body.lastChild.lastChild

// 3

let square = document.body.firstChild

for ( let i = 0; i < square.length; i++ ) {
    let rows = square.rows[i]
    rows.cells[i].style.backgroundColor = 'red'
}
