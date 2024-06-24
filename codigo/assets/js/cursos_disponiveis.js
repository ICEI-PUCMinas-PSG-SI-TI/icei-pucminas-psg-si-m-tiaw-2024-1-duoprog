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
                    strTextoHTML += `<div class="col-lg-4 col-md-6 col-sm-12 border text-center card-cursos mb-5 mt-3 mx-2">
                <div class="d-flex justify-content-end">
                    <img src="${cursos[i].imagem}" alt="" class="icon_acessar_curso mt-2">
                </div>
                <a href="quiz_select.html?id=${cursos[i].nome}"><p class="btn-entrar text-end mb-0">Entrar</p></a>
                <img src="../assets/images/algoritmo.png" alt="" class="fotos_cards_cursos img-fluid mb-3">
                <h3 class="border-bottom pb-3 mb-3">${cursos[i].nome}</h3>
                <p>${cursos[i].descricao}</p>
            </div>`
                }
            tela.innerHTML = strTextoHTML;
}
carregaDadosJSONServer (carregadados)