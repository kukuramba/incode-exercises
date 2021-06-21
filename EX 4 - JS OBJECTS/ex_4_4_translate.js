// Napisz funkcję „translate”, która przyjmuje słownik i zdanie jako argumenty,
// a następnie zwraca tłumaczenie zdania zgodnie z wartościami zapisanymi w słowniku.
// Jeśli słowa do przetłumaczenia nie ma w słowniku, funkcja zwraca wynik „Error: missing value”.

// Oto kilka przypadków testowych:
// Test: translate({"je": "I", "suis": "am", "pere": "father", "ton": "your"}, "je suis ton pere")
// Wynik: 'I am your father'

// Test: translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is cute")
// Wynik: 'le chien est mignon'

// Test: translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is fluffy")
// Wynik: 'Error: missing value'

function translate(dictionary, inputStr) {
    const inputArr = inputStr.split(" ");
    const outputArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        if ( dictionary.hasOwnProperty(inputArr[i]) === true ) {
            outputArr.push(dictionary[inputArr[i]]);
        } else {
            return "Error: missing value"
        }   
    }
    const outputStr = outputArr.join(" ");
    return outputStr;
}

console.log(translate({"je": "I", "suis": "am", "pere": "father", "ton": "your"}, "je suis ton pere"))
console.log(translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is cute"))
console.log(translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is fluffy"))