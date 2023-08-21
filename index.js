let isX = true;

let tile = {
    owner: ""
};

let tiles = [];

for (let i=0; i<9; i++) {
    tiles.push(Object.assign({}, tile));
}

let buttons = document.querySelectorAll(".myButton");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        buttonClick(this.dataset.value);
    })
})

function buttonClick (value) {
    let button = document.querySelector('.myButton[data-value="' + value + '"]');
    let image = button.querySelector("img");
    if (tiles[value].owner == "") {
        if (isX) {
            tiles[value].owner = "x";
            image.src = "images/x_square.png";
            checkEnd("x");
        } else {
            tiles[value].owner = "o";
            image.src = "images/o_square.png";
            checkEnd("o");
        }
        isX = !isX;
    }
}

function checkEnd (player) {
    let message = document.getElementById("gameEndMessage");
    let won = false;

    for (let i=0; i<3; i++) {
        if (tiles[i].owner == player && tiles[i+3].owner == player && tiles[i+6].owner == player) {
            won = true;
        }

        let j = i*3;

        if (tiles[j].owner == player && tiles[j+1].owner == player && tiles[j+2].owner == player) {
            won = true;
        }
    }

    if (tiles[4].owner == player) {
        if (tiles[0].owner == player && tiles[8].owner == player) {
            won = true;
        }
        if (tiles[2].owner == player && tiles[6].owner == player) {
            won = true;
        }
    }

    if (won) {
        player = player.toUpperCase();
        message.innerHTML = player + " wins!";
        return;
    }

    for (let i=0; i<9; i++) {
        if (tiles[i].owner == "") {
            return;
        }
    }
    message.innerHTML = "Draw!";
}