window.addEventListener("DOMContentLoaded", function () {
    const view = {
        displayMessage: function (msg) {
            const messageArea = document.querySelector('#messageArea');
            messageArea.textContent = msg;
        },
        displayHit: function (location) {
            const hit = document.getElementById(location);
            hit.classList.add('hit');
        },
        displayMiss: function (location) {
            const miss = document.getElementById(location);
            miss.classList.add('miss');
        }
    };

    view.displayMessage('Tap tap, is this thing on?');

    const model = {
        boardSize: 7,
        numShips: 3,
        shipLenght: 3,
        shipSunk: 0,
        ships: [{
                location: ['06', '16', '26'],
                hits: ['', '', ''],
            },
            {
                location: ['24', '34', '44'],
                hits: ['', '', ''],
            },
            {
                location: ['10', '11', '12'],
                hits: ['', '', ''],
            },
        ],
        fire: function (guess) {
            for (let i = 0; i < this.numShips; i++) {
                const ship = this.ships[i];
                const index = ship.location.indexOf(guess);
                if (index >= 0) {
                    ship.hits[index] = 'hit';
                    view.displayHit(guess);
                    view.displayMessage("Hit!");
                    if (this.isSunk(ship)) {
                        view.displayMessage("You sank my battleship!");
                        this.shipSunk++;
                    }
                    return true;
                }
            }
            view.displayMiss(guess);
            view.displayMessage('You missed');
            return false;
        },
        isSunk: function (ship) {
            for (let i = 0; i < this.shipLenght; i++) {
                if (ship.hits[i] !== 'hit') {
                    return false;
                }
            }
            return true;
        }
    };

    const controller = {
        guesses: 0,
        processGuess: function(guess) {
            const location = parseGuess(guess);
            if(location) {
                this.guesses++;
                const hit = model.fire(location);
                if(hit && model.shipSunk === model.numShips) {
                    view.displayMessage('You sank all my battleships, in' + this.guesses + ' guesses');
                }
            }
        }

    };

    function parseGuess (guess) {
        const alpabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        if(guess === null || guess.length !== 2) {
            alert('Oops, please enter a letter and a number on the board.');
        } else {
            const firstChar = guess.charAt(0);
            const row = alpabet.indexOf(firstChar);
            const column = guess.charAt(1);

            if(isNaN(row) || isNaN(column)) {
                alert('Oops, that isn`t on the board.');
            } else if(row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
                alert('Oops, that`s off the board');
            } else {
                return row + column;
            }
        }
        return null;
    }

    function init() {
        const fireButton = document.getElementById('fireButton');
        fireButton.addEventListener('click', handleFireButton);
        const guessInput = document.getElementById('guessInput');
        guessInput.addEventListener('keypress', handleKeyPress);
    }

    function handleFireButton(){
        const guessInput = document.getElementById('guessInput');
        const guess = guessInput.value;

        controller.processGuess(guess);
        guessInput.value = '';
    }

    function handleKeyPress(e) {
        const fireButton = document.getElementById('fireButton');
        if(e.code === "Enter") {
            e.preventDefault();
            fireButton.click();
            return false;
        }
    }

    init();

});