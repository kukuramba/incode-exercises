// Napisz funkcję „groupFamilies”, która przyjmuje tablicę obiektów z kluczami „name” i „surname”.
// Funkcja zwraca obiekt z nazwiskami jako kluczami i powiązanymi z nimi imionami w tablicy.

// Oto kilka przypadków testowych
// Test:  groupFamilies( [ {"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"} ] )
// Zwraca: { Obama: [ 'Barack', 'Michelle' ] }

// Test:  groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}, {"name": "Donald", "surname": "Trump"}])
// Zwraca: { Obama: [ 'Barack', 'Michelle' ], Trump: [ 'Donald' ] }

function groupFamilies(array) {
    const outputObj = {};
    for (let i = 0; i < array.length; i++) {
        if (outputObj.hasOwnProperty(array[i].surname) === false ) {
            outputObj[array[i].surname] = []
            outputObj[array[i].surname].push(array[i].name);
        } else {
            outputObj[array[i].surname].push(array[i].name);
        }
    }
    return outputObj;
}

console.log(groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}]))
console.log(groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}, {"name": "Donald", "surname": "Trump"}]))

