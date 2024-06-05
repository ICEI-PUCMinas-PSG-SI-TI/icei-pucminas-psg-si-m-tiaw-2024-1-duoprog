document.addEventListener('DOMContentLoaded', function() {
    // Simulando o objeto de dados
    const objDados = {
            fácil: [
                {
                    texto: "Qual é a capital da França?",
                    resp: ["Paris", "Londres", "Roma", "Berlim"]
                },
                {
                    texto: "Qual é a capital da Alemanha?",
                    resp: ["Berlim", "Madri", "Lisboa", "Paris"]
                }
            ]   
    };

    const questContainer = document.getElementById('questContainer');
    const btnAddQuest = document.getElementById('BtnAddQuest');
    const btnConfQuest = document.getElementById('BtnConfQuest');
    const btnCancelQuest = document.getElementById('BtnCancelQuest');
    const telaAddQuest = document.getElementById('TelaAddQuest');
    const btnAddQuestArea = document.getElementById('BtnAddQuestArea');

    // Renderiza as questões na página
    function renderQuestions() {
        questContainer.innerHTML = ''; // Limpa o container antes de renderizar
        objDados.dificuldades[0].fácil.forEach((questao, i) => {
            const questDiv = document.createElement('div');
            questDiv.className = `questão${i} border-bottom mt-2`;

            questDiv.innerHTML = `
                <div class="d-flex col">
                    <button id="BtnDelQuest${i}" class="btn-del-quest"><img src="../assets/images/trash_red.png" alt="" width="35" height="auto"></button>
                    <div class="fs-3 ms-2 d-flex justify-content-between">
                        <h2 class="mt-1">${questao.texto}</h2>
                        <button id="BtnEditarPerg${i}" class="ms-2 btn-editar-perg"><img src="../assets/images/iconizer-botao-editar.svg" alt="" width="40" height="40"></button>
                    </div>
                </div>
                <ul>
                    ${questao.resp.map((resposta, index) => `
                        <li class="d-flex">
                            <button id="editrespind${index + 1}${i}" class="btn-editar-resp"><img src="../assets/images/iconizer-botao-editar.svg" class="editarResp me-2 mb-3" alt=""></button>
                            <p id="respp${index + 1}${i}">${resposta}</p>
                        </li>
                    `).join('')}
                </ul>
            `;

            questContainer.appendChild(questDiv);
        });

        // Adiciona eventos de clique para botões de deletar
        document.querySelectorAll('.btn-del-quest').forEach(btn => {
            btn.addEventListener('click', function(event) {
                const questIndex = this.id.replace('BtnDelQuest', '');
                deleteQuestion(questIndex);
            });
        });

        // Adiciona eventos de clique para botões de editar
        document.querySelectorAll('.btn-editar-perg').forEach(btn => {
            btn.addEventListener('click', function(event) {
                const questIndex = this.id.replace('BtnEditarPerg', '');
                editQuestion(questIndex);
            });
        });
    }

    // Deleta uma questão
    function deleteQuestion(index) {
        objDados.dificuldades[0].fácil.splice(index, 1);
        renderQuestions();
    }

    // Edita uma questão
    function editQuestion(index) {
        // Lógica para edição da questão
        console.log('Edit question:', index);
    }

    // Adiciona uma nova questão
    function addNewQuestion() {
        const newQuestionText = document.getElementById('InputPerg').value;
        const newResponses = [
            document.getElementById('InputQuest1').value,
            document.getElementById('InputQuest2').value,
            document.getElementById('InputQuest3').value,
            document.getElementById('InputQuest4').value
        ];

        objDados.dificuldades[0].fácil.push({
            texto: newQuestionText,
            resp: newResponses
        });

        renderQuestions();
        toggleAddQuestionForm();
    }

    // Alterna a exibição do formulário de adicionar questão
    function toggleAddQuestionForm() {
        const isAddFormVisible = telaAddQuest.style.display !== 'none';
        telaAddQuest.style.display = isAddFormVisible ? 'none' : 'block';
        btnAddQuestArea.style.display = isAddFormVisible ? 'block' : 'none';
    }

    // Eventos de clique
    btnAddQuest.addEventListener('click', toggleAddQuestionForm);
    btnConfQuest.addEventListener('click', addNewQuestion);
    btnCancelQuest.addEventListener('click', toggleAddQuestionForm);

    // Chama a função para renderizar as questões ao carregar a página
    renderQuestions();
});
