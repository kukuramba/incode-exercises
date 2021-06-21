// Napisz funkcję „pyramid”, która przyjmuje jako argument wielkość podstawy i rysuje piramidę składającą się ze znaków „#”.

// Moja funckja przyjmuje jako weilkość podstawy zarówno liczby parzyste, jak i nieparzyste!

function pyramid(baseWidth) {
  const array = [];
  let counter = 0;
  for (let i = baseWidth; i > 0; i -= 2) {       // Print layers

      for (let j = 0; j < i; j++) {      // Print hashes
        array.unshift("#");
      }
      for (let k = 0; k < counter; k++) {      // Print spaces
        array.unshift(" ");
      } 
      if (i>2) {          
        array.unshift("\n");             // Generate new line
      }
      counter ++;
  }
  console.log(array.join(''));
}

pyramid(9)
pyramid(1)
pyramid(5)

pyramid(6)
pyramid(10)
pyramid(18)