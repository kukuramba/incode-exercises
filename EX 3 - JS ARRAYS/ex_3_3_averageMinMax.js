// Napisz funkcję „averageMinMax”, która jako argument przyjmuje tablicę liczb całkowitych, 
// a następnie wyświetla wartość minimalną, maksymalną i średnią wszystkich liczb.

// Przypomnienie: średnia zbioru liczb całkowitych jest ich sumą podzieloną przez ich liczbę.
// Wynik powinien być zaokrąglony w dół metodą „floor”.

// Oto kilka przypadków testowych:
// Test:  averageMinMax([-42, 0, 42]) Wynik: Min: -42 Max: 42 Average: 0
// Test:  averageMinMax([30, 20, 100]) Wynik: Min: 20 Max: 100 Average: 50
// Test:  averageMinMax([-23, -4, -12]) Wynik: Min: -23 Max: -4 Average: -13

function averageMinMax(intArray) {

  const x = Math.min(...intArray)
  console.log("Min:", x)

  const y = Math.max(...intArray)
  console.log("Max:", y)

  let sum = 0
  for (let i=0; i<intArray.length; i++){
    sum += intArray[i];
  }
  const z = Math.floor(sum / intArray.length);
  console.log("Average:", z)
}

  averageMinMax([-42, 0, 42])
  averageMinMax([30, 20, 100])
  averageMinMax([-23, -4, -12])