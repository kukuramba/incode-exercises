// Napisz funkcję „abbrev”, która przyjmuje jako argument ciąg znaków i zwraca jego skróconą wersję.
// Skrót składa się z pierwszych 3 znaków ciągu, spacji i łącznej liczby znaków w ciągu.
// Jeśli ciąg ma mniej niż 3 znaki, skrót zostaje wypełniony spacjami. (Przyjrzyj się przykładom!)

// Oto kilka przypadków testowych:
// Test:  abbrev("Nice") Zwraca: 'Nic 4'
// Test:  abbrev("I am your father") Zwraca: 'I a 16'
// Test:  abbrev("Supercalifragilisticexpialidocious") Zwraca: 'Sup 34'
// Test:  abbrev("!") Zwraca: '!   1'
// Test:  abbrev("Yo") Zwraca: 'Yo  2'


function abbrev(text) {
  const first3char = text.slice(0,3);
  if (text.length > 2) {
    return first3char + " " + text.length;
  } else if (text.length == 2) {
    return first3char + "  " + text.length
  } else {
    return first3char + "   " + text.length
  }
}

console.log(abbrev("Nice"))
console.log(abbrev("I am your father"))
console.log(abbrev("Supercalifragilisticexpialidocious"))
console.log(abbrev("!"))
console.log(abbrev("Yo"))