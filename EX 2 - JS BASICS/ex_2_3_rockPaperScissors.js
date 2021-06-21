// Zmodyfikuj funkcję „rockPaperScissors” tak, aby *zwracała* rezultat zamiast go *wyświetlać*.
// Zmień także funkcję tak, aby obsługiwała błędy.
// Jeśli jeden z przekazanych funkcji argumentów nie ma wartości „"rock"”, „"paper"” lub „"scissors"”, funkcja zwraca komunikat „Argument error”.

// Oto kilka przypadków testowych:
// Test:  rockPaperScissors("paper", "scissors") Zwraca: 'Second player wins'
// Test:  rockPaperScissors("rock", "potatoes") Zwraca: 'Argument error'
// Test:  rockPaperScissors("glue", "scissors") Zwraca: 'Argument error'
// Test:  rockPaperScissors("rock", "rock") Zwraca: 'Draw'



function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "Draw";
  }
  else if (player1 === "rock" && player2 === "scissors" || player1 === "paper" && player2 === "rock" || player1 === "scissors" && player2 === "paper") {
    return "Player 1 wins";
  }
  else if (player1 === "rock" && player2 === "paper" || player1 === "paper" && player2 === "scissors" || player1 === "scissors" && player2 === "rock") {
    return "Player 2 wins";
  }
  else {
    return "Argument error";
  }
}

console.log(rockPaperScissors("paper", "scissors"))
console.log(rockPaperScissors("rock", "potatoes"))
console.log(rockPaperScissors("glue", "scissors"))
console.log(rockPaperScissors("rock", "rock"))
