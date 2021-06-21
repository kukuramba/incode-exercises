// Napisz funkcję „matrixGen”, która przyjmuje jako argumenty wysokość i szerokość.
// Funkcja zwraca dwuwymiarową tablicę, w której wartość komórki w wierszu i oraz kolumnie j wynosi i * j.

// Oto kilka przypadków testowych:
// Test:  matrixGen(1,5)
// Zwraca: [ [ 1, 2, 3, 4, 5 ] ]

// Test:  matrixGen(5,4)
// Zwraca:[
// [ 1, 2, 3, 4 ],
// [ 2, 4, 6, 8 ],
// [ 3, 6, 9, 12 ],
// [ 4, 8, 12, 16 ],
// [ 5, 10, 15, 20 ] 

// Test:  matrixGen(3,6)
// Zwraca: [
// [ 1, 2, 3, 4, 5, 6 ],
// [ 2, 4, 6, 8, 10, 12 ],
// [ 3, 6, 9, 12, 15, 18 ] ]

// Test:  matrixGen(0,0)
// Zwraca: []

function matrixGen (height, width) {
    const matrix = [];
    for (i = 1; i <= height; i++) {
        let array = [];
        for (j = 0; j < width; j++) {
            array.push(i+(j*i))
        }
        matrix.push(array);
    }
    return matrix
}


console.log(matrixGen(1,5))
console.log(matrixGen(5,4))
console.log(matrixGen(3,6))
console.log(matrixGen(0,0))
