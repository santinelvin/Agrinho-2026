// --- Lógica de Navegação entre as Páginas ---
function mudarPagina(idPagina) {
    // Pega todas as seções que têm a classe 'pagina'
    const paginas = document.querySelectorAll('.pagina');
    
    // Remove a classe 'ativa' de todas elas (esconde todas)
    paginas.forEach(pagina => {
        pagina.classList.remove('ativa');
    });

    // Adiciona a classe 'ativa' apenas na página clicada (mostra ela)
    document.getElementById(idPagina).classList.add('ativa');
}


// --- Lógica do Simulador de Ordenha ---
let nivelLeite = 0;
const incremento = 10; // Quanto o balde enche a cada clique

function tirarLeite() {
    const divLeite = document.getElementById('leite-nivel');
    const mensagem = document.getElementById('mensagem-simulador');

    if (nivelLeite < 100) {
        nivelLeite += incremento;
        divLeite.style.height = nivelLeite + '%';
        
        if (nivelLeite === 100) {
            mensagem.innerText = "Balde cheio! Excelente produção. 🥛";
            mensagem.style.color = "#2e7d32";
        } else {
            mensagem.innerText = `Ordenhando... Balde ${nivelLeite}% cheio.`;
            mensagem.style.color = "#555";
        }
    } else {
        // Se já estiver 100%, esvazia para começar de novo
        nivelLeite = 0;
        divLeite.style.height = '0%';
        mensagem.innerText = "Balde esvaziado. Pronto para a próxima vaca!";
        mensagem.style.color = "#ff9800";
    }
}