// Napisz funkcję „removeDouble”, która jako argument przyjmuje tablicę i usuwa wszystkie powtarzające się elementy,
// zostawiając jedynie te, które znajdują się na końcu. Tablica musi być modyfikowana *na miejscu*,
// co oznacza, że modyfikacji ulega pierwotna tablica (czyli nie tworzysz nowej).

function removeDouble(array) {
    for (let i = 0; i < array.length; i++) {

        const x = array.lastIndexOf(array[i]);            // ustalam indeks ostatniego wystąpienia elementu
       
        for (let k = 0; k < x; k++) {                   // zastępuję wszystkie wcześniejsze duplikaty elementem "placeholder"
            if (array[k] === array[x]) {                // (samo usuwanie duplikatów zaburzyłoby kolejność indeksów)
                array.splice(k, 1, "placeholder");  
            }
        }
    }
    for (let j = 0; j < array.length; j++) {            // usuwam wszystkie elementy "placeholder"
        if (array[j] === "placeholder") {           
            array.splice(j, 1)
            j--;
        }
    }
}

var stuff = ["suit", "clock", "butter", "suit"]
removeDouble(stuff)
console.log(stuff)
// Wynik: [ 'clock', 'butter', 'suit' ]

var mixed = ["hello", "hello", 23, -3, 23, "hello"]
removeDouble(mixed)
console.log(mixed)
// Wynik: [ -3, 23, 'hello' ]