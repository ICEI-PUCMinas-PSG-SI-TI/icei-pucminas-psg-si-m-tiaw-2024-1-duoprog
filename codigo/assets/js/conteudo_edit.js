const urlconteudos = 'http://localhost:3000/conteudos';
let conteudos = [];

function carregaDadosJSONServer(func) {
    fetch(urlconteudos)
        .then(response => response.json())
        .then(dados => {
            conteudos = dados;
            func();
        })
        .catch(error => console.error('Erro ao carregar dados:', error));
}

function carregadados() {
    let tela = document.getElementById('tela');
    let strTextoHTML = '';

    conteudos.forEach(conteudo => {
        let contFacil = conteudo.facil && conteudo.facil.material
                        ? conteudo.facil.material.map(mat => `id: ${mat.id}, enunciado: ${mat.enunciado}`).join('<br>') 
                        : 'Sem conteúdos fáceis';
        let contMedio = conteudo.medio && conteudo.medio.material
                        ? conteudo.medio.material.map(mat => `id: ${mat.id}, enunciado: ${mat.enunciado}`).join('<br>') 
                        : 'Sem conteúdos médios';
        let contDificil = conteudo.dificil && conteudo.dificil.material
                        ? conteudo.dificil.material.map(mat => `id: ${mat.id}, enunciado: ${mat.enunciado}`).join('<br>') 
                        : 'Sem conteúdos difíceis';

        strTextoHTML += `
<div id="conteudo_${conteudo.id}" class="py-3">
    <div class="d-flex col">
        <div class="fs-3 ms-2 d-flex justify-content-between">
            <h2>id: ${conteudo.id}</h2>
            <button id="BtnDelconteudo${conteudo.id}" class="ms-5 pb-1"><img src="../assets/images/trash_red.png" alt="" width="40" height="40"></button>
        </div>
    </div>
    <h2>conteúdo: ${conteudo.titulo}</h2>
    <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed text-white buttonF" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne${conteudo.id}" aria-expanded="false" aria-controls="flush-collapseOne${conteudo.id}">
                    Fácil
                </button>
            </h2>
            <div id="flush-collapseOne${conteudo.id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"><strong>conteúdos:</strong> <br>conteúdo: ${contFacil}</div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed text-white buttonM" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo${conteudo.id}" aria-expanded="false" aria-controls="flush-collapseTwo${conteudo.id}">
                    Médio
                </button>
            </h2>
            <div id="flush-collapseTwo${conteudo.id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"><strong>conteúdos:</strong> <br>conteúdo: ${contMedio}</div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed text-white buttonD" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree${conteudo.id}" aria-expanded="false" aria-controls="collapseThree${conteudo.id}">
                    Difícil
                </button>
            </h2>
            <div id="collapseThree${conteudo.id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"><strong>conteúdos:</strong> <br>conteúdo: ${contDificil}</div>
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
    let novoTitulo = document.getElementById('InputTitulo').value;
    let novoConteudoFid = document.getElementById('InputContFid').value.split('---').map(Number).filter(id => !isNaN(id));
    let novoConteudoFen = document.getElementById('InputContFen').value.split('---');
    let novoConteudoMid = document.getElementById('InputContMid').value.split('---').map(Number).filter(id => !isNaN(id));
    let novoConteudoMen = document.getElementById('InputContMen').value.split('---');
    let novoConteudoDid = document.getElementById('InputContDid').value.split('---').map(Number).filter(id => !isNaN(id));
    let novoConteudoDen = document.getElementById('InputContDen').value.split('---');

    if (!novoTitulo || novoConteudoFid.length !== novoConteudoFen.length || novoConteudoMid.length !== novoConteudoMen.length || novoConteudoDid.length !== novoConteudoDen.length) {
        alert('Erro: Verifique se todos os campos estão preenchidos corretamente e se o número de IDs corresponde ao número de enunciados.');
        return;
    }

    let novoConteudoObj = {
        titulo: novoTitulo,
        facil: {
            material: novoConteudoFid.map((id, index) => ({ id: id, enunciado: novoConteudoFen[index] }))
        },
        medio: {
            material: novoConteudoMid.map((id, index) => ({ id: id, enunciado: novoConteudoMen[index] }))
        },
        dificil: {
            material: novoConteudoDid.map((id, index) => ({ id: id, enunciado: novoConteudoDen[index] }))
        }
    };

    fetch(urlconteudos, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoConteudoObj),
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
