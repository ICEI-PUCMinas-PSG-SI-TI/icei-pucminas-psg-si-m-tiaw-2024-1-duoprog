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
