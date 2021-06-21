// Napisz funkcję „countOccurences”, która jako argument przyjmuje ciąg znaków, a zwraca obiekt.
// W obiekcie liczba wystąpień danego słowa powiązana jest z tablicą odpowiadających jej słów.

// Oto kilka przypadków testowych:
// Test:  countOccurences("hello is it you hello hello")
// Zwraca: { '1': [ 'is', 'it', 'you' ], '3': [ 'hello' ] }

// Test:  countOccurences("hey mama hey mama")
// Zwraca: { '2': [ 'hey', 'mama' ] }

function countOccurences(inputStr) {
    const inputArr = inputStr.split(" ");
    const outputObj = {};
    for (let i = 0; i < inputArr.length; i++) {
        let count = 0;
        for (j = 0; j < inputArr.length; j++) {
            if (inputArr[j] === inputArr[i]) {
                count++;
            }
        }
        if (outputObj.hasOwnProperty(count) === false ) {
            outputObj[count] = []
            outputObj[count].push(inputArr[i]);
        } else if (outputObj[count].indexOf(inputArr[i]) === -1) {
            outputObj[count].push(inputArr[i]);
        }
    }
    return outputObj;
}

console.log(countOccurences("hello is it you hello hello"))
console.log(countOccurences("hey mama hey mama"))