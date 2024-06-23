function FazerLogin() {  

    let nome = document.querySelector('#nome').value.trim();
    let label_nome = document.querySelector('label[for="nome"]');

    let email = document.querySelector('#email').value.trim();
    let label_email = document.querySelector('label[for="email"]');

    let senha = document.querySelector('#senha').value.trim();
    let label_senha = document.querySelector('label[for="senha"]');

    let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

    let validar_user = listaUser.find(user => user.nomeJson === nome && user.emailJson === email && user.senhaJson === senha);

    if (validar_user) {
        
        
        if(nome == 'userAdmin' && senha == '123456' && email == 'userAdmin@gmail.com'){

            window.location.assign('/pages/cursos_regis.html');
        }
        else{
            window.location.href = '/pages/cursos_disponiveis.html'}

    } else {
        
        label_nome.style.color = 'red';
        document.querySelector('#nome').style.borderColor = 'red';

        label_email.style.color = 'red';
        document.querySelector('#email').style.borderColor = 'red';

        label_senha.style.color = 'red';
        document.querySelector('#senha').style.borderColor = 'red';

        alert('Usuário, Senha ou Email incorretos');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('formLogin').addEventListener('submit', FazerLogin);
});
