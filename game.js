const startBtn = document.querySelector("#startgame")
startBtn.addEventListener("click", startGame)

function startGame() {
    //    Create Canvas
    myGameArea.start();
    //    Create Spaceship
    mySpaceShip = new component(30, 10, "yellow", 10, 400)
}
const main = document.querySelector("#main")

//Create Canvas Function
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 1490;
        this.canvas.height = 800;
        this.context = this.canvas.getContext("2d");
        main.insertBefore(this.canvas, main.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener("keydown", function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener("keyup", function (e) {
            myGameArea.keys[e.keyCode] = false;
        })
    },

    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

//Create Spaceship Function
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY
    }
}


//Makes the Game Run (by deleting and adding frames)
function updateGameArea() {
    myGameArea.clear();
    mySpaceShip.speedX = 0;
    mySpaceShip.speedY = 0;
    //Functions that determines movement speed (number) and direction (Y or X)

    //    UP
    if (myGameArea.keys && myGameArea.keys[38]) {
        mySpaceShip.speedY -= 2;
    }

    //    DOWN
    if (myGameArea.keys && myGameArea.keys[40]) {
        mySpaceShip.speedY += 2;
    }

    //Untag if we need left and right movement*

    //    LEFT
    if (myGameArea.keys && myGameArea.keys[37]) {
        mySpaceShip.speedX -= 2;
    }
    //    RIGHT
    if (myGameArea.keys && myGameArea.keys[39]) {
        mySpaceShip.speedX += 2;
    }

    mySpaceShip.newPos();
    mySpaceShip.update();

}
