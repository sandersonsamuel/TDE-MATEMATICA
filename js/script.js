function formatarConjunto(conjunto) {
    return "[" + conjunto.join(", ") + "]";
}


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

document.getElementById('button-q2').addEventListener('click', function() {
    var input = document.getElementById('input-q2').value.split(' ');
    var stack = [];

    for (var i = 0; i < input.length; i++) {
        if (!isNaN(input[i])) {
            stack.push(input[i]);
        } else {
            var a = parseInt(stack.pop());
            var b = parseInt(stack.pop());

            switch (input[i]) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(b - a);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(b / a);
                    break;
                default:
                    break;
            }
        }
    }

    document.getElementById('res-area-q2').innerText = 'Resultado: ' + stack.pop();
});


function calcularFormaPosFixa(expressao) {
    const pilha = [];
    const saida = [];
    const precedencia = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    for (const token of expressao.split(' ')) {
        if (!isNaN(token)) {
            
            saida.push(parseFloat(token));
        } else if (token in precedencia) {
            
            while (pilha.length > 0 && precedencia[token] <= precedencia[pilha[pilha.length - 1]]) {
                saida.push(pilha.pop());
            }
            pilha.push(token);
        } else if (token === '(') {
            pilha.push(token);
        } else if (token === ')') {
            
            while (pilha.length > 0 && pilha[pilha.length - 1] !== '(') {
                saida.push(pilha.pop());
            }
            pilha.pop();
        }
    }


    while (pilha.length > 0) {
        saida.push(pilha.pop());
    }

    return saida.join(' ');
}

document.getElementById('button-q7-a').addEventListener('click', function() {
    var input = document.getElementById('input-q7-a').value.split(',').map(Number);
    var a = input[0];
    var b = input[1];
    var n = input[2];
    var result = 0;

    function factorial(num) {
        var rval = 1;
        for (var i = 2; i <= num; i++)
            rval *= i;
        return rval;
    }

    for (var r = 0; r <= n; r++) {
        result += factorial(n) / (factorial(r) * factorial(n - r)) * Math.pow(a, n - r) * Math.pow(b, r);
    }

    document.getElementById('res-area-q7-a').innerText = 'Resultado: ' + result;
});


document.getElementById('button-q4').addEventListener('click', function() {
    var input = document.getElementById('input-q4').value.split(',').map(Number);
    var n = input[0];
    var r = input[1];

    function factorial(num) {
        var rval = 1;
        for (var i = 2; i <= num; i++)
            rval *= i;
        return rval;
    }

    var result = factorial(n) / factorial(n - r);

    document.getElementById('res-area-q4').innerText = 'Resultado: ' + result;
});

document.getElementById('button-q5').addEventListener('click', function() {
    var input = document.getElementById('input-q5').value.split(',').map(Number);
    var n = input[0];
    var r = input[1];

    function factorial(num) {
        var rval = 1;
        for (var i = 2; i <= num; i++)
            rval *= i;
        return rval;
    }

    var result = factorial(n) / (factorial(r) * factorial(n - r));

    document.getElementById('res-area-q5').innerText = 'Resultado: ' + result;
});

document.getElementById('button-q6').addEventListener('click', function() {
    var n = parseInt(document.getElementById('input-q6').value);
    var results = [];

    function factorial(num) {
        var rval = 1;
        for (var i = 2; i <= num; i++)
            rval *= i;
        return rval;
    }

    for (var r = 0; r <= n; r++) {
        var result = factorial(n) / (factorial(r) * factorial(n - r));
        results.push('C(' + n + ', ' + r + ') = ' + result);
    }

    document.getElementById('res-area-q6').innerText = 'Resultados: \n' + results.join('\n');
});

document.getElementById('button-q7-b').addEventListener('click', function() {
    var input = document.getElementById('input-q7-b').value.split(',').map(Number);
    var a = input[0];
    var b = input[1];
    var n = input[2];

    var result = Math.pow(a + b, n);

    document.getElementById('res-area-q7-b').innerText = 'Resultado: ' + result;
});

const sobreQ1 = document.getElementById("sobre-q1");
sobreQ1.addEventListener("click", function (){
    const sobreq1 = document.getElementById("sobre-q1-id");
    if (sobreq1.style.display === "none" || sobreq1.style.display === "") {
        sobreq1.style.display = "inline";
    } else {
        sobreq1.style.display = "none";
    }
});

const sobreQ2 = document.getElementById("sobre-q2");
sobreQ2.addEventListener("click", function (){
    const sobreq2 = document.getElementById("sobre-q2-id");
    if (sobreq2.style.display === "none" || sobreq2.style.display === "") {
        sobreq2.style.display = "inline";
    } else {
        sobreq2.style.display = "none";
    }
});

const sobreQ3 = document.getElementById("sobre-q3");
sobreQ3.addEventListener("click", function (){
    const sobreq3 = document.getElementById("sobre-q3-id");
    if (sobreq3.style.display === "none" || sobreq3.style.display === "") {
        sobreq3.style.display = "inline";
    } else {
        sobreq3.style.display = "none";
    }
});

const sobreQ4 = document.getElementById("sobre-q4");
sobreQ4.addEventListener("click", function (){
    const sobreq4 = document.getElementById("sobre-q4-id");
    if (sobreq4.style.display === "none" || sobreq4.style.display === "") {
        sobreq4.style.display = "inline";
    } else {
        sobreq4.style.display = "none";
    }
});

const sobreQ5 = document.getElementById("sobre-q5");
sobreQ5.addEventListener("click", function (){
    const sobreq5 = document.getElementById("sobre-q5-id");
    if (sobreq5.style.display === "none" || sobreq5.style.display === "") {
        sobreq5.style.display = "inline";
    } else {
        sobreq5.style.display = "none";
    }
});

const sobreQ6 = document.getElementById("sobre-q6");
sobreQ6.addEventListener("click", function (){
    const sobreq6 = document.getElementById("sobre-q6-id");
    if (sobreq6.style.display === "none" || sobreq6.style.display === "") {
        sobreq6.style.display = "inline";
    } else {
        sobreq6.style.display = "none";
    }
});

const sobreQ7a = document.getElementById("sobre-q7-a");
sobreQ7a.addEventListener("click", function (){
    const sobreq7a = document.getElementById("sobre-q7-a-id");
    if (sobreq7a.style.display === "none" || sobreq7a.style.display === "") {
        sobreq7a.style.display = "inline";
    } else {
        sobreq7a.style.display = "none";
    }
});

const sobreQ7b = document.getElementById("sobre-q7-b");
sobreQ7b.addEventListener("click", function (){
    const sobreq7b = document.getElementById("sobre-q7-b-id");
    if (sobreq7b.style.display === "none" || sobreq7b.style.display === "") {
        sobreq7b.style.display = "inline";
    } else {
        sobreq7b.style.display = "none";
    }
});



const botaoQ1 = document.getElementById("button-q1");
botaoQ1.addEventListener("click", function () {
    const entradaQ1 = document.getElementById("input-q1").value;
    const resAreaQ1 = document.getElementById("res-area-q1");

    const conjunto = entradaQ1
        .replace(/\s/g, "")
        .split(",")
        .map(Number);

    const subconjuntos = calcularSubconjuntos(conjunto);
    const subconjuntosFormatados = subconjuntos.map(formatarConjunto);
    resAreaQ1.innerHTML = "Subconjuntos possíveis:<br>" + subconjuntosFormatados.join(", ");
});

const botaoQ3 = document.getElementById('button-q3');
botaoQ3.addEventListener('click', () => {
    const expressao = document.getElementById('input-q3').value;
    const resultado = calcularFormaPosFixa(expressao);
    document.getElementById('res-area-q3').innerText = 'Forma pós-fixa: ' + resultado;
});