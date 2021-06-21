// Napisz funkcję „printVowels”, która przyjmuje jako argument ciąg znaków i wyświetla jedynie zawarte w nim samogłoski.
// Samogłoski to „a”, „e”, „i”, „o”, „u”.

// Oto kilka przypadków testowych:
// Test:  printVowels("hello world") Wynik: eoo
// Test:  printVowels("kangaroo") Wynik: aaoo
// Test:  printVowels("cheeseburger") Wynik: eeeue
// Test:  printVowels("rhythm") Wynik:


function printVowels(text) {
  let onlyVowels = "";
  for (let i=0; i<text.length; i++) {
    if (text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u" ) {
      onlyVowels += text[i];
    }
  }
  console.log(onlyVowels)
}
  


printVowels("hello world")
printVowels("kangaroo")
printVowels("cheeseburger")
printVowels("rhythm")