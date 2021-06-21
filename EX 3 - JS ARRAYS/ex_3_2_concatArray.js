// Napisz funkcję „concatArray”, która jako argument przyjmuje tablicę słów
// i zwraca pojedynczy ciąg tekstowy, składający się z tych słów.
// Słowa oddzielone są spacjami, a ciąg kończy się kropką „.”.

// Oto kilka przykładów: Test: concatArray(["Hello", "this", "is", "dog"]) Zwraca: 'Hello this is dog.'
// Test: concatArray(["All", "I", "want", "for", "christmas", "is", "you"]) Zwraca: 'All I want for christmas is you.'
// Test: concatArray([]) Zwraca: '.'

function concatArray(array) {
  return array.join(" ")+".";
}

console.log(concatArray(["Hello", "this", "is", "dog"]))

console.log(concatArray(["All", "I", "want", "for", "christmas", "is", "you"]))

console.log(concatArray([]))

