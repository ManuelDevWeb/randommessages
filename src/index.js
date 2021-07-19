const messages = [
    "Manuel",
    "Ana",
    "Oscar",
    "David",
    "Jessica",
    "Laura",
    "Javier",
    "Carlos",
    "Duran",
    "Jaime",
    "Paulina"
];

const randomMsg = () => {
    //Almacenando una palabra aleatoria
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };