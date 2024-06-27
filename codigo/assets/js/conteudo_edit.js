if(localStorage.getItem('token') == null){
    alert('Esteja logado com seu usuário para acessar essa página')
    window.location.href = 'index.html';
}

const urlconteudos = 'http://localhost:3000/conteudos';
let conteudos = [];
let ultimoId = 0;

function carregaDadosJSONServer(func) {
    fetch(urlconteudos)
        .then(response => response.json())
        .then(dados => {
            conteudos = dados;
            if (conteudos.length > 0) {
                ultimoId = Math.max(...conteudos.map(conteudo => conteudo.id));
            }
            func();
        })
        .catch(error => console.error('Erro ao carregar dados:', error));
}

function carregadados() {
    let tela = document.getElementById('tela');
    let strTextoHTML = '';

    conteudos.forEach(conteudo => {
        strTextoHTML += `
<div id="conteudo_${conteudo.id}" class="py-3">
    <div class="d-flex col">
        <div class="fs-3 ms-2 d-flex justify-content-between">
            <h2>id: ${conteudo.id}</h2>
            <button id="BtnDelconteudo${conteudo.id}" class="ms-5 pb-1"><img src="../assets/images/trash_red.png" alt="" width="40" height="40"></button>
        </div>
    </div>
    <h2>Conteúdo: ${conteudo.nome}</h2>
    <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed text-white buttonF" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne${conteudo.id}" aria-expanded="false" aria-controls="flush-collapseOne${conteudo.id}">
                    Detalhes
                </button>
            </h2>
            <div id="flush-collapseOne${conteudo.id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <strong>Enunciado:</strong> <br>${conteudo.enunciado || 'Não disponível'}<br>
                    <strong>Link:</strong> <br>${conteudo.link ? `<a href="${conteudo.link}" target="_blank">${conteudo.link}</a>` : 'Não disponível'}
                </div>
            </div>
        </div>
    </div>
</div>`;
    });

    tela.innerHTML = strTextoHTML;

    conteudos.forEach(conteudo => {
        document.getElementById(`BtnDelconteudo${conteudo.id}`).addEventListener('click', function() {
            deletaConteudo(conteudo.id);
        });
    });
}

document.getElementById('BtnConfConteudo').addEventListener('click', function() {
    let nome = document.getElementById('InputNome').value;
    let enunciado = document.getElementById('InputEnunciado').value || '';
    let link = document.getElementById('InputLink').value || '';

    if (!nome) {
        alert('Por favor, preencha o campo de nome.');
        return;
    }

    let novoId = ++ultimoId;
    let novoConteudo = {
        id: novoId,
        nome: nome,
        enunciado: enunciado,
        link: link
    };

    fetch(urlconteudos, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoConteudo),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Conteúdo adicionado:', data);
        conteudos.push(data); 
        carregadados();  // Atualiza a UI após adicionar o novo conteúdo
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
});

function deletaConteudo(id) {
    fetch(`${urlconteudos}/${id}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        console.log('Conteúdo deletado:', data);
        conteudos = conteudos.filter(conteudo => conteudo.id !== id);
        carregadados();  // Atualiza a UI após deletar o conteúdo
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}

carregaDadosJSONServer(carregadados);

document.addEventListener('DOMContentLoaded', (event) => {
    function Sair(){
        localStorage.removeItem('token');
        window.location.href = 'index.html';
    }

    const botao = document.getElementById('sair');
    botao.addEventListener('click', Sair);
});