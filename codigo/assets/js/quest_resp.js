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
        <div class="fs-3 ms-2 d-flex justify-content-between">
            <h2 class="mt-1">${questoes[i].enunciado}</h2>
        </div>
    </div>
    <ul>
        <li class="d-flex">
            <p class="fs-4" id="">
                ${questoes[i].respostas[0]}</p>
                                            <div class="ms-3 form-check col-md-7 pt-2">
    <input class="form-check-input" type="radio" name="flexRadioDefault${i}"
        id="op1${i}" value="${questoes[i].correta[0]}">
</div>
        </li>
        <li class="d-flex">
            <p class="fs-4" id="">
                ${questoes[i].respostas[1]}</p>
                                            <div class="ms-3 form-check col-md-7 pt-2">
    <input class="form-check-input" type="radio" name="flexRadioDefault${i}"
        id="op2${i}" value="${questoes[i].correta[1]}">
</div>
        </li>
        <li class="d-flex">
            <p class="fs-4" id="">
                ${questoes[i].respostas[2]}</p>
                                            <div class="ms-3 form-check col-md-7 pt-2">
    <input class="form-check-input" type="radio" name="flexRadioDefault${i}"
        id="op3${i}" value="${questoes[i].correta[2]}">
</div>
        </li>
        <li class="d-flex">
            <p class="fs-4" id="">
                ${questoes[i].respostas[3]}</p>
                                           <div class="ms-3 form-check col-md-7 pt-2">
    <input class="form-check-input" type="radio" name="flexRadioDefault${i}"
        id="op4${i}" value="${questoes[i].correta[3]}">
</div>
        </li>
    </ul>
</div>` 
            }
        }
        tela.innerHTML = strquestao;
}
carregaDadosJSONServer (carregaDados)
carregaDadosJSONServer2 (carregaDados)

var resultado = 0;
document.getElementById("BtnConfCurso").addEventListener("click", function() {
    const formCheckInputs = document.querySelectorAll(".form-check-input");
    formCheckInputs.forEach(function(input) {
        if (input.value === "correta" && input.checked) {
            resultado++;
        }
    });
    let tela = document.getElementById('tela');
    strresultado = '';
    strresultado += `<div><p class="text-center fs-1">resultado: ${resultado}</p><br><p class="text-center fs-1">voltar para <a href="">cursos</a></p></div>`
    tela.innerHTML = strresultado;
});
