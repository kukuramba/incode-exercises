// Napisz funkcję „displayFullName’, która jako argument przyjmuje imię i nazwisko,
// a następnie wyświetla powitanie w stylu Jamesa Bonda.
// Jeśli imion lub nazwisk jest kilka, powtórzony zostaje jedynie ostatni człon.

// Oto kilka przypadków testowych:
// Test: displayFullName("James Bond") Wynik: My name is Bond, James Bond
// Test: displayFullName("Ada Lovelace") Wynik: My name is Lovelace, Ada Lovelace
// Test: displayFullName("Salvador Felipe Jacinto Dalí") Wynik: My name is Dalí, Salvador Felipe Jacinto Dalí

function displayFullName(name){
  const arrName = name.split(" ") 
  console.log(`My name is ${arrName[arrName.length-1]}, ${name}`); 
}

displayFullName("James Bond")
displayFullName("Ada Lovelace")
displayFullName ("Salvador Felipe Jacinto Dali")