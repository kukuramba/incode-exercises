// Napisz funkcję „displayName”, która przyjmuje dwa argumenty, imię i nazwisko, i wyświetla je w powitaniu w stylu Jamesa Bonda.
// Spójrz na przypadki testowe, aby zrozumieć jego zasadę działania. Twoja funkcja musi działać tak samo!
// Wskazówka: kiedy mówimy o *wyświetlaniu*, musisz użyć polecenia „console.log”.

//     Oto kilka przypadków testowych:
//     Test: displayName("James", "Bond")
//     Wynik: My name is Bond, James Bond
//     Test: displayName("Ada", "Lovelace")
//     Wynik: My name is Lovelace, Ada Lovelace


function displayName(name, surname){
  console.log(`My name is ${surname}, ${name} ${surname}`)
}

displayName("James", "Bond")
displayName("Ada", "Lovelace")

