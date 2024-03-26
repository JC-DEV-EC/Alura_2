var numeroSecreto = 15; // Solo para propósitos de demostración, deberías generar un número aleatorio
var playerName;
var intentos = 0;
var intentosMaximos = 10;

function startGame() {
    playerName = document.getElementById("nameInput").value.trim();
    if (playerName === "") {
        alert("Por favor, introduce tu nombre.");
        return;
    }
    document.getElementById("playerName").innerText = playerName;
    document.getElementById("nameInput").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("registration").style.display = "none"; // Ocultar elementos de registro
    
    //numeroSecreto = parseInt(Math.random() * 1001);
    intentos = 0;
    updateAttempts(); // Actualizar el número de intentos al iniciar el juego
}

function checkGuess() {
    var guess = parseInt(document.getElementById("guessInput").value);
    intentos++;
    updateAttempts(); // Actualizar el número de intentos después de cada intento

    if (guess === numeroSecreto) {
        document.getElementById("resultMessage").innerText = "¡Felicidades " + playerName + "! ¡Has adivinado el número secreto " + numeroSecreto + " en " + intentos + " intentos!";
        setTimeout(resetGame, 5000); // Esperar 5 segundos antes de reiniciar el juego
    } else {
        var mensajeError = "Lo siento " + playerName + ", el número " + guess + " no es correcto.";

        if (guess > numeroSecreto) {
            mensajeError += " El número es menor.";
        } else {
            mensajeError += " El número es mayor.";
        }

        document.getElementById("resultMessage").innerText = mensajeError;

        if (intentos === intentosMaximos) {
            document.getElementById("resultMessage").innerText = "¡Lo siento " + playerName + "! Has alcanzado el número máximo de intentos. El número secreto era " + numeroSecreto + ".";
            resetGame();
        }
    }
}

function updateAttempts() {
    document.getElementById("attemptsCount").innerText = "Intentos: " + intentos;
}

function resetGame() {
    document.getElementById("nameInput").value = ""; // Limpiar el campo de entrada de nombre
    document.getElementById("guessInput").value = ""; // Limpiar el campo de entrada de adivinanza
    document.getElementById("resultMessage").innerText = ""; // Limpiar el mensaje de resultado
    document.getElementById("playerName").innerText = ""; // Limpiar el nombre del jugador
    document.getElementById("nameInput").style.display = "inline"; // Mostrar nuevamente el campo de entrada de nombre
    document.getElementById("gameArea").style.display = "none"; // Ocultar el área de juego
    document.getElementById("registration").style.display = "block"; // Mostrar nuevamente el área de registro
}
