// Napisz funkcję „sortWords”, która przyjmuje jako argument tablicę ciągów znakowych i zwraca obiekt.
// Obiekt ma dwa klucze: „odd” i „even”.
// Klucz „odd” powiązany jest z tablicą ciągów o długości nieparzystej.
// Klucz „even” powiązany jest z tablicą ciągów o długości parzystej.

// Test:  sortWords([]) Wynik: { odd: [], even: [] }
// Test:  sortWords(["work", "hard", "mommy"]) Wynik: { odd: [ 'mommy' ], even: [ 'work', 'hard' ] }
// Test:  sortWords(["oh!", "ah!", "hi", "my"]) Wynik: { odd: [ 'oh!', 'ah!' ], even: [ 'hi', 'my' ] }

function sortWords(array) { 

  const object = {                
    odd: [],
    even: []
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].length % 2 === 0) {
      object.even.push(array[i]);
    } else {
      object.odd.push(array[i]);
    }
  }
  return object;
}

console.log(sortWords(["work", "hard", "mommy"]))
console.log(sortWords(["oh!", "ah!", "hi", "my"]))
console.log(sortWords([]))