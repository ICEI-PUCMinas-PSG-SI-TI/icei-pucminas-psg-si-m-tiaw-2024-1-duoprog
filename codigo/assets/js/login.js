function FazerLogin() {  

    let nome = document.querySelector('#nome');
    let label_nome = document.querySelector('#label_nome');

    let email = document.querySelector('#email');
    let label_email = document.querySelector('#label_email');

    let senha = document.querySelector('#senha');
    let label_senha = document.querySelector('#label_senha');

    let listaUser = [];

    let validar_user = {
        nome: '',
        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.FazerLogin((item) => {
        if(nome.value == item.nomeJson && email.value == item.emailJson && senha.value == item.senhaJson){
            validar_user = {
                nome: item.nomeJson,
                email: item.emailJson,
                senha: item.senhaJson
            }

        }
    })

    if(nome.value == validar_user.nome && email.value == validar_user.email && senha.value == validar_user.senha){
        //levar para a tela se cursos com window.location.ref
        alert('deu bom')
    }else{
        label_nome.setAttribute('style', 'color: red');
        nome.setAttribute('style', 'border-color: red');

        label_email.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');

        label_senha.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');

        alert('Usuário, Senha, ou Email incorretos');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById('entrar').onclick = FazerLogin;
});