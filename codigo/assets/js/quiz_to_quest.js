const urlquizes = 'http://localhost:3000/quizes'
let quizes = []

function carregaDadosJSONServer(func) {
  fetch(urlquizes)
    .then(function (response) { return response.json() })
    .then(function (dados) {
      quizes = dados
      func()
    })
}

let params = new URLSearchParams(location.search)
let idlink = params.get('id')

function carregadados() {
  let titulo = document.getElementById('titulo');
  strtitulo = '';
  strtitulo += `quiz id: ${quizes[idlink].id}` 
  titulo.innerHTML=strtitulo;

  let tela = document.getElementById('tela');
  strquiz = '';
for(let i=0;i < quizes[idlink].questoes.length;i++){
    let item_vez = `<div class="questão${quizes[idlink].questoes.id} border-bottom mt-2">
                            <div class="d-flex col">
                                <button id="BtnDelQuest${i}"><img src="../assets/images/trash_red.png" class="" alt="" width="35" height="auto"></button>
                                <div class="fs-3 ms-2 d-flex justify-content-between">
                                    <h2 class="mt-1">${quizes[idlink].questoes[i].enunciado}</h2>
                                    <button id="BtnEditarPerg${[i]}" class="ms-2"><img src="../assets/images/iconizer-botao-editar.svg" class="" alt="" width="40"
                                            height="40"></button></div></div>
                            <ul>
                                <li class="d-flex">
                                    <p class="fs-4" value="${quizes[idlink].questoes[i].correta[0]}" id="resp${i}+0">${quizes[idlink].questoes[i].respostas[0]}</p>
                                </li>
                                <li class="d-flex">
                                    <p class="fs-4" value="${quizes[idlink].questoes[i].correta[1]}" id="resp${i}+1">${quizes[idlink].questoes[i].respostas[1]}</p>
                                </li>
                                <li class="d-flex">
                                    <p class="fs-4" value="${quizes[idlink].questoes[i].correta[2]}" id="resp${i}+2">${quizes[idlink].questoes[i].respostas[2]}</p>
                                </li>
                                <li class="d-flex">
                                    <p class="fs-4" value="${quizes[idlink].questoes[i].correta[3]}" id="resp${i}+3">${quizes[idlink].questoes[i].respostas[3]}</p>
                                </li>
                            </ul>
                        </div>`
    strquiz +=item_vez
}
tela.innerHTML = strquiz;

  for (let i = 0; i < quizes.length; i++) {
    let curso = quizes[i];
    document.getElementById(`BtnDelCurso${curso.id}`).addEventListener('click', function () {
      deletaCurso(curso.id);
    });
  }
}
carregaDadosJSONServer(carregadados)



document.getElementById('BtnConfCurso').addEventListener('click', function () {
  let novoTitulo = document.getElementById('InputTitulo').value;
  let novoQuizF = document.getElementById('InputQuizF').value.split(',').map(Number);
  let novoConteudoF = document.getElementById('InputContF').value.split(',').map(Number);
  let novoQuizM = document.getElementById('InputQuizM').value.split(',').map(Number);
  let novoConteudoM = document.getElementById('InputContM').value.split(',').map(Number);
  let novoQuizD = document.getElementById('InputQuizD').value.split(',').map(Number);
  let novoConteudoD = document.getElementById('InputContD').value.split(',').map(Number);

  let novoCursoObj = {
    titulo: novoTitulo,
    facil: {
      quizes_id: novoQuizF,
      conteudos_id: novoConteudoF
    },
    medio: {
      quizes_id: novoQuizM,
      conteudos_id: novoConteudoM
    },
    dificil: {
      quizes_id: novoQuizD,
      conteudos_id: novoConteudoD
    }
  };

  fetch(urlquizes, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novoCursoObj),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Curso adicionado:', data);
      carregadados();
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
});

function deletaCurso(id) {
  fetch(`${urlquizes}/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      console.log('Curso deletado:', data);
      carregadados();
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
}

