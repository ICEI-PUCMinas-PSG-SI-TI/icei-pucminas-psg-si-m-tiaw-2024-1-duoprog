if(localStorage.getItem('token') == null){
    alert('Esteja logado com seu usuário para acessar essa página')
    window.location.href = 'index.html';
}

const urlQuestoes = 'http://localhost:3000/questoes'
let questoes = []
const urlCursos = 'http://localhost:3000/cursos'
let cursos = []

function carregaDadosJSONServer1(func) {
    fetch(urlQuestoes)
        .then(function (response) { return response.json() })
        .then(function (dados) {
            questoes = dados
            console.log('Dados carregados!')
            func()
        })
}
function carregaDadosJSONServer2(func) {
    fetch(urlCursos)
        .then(function (response) { return response.json() })
        .then(function (dados) {
            cursos = dados
            console.log('Dados carregados!')
            func()
        })
}

let params = new URLSearchParams(location.search)
let curso_nome = params.get('id')

function carregaDados() {

  let tela = document.getElementById('tela');
  let strTextoHTML = '';
  let quizesExibidos = [];

  for (let i = 0; i < questoes.length; i++) {
      for (let j = 0; j < cursos.length; j++) {
          if (cursos[j].nome == curso_nome) {
              for (let k = 0; k < cursos[j].quizes.length; k++) {
                  if (questoes[i].quiz == cursos[j].quizes[k] && !quizesExibidos.includes(questoes[i].quiz)) {
                      strTextoHTML += `<div class="col-lg-4 col-md-6 col-sm-12 border text-center card-cursos mb-5 mt-3 mx-2">
                <div class="d-flex justify-content-end">
                </div>
                <a href="quest_resp.html?id=${questoes[i].quiz}"><p class="btn-entrar text-end mb-0">Entrar</p></a>
                <img src="../assets/images/algoritmo.png" alt="" class="fotos_cards_cursos img-fluid mb-3">
                <h3 class="border-bottom pb-3 mb-3">${questoes[i].quiz}</h3>
            </div>`;
                      quizesExibidos.push(questoes[i].quiz);
                  }
              }
          }
      }
  }

  tela.innerHTML = strTextoHTML;
}


carregaDadosJSONServer1(carregaDados);
carregaDadosJSONServer2(carregaDados);

document.addEventListener('DOMContentLoaded', (event) => {
    function Sair(){
        localStorage.removeItem('token');
        window.location.href = 'index.html';
    }

    const botao = document.getElementById('sair');
    botao.addEventListener('click', Sair);
});