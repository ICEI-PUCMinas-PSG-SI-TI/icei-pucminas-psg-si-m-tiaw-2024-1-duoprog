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

function carregadados() {
  let tela = document.getElementById('tela');
  strTextoHTML = '';
  for (let i = 0; i < quizes.length; i++) {
    strTextoHTML +=
      `<div id="curso_${quizes[i].id}:" class="py-3">
                            <div class="d-flex col">
                                <div class="fs-3 ms-2 d-flex justify-content-between">
                                    <h2><a class="link_quiz" href="quiz_to_quest.html?id=${i}">quiz id: ${quizes[i].id}</a></h2>
                                    <button id="BtnDelCurso${quizes[i].id}" class="ms-5 mb-3"><img src="../assets/images/trash_red.png" class="" alt="" width="40" height="45"></button>
                                </div>
                            </div>
                            <h2> Dificuldade: ${quizes[i].dificuldade}</h2>
                        </div>`
  }
  tela.innerHTML = strTextoHTML;

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

