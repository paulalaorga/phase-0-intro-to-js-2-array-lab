const cats = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendCat(Ralph) {
cats.push("Ralph")
}
function destructivelyPrependCat(Bob) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function  destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(Broom) {
let  NewCatsArray = [...cats];
NewCatsArray.push("Broom");
return NewCatsArray;
}
function prependCat(Arnold) {
    let  NewCatsArray = [...cats];
    NewCatsArray.unshift("Arnold");
    return NewCatsArray;
    }
function removeLastCat() {
    let NewCatsArray = [...cats]
    NewCatsArray.pop()
    NewCatsArray.slice()
    return NewCatsArray
}
function removeFirstCat() {
    let NewCatsArray = [...cats]
    NewCatsArray.shift()
    NewCatsArray.slice()
    return NewCatsArray
}