let email = document.querySelector('#email');
let label_email = document.querySelector('label[for="email"]');
let validar_email = false;

let senha = document.querySelector('#senha');
let label_senha = document.querySelector('label[for="senha"]');
let validar_senha= false;

let confirmar_senha = document.querySelector('#confirmar_senha');
let label_confirmar_senha = document.querySelector('label[for="confirmar_senha"]');
let validar_confirmar_senha = false;


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

function TrocarSenha() {
    if(validar_email && validar_senha && validar_confirmar_senha){
    
        let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

        console.log(listaUser);

        let usuarioEncontrado = listaUser.find(user => user.emailJson === email);

        if (usuarioEncontrado) {
            if (senha === confirmar_senha) {
                usuarioEncontrado.senhaJson = senha;
                localStorage.setItem('listaUser', JSON.stringify(listaUser));
                alert('Senha alterada com sucesso');
                window.location.href = 'login.html';
            } else {
               
                label_senha.style.color = 'red';
                document.querySelector('#senha').style.borderColor = 'red';

                label_confirmar_senha.style.color = 'red';
                document.querySelector('#confirmar_senha').style.borderColor = 'red';

                alert('As senhas não coincidem');
            }
        } else {
            
            label_email.style.color = 'red';
            document.querySelector('#email').style.borderColor = 'red';

            alert('Email não cadastrado');
        }
    }
    else{
        alert('Por Favor, preencha os campos corretamente');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('formTrocaSenha').addEventListener('submit', TrocarSenha);
});
