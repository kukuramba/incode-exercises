// Napisz funkcję „hasValue”, która jako argument przyjmuje obiekt i wartość, a następnie zwraca,
// czy podana wartość znajduje się w obiekcie. Wartość musi mieć postać wartości, nie klucza.

// Test:  hasValue({"hello": "bonjour", "my": "mon"}, "bonjour") Zwraca: true
// Test:  hasValue({"hello": "bonjour", "my": "mon"}, "hello") Zwraca: false
// Test:  hasValue({"hello": "bonjour", "my": "mon"}, "tasty") Zwraca: false


function hasValue(object, value) {
  for (const key in object) {           
    if (object[key] === value) {       
      return true;                      
    }                     
  }
  return false;  
}

console.log(hasValue({"hello": "bonjour", "my": "mon"}, "bonjour"))
console.log(hasValue({"hello": "bonjour", "my": "mon"}, "hello"))
console.log(hasValue({"hello": "bonjour", "my": "mon"}, "tasty"))
console.log(hasValue({"hello": "bonjour", "my": "mon"}, "mon"))