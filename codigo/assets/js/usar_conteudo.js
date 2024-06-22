document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetch(`http://localhost:3000/conteudos/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (!data) {
                throw new Error('Dados do conteúdo não encontrados');
            }

            let strTextoHTML = `
                <h3 class="border-bottom border-dark border-2">${data.nome}</h3>
                <div class="col-12 col-md-11">
                    <p class="texto"><font color="lightblue">Enunciado:</font><br>${data.enunciado || 'Não disponível'}</p>
                    <p class="texto"><font color="lightblue">Link do vídeo:</font><br>${data.link ? `<a href="${data.link}" target="_blank">${data.link}</a>` : 'Não disponível'}</p>
                </div>`;

            document.getElementById('info').innerHTML = strTextoHTML;
        })
        .catch(error => {
            console.error('Erro ao buscar dados do conteúdo:', error);
            document.getElementById('info').innerHTML = `<p>Erro ao carregar dados do conteúdo: ${error.message}</p>`;
        });
});
