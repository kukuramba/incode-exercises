// Napisz funkcję „subDigits”, która jako argument przyjmuje liczbę całkowitą i zwraca wynik,
// który jest wprowadzoną liczbą po odjęciu od niej wartości jej cyfr.
// Na przykład: jeśli liczbą jest 12, funkcja zwraca 12 - 1 - 2 => 9.
// Jeśli liczba jest ujemna, funkcja zwraca komunikat „Argument Error”.

// Oto kilka przypadków testowych:
// Test: subDigits(12) Zwraca: 9
// Test: subDigits(4000000) Zwraca: 3999996
// Test: subDigits(0) Zwraca: 0
// Test: subDigits(451) Zwraca: 441
// Test: subDigits(-12) Zwraca: 'Argument Error'

function subDigits(number) {
  if ( (number < 0) || (Number.isInteger(number) != true) ) {
    return "Argument error";
  } else {
    const stringOfnumber = String(number);
    let sumOfdigits = 0;
    for (let i = 0; i < stringOfnumber.length; i++) {
      sumOfdigits += Number(stringOfnumber[i]);
    }
    return number - sumOfdigits;
  } 
}

console.log(subDigits(12))
console.log(subDigits(4000000))
console.log(subDigits(0))
console.log(subDigits(451))
console.log(subDigits(-12))
console.log(subDigits(2.5))