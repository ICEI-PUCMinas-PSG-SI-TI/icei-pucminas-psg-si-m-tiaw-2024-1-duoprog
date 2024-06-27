if(localStorage.getItem('token') == null){
    alert('Esteja logado com seu usuário para acessar essa página')
    window.location.href = 'index.html';
}

const urlQuestoes = 'http://localhost:3000/questoes';
let questoes = [];

async function fetchQuestions() {
    try {
        const response = await fetch(urlQuestoes);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        questoes = data.questoes;
        loadQuestions();
        verificarResultadosAnteriores();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function loadQuestions() {
    const quizList = document.getElementById('quizList');
    let quizIndex = 1;

    questoes.forEach((question, index) => {
        const questionId = `question${index + 1}`;
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item text-white';
        listItem.innerHTML = `
            <div class="my-3">
                <h2>${quizIndex}- ${question.enunciado}</h2>
                <div class="xp">
                    <img src="../assets/images/nivel.png" class="rounded float-end me-5 img-xp" alt="img xp">
                    <p class="float-end">+1</p>
                </div>
                <div class="ms-5 mt-3" id="${questionId}">
                    ${question.respostas.map((resposta, i) => `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault${index + 1}" id="flexRadioDefault${index + 1}${i}" value="${question.correta[i]}">
                            <label class="form-check-label" for="flexRadioDefault${index + 1}${i}">${String.fromCharCode(97 + i)}) ${resposta}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        quizList.appendChild(listItem);
        quizIndex++;
    });
}

var condicaoModal;

function coletarValores() {
    let acertos = 0;
    let xps = 0;

    questoes.forEach((question, index) => {
        const answerInputs = document.querySelectorAll(`#question${index + 1} input[type="radio"]:checked`);
        if (answerInputs.length === 0) {
            alert("Responda todas as questões antes de continuar");
            condicaoModal = false;
            return;
        }
        const isCorrect = answerInputs[0].value === 'true';
        if (isCorrect) {
            acertos++;
            xps++;
        }
    });

    if (condicaoModal !== false) {
        document.getElementById('resultado').innerHTML = `
            <p>As respostas corretas eram:<br>${questoes.map((question, index) => `
                ${index + 1}- ${question.enunciado}<br>${question.respostas.map((resposta, i) => `
                    ${String.fromCharCode(97 + i)}) ${resposta} ${question.correta[i] === 'true' ? '<strong>(correta)</strong>' : ''}`).join('<br>')}
            `).join('<br>')}
            <p><strong>Sua quantidade de acertos foi: ${acertos}</strong></p>
            <p><strong>Você conseguiu +${xps} XP !</strong></p>
        `;

        localStorage.setItem('quizResults', JSON.stringify({ acertos: acertos, xps: xps }));
        condicaoModal = true;
    }
}

function abrirModal() {
    if (condicaoModal) {
        new bootstrap.Modal(document.getElementById('exampleModal')).show();
    }
}

function verificarResultadosAnteriores() {
    const resultados = localStorage.getItem('quizResults');
    if (resultados) {
        const parsedResults = JSON.parse(resultados);
        document.getElementById('resultado').innerHTML = `
            <p><strong>Você já respondeu esse quiz.</strong></p>
            <p><strong>Sua quantidade de acertos foi: ${parsedResults.acertos}</strong></p>
            <p><strong>Você conseguiu +${parsedResults.xps} XP !</strong></p>
        `;
        condicaoModal = true;
        abrirModal();

        document.querySelectorAll('input[type="radio"]').forEach(input => {
            input.disabled = true;
        });
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    fetchQuestions();
    
    function Sair(){
        localStorage.removeItem('token');
        window.location.href = 'index.html';
    }

    const botao = document.getElementById('sair');
    botao.addEventListener('click', Sair);
});