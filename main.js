const form = document.querySelector('form');
const nomeInput = document.querySelector('input[placeholder="Nome do contato"]');
const telefoneInput = document.querySelector('input[placeholder="Número de telefone"]');
const tabelaContatos = document.querySelector('tbody');

// Função para adicionar um novo contato à tabela
function adicionarContato(nome, telefone) {
    // Cria uma nova linha para a tabela
    const novaLinha = document.createElement('tr');

    // Cria as células para o nome e telefone
    const nomeTd = document.createElement('td');
    nomeTd.textContent = nome;

    const telefoneTd = document.createElement('td');
    telefoneTd.textContent = telefone;

    // Adiciona as células à nova linha
    novaLinha.appendChild(nomeTd);
    novaLinha.appendChild(telefoneTd);

    // Adiciona a nova linha à tabela
    tabelaContatos.appendChild(novaLinha);
}

// Função para lidar com o envio do formulário
function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos inputs
    const nome = nomeInput.value.trim();
    const telefone = telefoneInput.value.trim();

    // Verifica se ambos os campos foram preenchidos
    if (nome === '' || telefone === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Adiciona o novo contato à tabela
    adicionarContato(nome, telefone);

    // Limpa os campos do formulário
    nomeInput.value = '';
    telefoneInput.value = '';
}

// Adiciona um evento de submissão ao formulário
form.addEventListener('submit', handleFormSubmit);
