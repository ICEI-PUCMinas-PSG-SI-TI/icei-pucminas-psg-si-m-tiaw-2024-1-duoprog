let nome = document.querySelector('#nome');
let label_nome = document.querySelector('#label_nome');
let validar_nome = false;

let email = document.querySelector('#email');
let label_email = document.querySelector('#label_email');
let validar_email = false;

let idade = document.querySelector('#idade');
let label_idade = document.querySelector('#label_idade');
let validar_idade = false;

let cidade = document.querySelector('#cidade');
let label_cidade = document.querySelector('#label_cidade');
let validar_cidade = false;

let senha = document.querySelector('#senha');
let label_senha = document.querySelector('#label_senha');
let validar_senha = false;

let confirmar_senha = document.querySelector('#confirmar_senha');
let label_confirmar_senha = document.querySelector('#label_confirmar_senha');
let validar_confirmar_senha = false;

nome.addEventListener('keyup', () => {
    if(nome.value.length < 4){
        label_nome.setAttribute('style', 'color: red');
        label_nome.innerHTML = 'Nome *Insira mais de 3 caracteres*';
        nome.setAttribute('style', 'border-color: red');
        validar_nome = false;
    }
    else{
        label_nome.setAttribute('style', 'color: green');
        label_nome.innerHTML = 'Nome';
        nome.setAttribute('style', 'border-color: green');
        validar_nome = true;
    }
})

email.addEventListener('keyup', () => {
    if(email.value.trim() === ""){
        label_email.setAttribute('style', 'color: red');
        label_email.innerHTML = 'Email *Campo Obrigatório*';
        email.setAttribute('style', 'border-color: red');
        validar_email = false;
    }
    else{
        label_email.setAttribute('style', 'color: green');
        label_email.innerHTML = 'Email';
        email.setAttribute('style', 'border-color: green');
        validar_email = true;
    }
})

idade.addEventListener('keyup', () => {
    if(idade.value <= 0 || idade.value >= 100){
        label_idade.setAttribute('style', 'color: red');
        label_idade.innerHTML = 'Idade *Insira uma idade válida*';
        idade.setAttribute('style', 'border-color: red');
        validar_idade = false;
    }
    else{
        label_idade.setAttribute('style', 'color: green');
        label_idade.innerHTML = 'Idade';
        idade.setAttribute('style', 'border-color: green');
        validar_idade = true;
    }
})

cidade.addEventListener('keyup', () => {
    if(cidade.value.trim() === ""){
        label_cidade.setAttribute('style', 'color: red');
        label_cidade.innerHTML = 'Cidade *Campo Obrigatório*';
        cidade.setAttribute('style', 'border-color: red');
        validar_cidade = false;
    }
    else{
        label_cidade.setAttribute('style', 'color: green');
        label_cidade.innerHTML = 'Cidade';
        cidade.setAttribute('style', 'border-color: green');
        validar_cidade = true;
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length < 6){
        label_senha.setAttribute('style', 'color: red');
        label_senha.innerHTML = 'Senha *Insira mais de 6 caracteres*';
        senha.setAttribute('style', 'border-color: red');
        validar_senha = false;
    }
    else{
        label_senha.setAttribute('style', 'color: green');
        label_senha.innerHTML = 'Senha';
        nome.setAttribute('style', 'border-color: green');
        validar_senha = true;
    }
})

confirmar_senha.addEventListener('keyup', () => {
    if(senha.value != confirmar_senha.value){
        label_confirmar_senha.setAttribute('style', 'color: red');
        label_confirmar_senha.innerHTML = 'Confirmar senha: As senhas não conferem';
        confirmar_senha.setAttribute('style', 'border-color: red');
        validar_confirmar_senha = false;
    }
    else{
        label_confirmar_senha.setAttribute('style', 'color: green');
        label_confirmar_senha.innerHTML = 'Confirmar senha';
        confirmar_senha.setAttribute('style', 'border-color: green');
        validar_confirmar_senha = true;
    }
})

function Cadastrar() {  

    event.preventDefault();

    if(validar_nome && validar_email && validar_idade && validar_cidade && validar_senha && validar_confirmar_senha){

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push(
            {
                nomeJson: nome.value,
                emailJson: email.value,
                idadeJson: idade.value,
                cidadeJson: cidade.value,
                senhaJson: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        alert('Usuário cadastrado com sucesso');

        window.location.href = 'login.html';

    }
    else{
        alert('Cadastro não feito');
    }
    
}


document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById('cadastro').onclick = Cadastrar;
});