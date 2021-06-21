// Zapewne znasz grę w „kamień, papier i nożyce” (jeśli nie, zapoznaj się z zasadami i rozegraj parę rudek z osobą obok!).
// Napisz funkcję, która zwraca wynik gry.
// Funkcja „rockPaperScissors” przyjmuje dwa argumenty:
// - pierwszym jest ruch pierwszego gracza: „rock”, „paper” lub „scissors”’;
// - drugim jest ruch drugiego gracza: „rock”, „paper” lub „scissors”’.
// Twoja funkcja zwraca „First player wins”, jeśli pierwszy gracz wygrał, „Second player wins”, jeśli drugi gracz wygrał, a „Draw” w przypadku remisu.

// Oto kilka przypadków testowych:
// Test: rockPaperScissors("rock", "rock") Wynik: Draw
// Test: rockPaperScissors("rock", "paper") Wynik: Second player wins
// Test: rockPaperScissors("rock", "scissors") Wynik: First player wins
// Test: rockPaperScissors("paper", "scissors") Wynik: Second player wins


function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    console.log("Draw")
  }
  else if ( (player1 === "rock" && player2 === "scissors") || (player1 === "paper" && player2 === "rock") || (player1 === "scissors" && player2 === "paper") ) {
    console.log("First player wins")
  }
  else {
    console.log("Second player wins")
  }
}

rockPaperScissors("rock", "rock")
rockPaperScissors("rock", "paper")
rockPaperScissors("rock", "scissors")
rockPaperScissors("paper", "scissors")
