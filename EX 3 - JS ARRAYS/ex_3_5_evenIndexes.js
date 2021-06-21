// Napisz funkcję „evenIndexes”, która jako argument przyjmuje słowo i zwraca tablicę liter znajdujących się na indeksach parzystych.

// Oto przypadki testowe:
// Test:  evenIndexes("lol") Zwraca: [ 'l', 'l' ]
// Test:  evenIndexes("You're weird") Zwraca: [ 'Y', 'u', 'r', ' ', 'e', 'r' ]
// Test:  evenIndexes("") Zwraca: [ ]

function evenIndexes(myStr) {
    const myArr = [];
    for (let i=0; i<myStr.length; i+=2) {
        myArr.push(myStr[i]);
    }
    return myArr;
}


console.log(evenIndexes("lol"))
console.log(evenIndexes("You're weird"))
console.log(evenIndexes(""))


