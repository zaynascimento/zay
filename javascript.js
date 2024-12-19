const snowContainer = document.getElementById('snow-container');

// Função para criar um floco de neve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Posicionamento inicial aleatório
    snowflake.style.left = Math.random() * 100 + 'vw'; // Distribui os flocos horizontalmente na tela
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duração entre 2 e 5 segundos
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    snowflake.innerText = '❄';

    snowContainer.appendChild(snowflake);

    // Remover o floco após a animação
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Função para criar múltiplos flocos de neve por vez
function generateSnowflakes() {
    const numberOfFlakes = 10; // Quantidade de flocos gerados por ciclo
    for (let i = 0; i < numberOfFlakes; i++) {
        createSnowflake();
    }
}

// Criar flocos de neve a cada 300ms
setInterval(generateSnowflakes, 300);
