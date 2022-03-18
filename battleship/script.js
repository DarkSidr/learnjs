const location1 = 3,
    location2 = 4,
    location3 = 2;

let guess,
    hits = 0,
    guesses = 0,
    isSunk = false;

while (isSunk == false) {
    guess = +prompt("Готовсья целься огонь! (Введи число от 0 до 6)", "");
    if(guess < 0 || guess > 6) {
        alert("Пожалуйста, введите корректное число!");
    } else {
        guesses = guesses + 1;
        if(guess == location1 || guess == location2 || guess == location3) {
            alert("Попал!");
            hits = hits + 1;
            if(hits == 3) {
                isSunk = true;
                alert("Ты потопил мой корабль");
            }
        } else {
            alert("Мимо!");
        }
    }
}

const stats = `Ты совершил ${guesses} ходов чтобы потопить мой корабль, что означает ваша точность ${3 / guesses}`;
alert(stats);