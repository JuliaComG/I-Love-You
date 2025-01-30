const botao = document.getElementById('meuBotao');
let contador = 0; // Contador de vezes que o botão fugiu
const maxTentativas = 1; // Número máximo de vezes que o botão foge

// Função para mover o botão para uma posição aleatória
function moverBotao() {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    // Gera coordenadas aleatórias dentro da janela
    const novaPosicaoX = Math.random() * (larguraJanela - botao.offsetWidth);
    const novaPosicaoY = Math.random() * (alturaJanela - botao.offsetHeight);

    // Aplica as novas coordenadas ao botão
    botao.style.left = `${novaPosicaoX}px`;
    botao.style.top = `${novaPosicaoY}px`;
}

// Função para centralizar o botão
function centralizarBotao() {
    botao.style.left = '50%';
    botao.style.top = '50%';
    botao.style.transform = 'translate(-50%, -50%)';
}

// Evento de passar o mouse sobre o botão
botao.addEventListener('mouseover', () => {
    if (contador < maxTentativas) {
        moverBotao(); // Move o botão para uma posição aleatória
        contador++; // Incrementa o contador
    } else {
        centralizarBotao(); // Na 6ª vez, centraliza o botão
    }
});

// Evento de clique no botão
botao.addEventListener('click', () => {
    if (contador === maxTentativas) {
        
        // Disparar confetes!
        var scalar = 5;
        var heart = confetti.shapeFromText({ text: '❤️', scalar });
        var i = confetti.shapeFromText({ text: 'I', scalar });
        var y = confetti.shapeFromText({ text: 'Y', scalar });
        var o = confetti.shapeFromText({ text: 'O', scalar });
        var u = confetti.shapeFromText({ text: 'U', scalar });


        var defaults = {
        spread: 360,
        ticks: 300,
        gravity: 1,
        decay: 0.96,
        startVelocity: 20,
        shapes: [heart, i, y, o, u],
        scalar
        };

        function shoot() {
        confetti({
            ...defaults,
            particleCount: 100
        });

        confetti({
            ...defaults,
            particleCount: 100,
            flat: true
        });

        confetti({
            ...defaults,
            particleCount: 100,
            scalar: scalar / 2,
            shapes: ['circle']
        });
        }

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);


    }
});