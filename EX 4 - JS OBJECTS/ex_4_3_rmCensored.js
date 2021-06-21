// Napisz funkcję „rmCensored”, która jako argument przyjmuje obiekt, a usuwa wszelkie właściwości,
// których klucz lub wartość zawiera znak „*”. Musisz zmodyfikować obiekt *w miejscu*, a nie tworzyć nowego.

function rmCensored(object) {

  for (let key in object) {

    if (object[key].indexOf('*') > -1 || key.indexOf('*') > -1) {
      delete object[key];
    }
  }
}

let swearWords = {"s*it": "m*rde", "sweet jesus": "doux jesus", "f***": "", "omg": "w*sh"}
rmCensored(swearWords)
console.log(swearWords)
// Wynik: { 'sweet jesus': 'doux jesus' }

let veggies = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"}
rmCensored(veggies)
console.log(veggies)
// Wynik: { potato: 'starch', collard: 'green' }