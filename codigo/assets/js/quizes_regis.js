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

  let titulo = document.getElementById('titulo');
  titulo.innerHTML = curso_nome;
  let tela = document.getElementById('tela');
  let strTextoHTML = '';
  let quizesExibidos = [];

  for (let i = 0; i < questoes.length; i++) {
      for (let j = 0; j < cursos.length; j++) {
          if (cursos[j].nome == curso_nome) {
              for (let k = 0; k < cursos[j].quizes.length; k++) {
                  if (questoes[i].quiz == cursos[j].quizes[k] && !quizesExibidos.includes(questoes[i].quiz)) {
                      strTextoHTML += `<h2><a href="quiz_to_quest.html?id=${questoes[i].quiz}">${questoes[i].quiz}</a></h2><br><p class="fw-semibold">questões pertencentes:</p>`;
                      for (let f = 0; f < questoes.length; f++) {
                          if (questoes[f].quiz == cursos[j].quizes[k]) {
                              strTextoHTML += `<br><p>${questoes[f].enunciado}</p>`;
                          }
                      }
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

