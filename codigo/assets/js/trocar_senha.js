// Função para trocar a senha do usuário
function trocarSenha(nome, novaSenha) {
    // Obtém o usuário do armazenamento local
    const user = JSON.parse(localStorage.getItem(nome));
    if (!user) {
        alert("Usuário não encontrado!");
        return;
    }

    // Atualiza a senha
    user.senha = novaSenha;
    localStorage.setItem(nome, JSON.stringify(user)); // Atualiza no armazenamento local
    alert("Senha alterada com sucesso!");
}

// Adiciona um evento de escuta para o formulário de troca de senha
document.getElementById('formTrocarSenha').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const nomeUsuario = document.getElementById('txt_nome').value;
    const novaSenha = document.getElementById('novaSenha').value;
    const confirmarNovaSenha = document.getElementById('confirmarNovaSenha').value;

    // Verifica se a nova senha e a confirmação são iguais
    if (novaSenha !== confirmarNovaSenha) {
        alert("As novas senhas não coincidem!");
        return; // Para a execução da função aqui se as senhas não coincidirem
    }

    // Chama a função para trocar a senha se as senhas coincidirem
    trocarSenha(nomeUsuario, novaSenha);
});
