var players = []; // массив игроков
var maxPlayers = 3; // максимальное количество игроков
var drawingTime = 60; // время для рисования в секундах

function joinRoom(playerName) {
    if (players.length < maxPlayers) {
        players.push(playerName);
        alert("Вы присоединились к комнате.");
        if (players.length == maxPlayers) {
            startGame();
        }
    } else {
        alert("Комната заполнена. Попробуйте позже.");
    }
}

function startGame() {
    var wordToDraw = "кот";
    var currentPlayerIndex = 0;

    alert("Игра началась! Нарисуйте: " + wordToDraw);

    setInterval(function() {
        if (drawingTime > 0) {
            drawingTime--;
            console.log(drawingTime);
        } else {
            nextPlayer();
        }
    }, 1000);

    function nextPlayer() {
        currentPlayerIndex++;
        if (currentPlayerIndex >= players.length) {
            endGame();
        } else {
            alert(players[currentPlayerIndex] + ", ваша очередь!");
            drawingTime = 60;
        }
    }

    function endGame() {
        alert("Игра окончена!");
    }
}
