var condicaoModal;

function coletarValores() {
    var answer1inputs = document.querySelectorAll('#question1 input[type="radio"]:checked');
    var answer2inputs = document.querySelectorAll('#question2 input[type="radio"]:checked');
    var answer3inputs = document.querySelectorAll('#question3 input[type="radio"]:checked');
    var answer4inputs = document.querySelectorAll('#question4 input[type="radio"]:checked');

    if (answer1inputs.length === 0 || answer2inputs.length === 0 || answer3inputs.length === 0 || answer4inputs.length === 0) {
        alert("Responda todas as questões antes de continuar");
        condicaoModal = false;
    } else {
        var answer1Valor = answer1inputs.length > 0 ? answer1inputs[0].value : "false";
        var answer2Valor = answer2inputs.length > 0 ? answer2inputs[0].value : "false";
        var answer3Valor = answer3inputs.length > 0 ? answer3inputs[0].value : "false";
        var answer4Valor = answer4inputs.length > 0 ? answer4inputs[0].value : "false";

        var acertos = 0;
        var xps = 0;

        if (answer1Valor == 'c') {
            acertos++;
            xps++;
        }
        if (answer2Valor == 'b') {
            acertos++;
            xps++;
        }
        if (answer3Valor == 'c') {
            acertos++;
            xps += 2;
        }
        if (answer4Valor == 'b') {
            acertos++;
            xps++;
        }

        document.getElementById('resultado').innerHTML = `
            <p>As respostas corretas eram:<br>1- c) Um texto que o computador ignora<br>2- b) Um conjunto de instruções para resolver um problema<br>3- c) Uma estrutura que executa um bloco de código apenas se uma condição for verdadeira<br>4- b) 1</p>
            <p><strong>Sua quantidade de acertos foi: ${acertos}</strong></p>
            <p><strong>Você conseguiu +${xps} XP !</strong></p>
        `;

        localStorage.setItem('quizResults', JSON.stringify({ acertos: acertos, xps: xps }));

        condicaoModal = true;
    }
}

function abrirModal() {
    if (condicaoModal) {
        $('#exampleModal').modal('show');
    }
}

function verificarResultadosAnteriores() {
    var resultados = localStorage.getItem('quizResults');
    if (resultados) {
        var parsedResults = JSON.parse(resultados);
        document.getElementById('resultado').innerHTML = `
            <p><strong>Você já respondeu esse quiz.</strong></p>
            <p><strong>Sua quantidade de acertos foi: ${parsedResults.acertos}</strong></p>
            <p><strong>Você conseguiu +${parsedResults.xps} XP !</strong></p>
        `;
        condicaoModal = true;
        abrirModal();

        document.querySelectorAll('input[type="radio"]').forEach(function (input) {
            input.disabled = true;
        });
    }
}

document.addEventListener('DOMContentLoaded', verificarResultadosAnteriores);