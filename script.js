// ==========================================
// 1. CONTADOR REGRESSIVO PARA A COPA DO MUNDO
// ==========================================

// Defina a data de início da Copa do Mundo (Exemplo: 11 de Junho de 2026)
const dataCopa = new Date("June 11, 2026 00:00:00").getTime();

function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = dataCopa - agora;

    if (diferenca > 0) {
        // Cálculos de dias, horas, minutos e segundos
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        // Atualiza o HTML (certifique-se de ter um elemento com id="contador")
        const elementoContador = document.getElementById("contador");
        if (elementoContador) {
            elementoContador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }
    } else {
        document.getElementById("contador").innerHTML = "A Copa do Mundo Começou!";
    }
}

// Atualiza o contador a cada 1 segundo (1000 milissegundos)
setInterval(atualizarContador, 1000);


// ==========================================
// 2. FILTRO SIMPLES DE JOGOS
// ==========================================

const jogos = [
    { selecao1: "Brasil", selecao2: "Sérvia", grupo: "A", data: "11/06" },
    { selecao1: "França", selecao2: "Austrália", grupo: "B", data: "12/06" },
    { selecao1: "Argentina", selecao2: "México", grupo: "C", data: "13/06" },
    { selecao1: "Brasil", selecao2: "Suíça", grupo: "A", data: "16/06" }
];

function buscarJogosPorSelecao(nomeSelecao) {
    const resultados = jogos.filter(jogo => 
        jogo.selecao1.toLowerCase() === nomeSelecao.toLowerCase() || 
        jogo.selecao2.toLowerCase() === nomeSelecao.toLowerCase()
    );

    console.log(`Jogos encontrados para ${nomeSelecao}:`, resultados);
    return resultados;
}


// ==========================================
// 3. VOTAÇÃO DO FAVORITO DO PÚBLICO
// ==========================================

let votos = {
    Brasil: 0,
    Argentina: 0,
    França: 0
};

function votar(selecao) {
    if (votos.hasOwnProperty(selecao)) {
        votos[selecao] += 1;
        alert(`Obrigado pelo seu voto! ${selecao} agora tem ${votos[selecao]} voto(s).`);
    } else {
        alert("Seleção inválida para votação.");
    }
}
