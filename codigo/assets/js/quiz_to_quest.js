if(localStorage.getItem('token') == null){
    alert('Esteja logado com seu usuário para acessar essa página')
    window.location.href = 'index.html';
}

const urlquestoes = 'http://localhost:3000/questoes'
let questoes = []
const urlCursos = 'http://localhost:3000/cursos'
let cursos = []
var resp_certa;

function carregaDadosJSONServer (func) {
    fetch(urlquestoes)
        .then (function (response) { return response.json() })
        .then (function (dados) {
            questoes = dados
            console.log ('Dados carregados!')
            func ()
        })
}
function carregaDadosJSONServer2 (func) {
    fetch(urlCursos)
        .then (function (response) { return response.json() })
        .then (function (dados) {
            cursos = dados
            console.log ('Dados carregados!')
            func ()
        })
}
let params = new URLSearchParams(location.search)
let quiz_nome = params.get('id')

function carregaDados() {
  let titulo = document.getElementById('titulo');
  titulo.innerHTML = quiz_nome;

    let tela = document.getElementById('tela');
    strquestao = '';
    for (let i = 0; i < questoes.length; i++) 
        {
            if(questoes[i].quiz == quiz_nome){
                strquestao += `<div class="border-bottom mt-2">
    <div class="d-flex col">
        <button id="BtnDelquestao${questoes[i].id}"><img src="../assets/images/trash_red.png" class="" alt=""
                width="35" height="auto"></button>
        <div class="fs-3 ms-2 d-flex justify-content-between">
            <h2 class="mt-1">${questoes[i].enunciado}</h2>
        </div>
    </div>
    <ul>
        <li class="d-flex">
            <p class="fs-4" id="">
                ${questoes[i].respostas[0]}</p>
        </li>
        <li class="d-flex">
            <p class="fs-4" id="">
                ${questoes[i].respostas[1]}</p>
        </li>
        <li class="d-flex">
            <p class="fs-4" id="">
                ${questoes[i].respostas[2]}</p>
        </li>
        <li class="d-flex">
            <p class="fs-4" id="">
                ${questoes[i].respostas[3]}</p>
        </li>
    </ul>
</div>` 
            }
        }
        tela.innerHTML = strquestao;

        for (let i = 0; i < questoes.length; i++) {
            if (questoes[i].quiz == quiz_nome) {
                const btnDelQuestao = document.getElementById(`BtnDelquestao${questoes[i].id}`);
                btnDelQuestao.addEventListener('click', () => {
                    deletarQuestao(questoes[i].id);
                });
            }
        }

        let jaExiste = document.getElementById('jaExiste');
    strexiste = '';
    for(let i = 0; i < cursos.length; i++){
        for(let j = 0; j < cursos[i].quizes.length; j++){
            strexiste += `<li class="fs-3"><u>${cursos[i].quizes[j]}</u></li>`;
        }
    }
    jaExiste.innerHTML = strexiste;
}
carregaDadosJSONServer (carregaDados)
carregaDadosJSONServer2 (carregaDados)

const formCheckInputs = document.querySelectorAll('.form-check-input');
formCheckInputs.forEach(function(input, index) {
    input.addEventListener('change', function() {
        if (this.checked) {
            resp_certa = index;
        }
    });
});

document.getElementById('BtnConfCurso').addEventListener('click', function() {
    let novoQuiz = document.getElementById('InputQuiz').value;
    let novoEnunciado = document.getElementById('InputPerg').value;
    let novoQuestao1 = document.getElementById('InputQuest1').value;
    let novoQuestao2 = document.getElementById('InputQuest2').value;
    let novoQuestao3 = document.getElementById('InputQuest3').value;
    let novoQuestao4 = document.getElementById('InputQuest4').value;
    let novaCorreta;
    switch(resp_certa){
        case(0):
        novaCorreta = [true,false,false,false]
        break;
        case(1):
        novaCorreta = [false,true,false,false]
        break;
        case(2):
        novaCorreta = [false,false,true,false]
        break;
        case(3):
        novaCorreta = [false,false,false,true]
        break;
        default:
        novaCorreta = [true,true,true,true]
        break;
    }

  
    let novoCursoObj = {
     quiz: novoQuiz,
     enunciado: novoEnunciado,
     respostas: [novoQuestao1,novoQuestao2,novoQuestao3,novoQuestao4],
     correta: novaCorreta
    };
  
    fetch(urlquestoes, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoCursoObj),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Curso adicionado:', data);
        jogos.push(data);
        carregaDados();
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
  });

  function deletarQuestao(id) {
    const urlDeletarQuestao = `http://localhost:3000/questoes/${id}`;

    fetch(urlDeletarQuestao, {
        method: 'DELETE',
    })
        .then((response) => {
            if (response.ok) {
                console.log(`Questão com ID ${id} foi excluída com sucesso.`);
                carregaDados();
            } else {
                console.error(`Erro ao excluir a questão com ID ${id}.`);
            }
        })
        .catch((error) => {
            console.error('Erro na requisição:', error);
        });
}

document.addEventListener('DOMContentLoaded', (event) => {
    function Sair(){
        localStorage.removeItem('token');
        window.location.href = 'index.html';
    }

    const botao = document.getElementById('sair');
    botao.addEventListener('click', Sair);
});