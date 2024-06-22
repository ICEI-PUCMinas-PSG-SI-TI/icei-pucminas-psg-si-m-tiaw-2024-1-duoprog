const urlquestoes = 'http://localhost:3000/questoes'
let questoes = []

function carregaDadosJSONServer (func) {
    fetch(urlquestoes)
        .then (function (response) { return response.json() })
        .then (function (dados) {
            questoes = dados
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
        <button id=""><img src="../assets/images/trash_red.png" class="" alt=""
                width="35" height="auto"></button>
        <div class="fs-3 ms-2 d-flex justify-content-between">
            <h2 class="mt-1">${questoes[i].enunciado}</h2>
            <button id="" class="ms-2"><img
                    src="../assets/images/iconizer-botao-editar.svg" class="" alt="" width="40"
                    height="40"></button>
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
}
carregaDadosJSONServer (carregaDados)