// Napisz funkcję „replaceArray”, która jako argument przyjmuje tablicę słów i zwraca ją po zastąpieniu wszystkich słów
// zaczynających się od litery „h” lub „H” ich odpowiednikami składającymi się z samych wielkich liter.
// Wszystkie pozostałe słowa pozostają niezmienione.

// Oto kilka przypadków testowych:
// Test:  replaceArray(["banana", "suit", "hammer"]) Zwraca: [ 'banana', 'suit', 'HAMMER' ]
// Test:  replaceArray(["Hello", "there"]) Zwraca: [ 'HELLO', 'there' ]
// Test:  replaceArray(["Hey!", "hey..."]) Zwraca: [ 'HEY!', 'HEY...' ]

function replaceArray(array) {
    for (let i=0; i < array.length; i++) {
        if (array[i].charAt(0) == "h" || array[i].charAt(0) == "H"  ) {
            array.splice(i, 1, `${array[i].toUpperCase()}`)
        }
    }
    return array;
}



console.log(replaceArray(["banana", "suit", "hammer"]))
console.log(replaceArray(["Hello", "there"]))
console.log(replaceArray(["Hey!", "hey..."]))