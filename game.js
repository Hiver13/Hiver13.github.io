// Конфигурация игры
const config = {
    // Количество танков
    tankCount: 2,

    // Размер поля
    fieldSize: {
        width: 600,
        height: 600
    },

    // Скорость движения танков
    tankSpeed: 5,

    // Скорость полета снарядов
    bulletSpeed: 10,

    // Интервал между выстрелами
    shotInterval: 500
};

// Список танков
let tanks = [];

// Список снарядов
let bullets = [];

// Создание игрового поля
const gameField = document.getElementById("game-field");
gameField.style.width = config.fieldSize.width + "px";
gameField.style.height = config.fieldSize.height + "px";

// Подключение к серверу Socket.IO
const socket = io();

socket.on("connect", () => {
    console.log(Connected to server with ID ${socket.id});

    // Отправка запроса на создание новой игры
    socket.emit("create-game");
});

// Обработка сообщения о создании новой игры
socket.on("game-created", (gameCode) => {
    console.log(New game created with code ${gameCode});

    // Отображение кода игры на странице
    const gameCodeText = document.createElement("p");
    gameCodeText.innerText = Код игры: ${gameCode};
    gameField.appendChild(gameCodeText);
});

// Обработка сообщения о присоединении нового игрока
socket.on("player-joined", (playerID) => {
    console.log(Player ${playerID} has joined the game`);
});

// Функция для создания нового танка
function createTank(playerID, positionX, positionY, color) {
// Создание DOM-элемента для танка
const tankElement = document.createElement("div");
tankElement.style.position = "absolute";
tankElement.style.width = "50px";
tankElement.style.height = "50px";
tankElement.style.backgroundColor = color;
gameField.appendChild(tankElement);

// Добавление танка в список
tanks.push({
playerID: playerID,
element: tankElement,
position: {
x: positionX,
y: positionY
},
direction: "up"
});
}
