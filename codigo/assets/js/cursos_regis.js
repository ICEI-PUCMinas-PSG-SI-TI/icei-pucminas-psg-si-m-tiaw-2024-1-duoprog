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
                    strTextoHTML += `<h2><button class="me-2" id="BtnDelquestao${cursos[i].id}"><img src="../assets/images/trash_red.png" class="" alt=""
                width="35" height="auto"></button><a href="quizes_regis.html?id=${cursos[i].nome}">${cursos[i].nome}</a></h2><br><p class="fw-semibold">quizes pertencentes:</p>`
                    for(let j = 0;j < cursos[i].quizes.length; j++){
                      strTextoHTML += `<br><p>${cursos[i].quizes[j]}</p>`
                    }
                }
            tela.innerHTML = strTextoHTML;

            for (let i = 0; i < cursos.length; i++) {
                    const btnDelQuestao = document.getElementById(`BtnDelquestao${cursos[i].id}`);
                    btnDelQuestao.addEventListener('click', () => {
                        deletarQuestao(cursos[i].id);
                    });
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
carregaDadosJSONServer (carregadados)

document.getElementById('BtnConfCurso').addEventListener('click', function() {
    let novoTitulo = document.getElementById('InputTitulo').value;
    let novoQuizes = document.getElementById('InputQuizes').value.split(',');
    let novoDescricao = document.getElementById('InputDesc').value;

  
    let novoCursoObj = {
      nome: novoTitulo,
      quizes: novoQuizes,
      descricao: novoDescricao
    };
  
    fetch(urlCursos, {
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
    const urlDeletarQuestao = `http://localhost:3000/cursos/${id}`;

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






if(localStorage.getItem('token') == null){
    alert('Esteja logado com seu usuário para acessar essa página')
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', (event) => {
    function Sair(){
        localStorage.removeItem('token');
        window.location.href = 'index.html';
    }

    const botao = document.getElementById('sair');
    botao.addEventListener('click', Sair);
});