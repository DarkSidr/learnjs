window.addEventListener("DOMContentLoaded", function () {
    const view = {
        displayMessage: function (msg) {
            const messageArea = document.querySelector('#messageArea');
            messageArea.textContent = msg;
        },
        displayHit: function(location) {
            const hit = document.getElementById(location);
            hit.classList.add('hit');
        },
        displayMiss: function(location) {
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
        ships: [
            {
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
        fire: function(guess) {
            for (let i = 0; i < this.numShips; i++) {
                const ship = this.ships[i];
            }
        }
    };
  
});