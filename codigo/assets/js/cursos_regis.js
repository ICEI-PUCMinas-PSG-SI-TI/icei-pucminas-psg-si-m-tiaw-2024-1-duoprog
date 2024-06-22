const urlCursos = 'http://localhost:3000/cursos'
let cursos = []

function carregaDadosJSONServer (func) {
    fetch(urlCursos)
        .then (function (response) { return response.json() })
        .then (function (dados) {
            cursos = dados
            console.log ('Dados carregados!')
            func ()
        })
}

function carregadados(){
  let tela = document.getElementById('tela');
            strTextoHTML = '';
            for (let i = 0; i < cursos.length; i++) 
                {               
                    strTextoHTML += `<h2><a href="quizes_regis.html?id=${cursos[i].nome}">${cursos[i].nome}</a></h2><br><p class="fw-semibold">quizes pertencentes:</p>`
                    for(let j = 0;j < cursos[i].quizes.length; j++){
                      strTextoHTML += `<br><p>${cursos[i].quizes[j]}</p>`
                    }
                }
            tela.innerHTML = strTextoHTML;
}
carregaDadosJSONServer (carregadados)



document.getElementById('BtnConfCurso').addEventListener('click', function() {
  

  fetch(urlcursos, {
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
  fetch(`${urlcursos}/${id}`, {
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

