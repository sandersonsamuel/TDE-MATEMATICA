// Função para formatar um conjunto como uma string entre colchetes
function formatarConjunto(conjunto) {
    return "[" + conjunto.join(", ") + "]";
}

// Função para calcular os subconjuntos de um conjunto S
function calcularSubconjuntos(conjunto) {
    const subconjuntos = [[]];
    
    for (let i = 0; i < conjunto.length; i++) {
        const tamanhoAtual = subconjuntos.length;
        for (let j = 0; j < tamanhoAtual; j++) {
            const novoSubconjunto = [...subconjuntos[j], conjunto[i]];
            subconjuntos.push(novoSubconjunto);
        }
    }
    
    return subconjuntos;
}

// Função para calcular o valor de uma expressão pós-fixa
function calcularExpressaoPosFixa(expressao) {
    const pilha = [];
    const tokens = expressao.split(" ");
    for (const token of tokens) {
        if (!isNaN(token)) {
            pilha.push(parseFloat(token));
        } else {
            const operando2 = pilha.pop();
            const operando1 = pilha.pop();
            switch (token) {
                case "+":
                    pilha.push(operando1 + operando2);
                    break;
                case "-":
                    pilha.push(operando1 - operando2);
                    break;
                case "*":
                    pilha.push(operando1 * operando2);
                    break;
                case "/":
                    pilha.push(operando1 / operando2);
                    break;
                case "^":
                    pilha.push(Math.pow(operando1, operando2));
                    break;
                default:
                    return "Erro: Operador desconhecido";
            }
        }
    }
    return pilha.pop();
}


// Adicionar ouvintes de eventos para os botões das questões
document.addEventListener("DOMContentLoaded", function () {
    const botaoQ1 = document.getElementById("button-q1");
    const botaoQ2 = document.getElementById("button-q2");

    botaoQ1.addEventListener("click", function () {
        const entradaQ1 = document.getElementById("input-q1").value;
        const resAreaQ1 = document.getElementById("res-area-q1");

        const conjunto = entradaQ1
            .replace(/\s/g, "") // Remover espaços em branco
            .split(",")
            .map(Number);

        const subconjuntos = calcularSubconjuntos(conjunto);
        const subconjuntosFormatados = subconjuntos.map(formatarConjunto); // Formatando os subconjuntos
        resAreaQ1.innerHTML = "Subconjuntos possíveis:<br>" + subconjuntosFormatados.join(", ");
    });

    botaoQ2.addEventListener("click", function () {
        const entradaQ2 = document.getElementById("input-q2").value;
        const resAreaQ2 = document.getElementById("res-area-q2");

        const resultado = calcularExpressaoPosFixa(entradaQ2);
        resAreaQ2.innerHTML = "Resultado da Expressão: " + resultado;
    });

    // Adicione aqui os ouvintes de eventos para as outras questões...
});
