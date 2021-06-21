// Napisz funkcję „hasValueDepth”, która przyjmuje zagnieżdżony obiekt i wartość jako argumenty,
// a następnie zwraca informację, czy dana wartość zawarta jest w obiekcie.
// Wartość musi być znaleziona jako wartość, a nie jako klucz.

// Test:  hasValueDepth(obj, "hello") Zwraca: false
// Test:  hasValueDepth(obj, "Elvis Presley") Zwraca: true
// Test:  hasValueDepth(obj, "author") Zwraca: false
// Test:  hasValueDepth(obj, "dystopia") Zwraca: true

var obj = {
    "hello": "world",
    "goDeeper": {
        1961: "Barack Obama",
        1964: "Michelle Obama",
        1935: "Elvis Presley",
        1984: {"author": "George Orwell", "genre": "dystopia"}
    }
}

function hasValueDepth(inputObj, inputStr) {
    for (const keyA in inputObj) {
        if (inputObj[keyA] === inputStr) {       
            return true;                      
        } else {
            for (const keyB in inputObj[keyA]) {
                if (inputObj[keyA][keyB] === inputStr) {
                    return true;
                } else {
                    for (const keyC in inputObj[keyA][keyB]) {
                        if (inputObj[keyA][keyB][keyC] === inputStr) {
                            return true;
                        }   
                    }
                }
            }
        }  
    }   
    return false;
}

console.log(hasValueDepth(obj, "hello"))
console.log(hasValueDepth(obj, "Elvis Presley"))
console.log(hasValueDepth(obj, "author"))
console.log(hasValueDepth(obj, "dystopia"))