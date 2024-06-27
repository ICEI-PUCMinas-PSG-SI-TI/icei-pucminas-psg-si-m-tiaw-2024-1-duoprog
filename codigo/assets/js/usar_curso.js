if(localStorage.getItem('token') == null){
    alert('Esteja logado com seu usuário para acessar essa página')
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function () {
    carregaDados();
});

function carregaDados() {
    fetch('http://localhost:3000/conteudos')
        .then(response => response.json())
        .then(data => {
            let strTextoHTML = '';

            data.forEach(conteudo => {
                strTextoHTML += `
                    <div class="col-12 col-md-4">
                        <p class="bg-dark text-light text-center">
                            <a href="usar_conteudo.html?id=${conteudo.id}" class="text-light text-decoration-none">${conteudo.nome}</a>
                        </p>
                    </div>`;
            });

            document.getElementById('repositorios').innerHTML = strTextoHTML;
        })
        .catch(error => console.error('Error fetching repository data:', error));
}

document.addEventListener('DOMContentLoaded', (event) => {
    function Sair(){
        localStorage.removeItem('token');
        window.location.href = 'index.html';
    }

    const botao = document.getElementById('sair');
    botao.addEventListener('click', Sair);
});