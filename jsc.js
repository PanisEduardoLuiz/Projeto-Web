// Função para mostrar ou esconder a senha
function togglePassword() {
    const passwordField = document.getElementById('Senha');
    const showPasswordIcon = document.getElementById('show-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPasswordIcon.textContent = '🙈'; // Ícone de esconder senha
    } else {
        passwordField.type = 'password';
        showPasswordIcon.textContent = '👁️'; // Ícone de mostrar senha
    }
}


// Abrir formulário de cadastro
function openRegisterForm() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'block';
}

// Fechar formulário de cadastro
function closeRegisterForm() {
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
}

// Verificar se o usuário já tem uma senha salva
window.onload = function() {
    if (localStorage.getItem('usuario') && localStorage.getItem('senha')) {
        document.getElementById('Usuario').value = localStorage.getItem('usuario');
        document.getElementById('Senha').value = localStorage.getItem('senha');
        document.getElementById('save-password').checked = true; // Marca a opção de salvar senha
    }
}

// Função de login (simulação)
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('Usuario').value;
    const senha = document.getElementById('Senha').value;
    const savePassword = document.getElementById('save-password').checked;
    
    // Salva a senha no localStorage se a caixa "Salvar senha" estiver marcada
    if (savePassword) {
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('senha', senha);
    } else {
        localStorage.removeItem('usuario');
        localStorage.removeItem('senha');
    }
    
    // Exemplo de validação simples
    if (usuario && senha) {
        alert(`Login bem-sucedido!\nUsuário: ${usuario}\nSenha: ${senha}`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Função de cadastro (simulação)
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    
    // Exemplo de validação simples
    if (newUsername && newPassword) {
        alert(`Cadastro realizado!\nUsuário: ${newUsername}\nSenha: ${newPassword}`);
        closeRegisterForm(); // Fecha o formulário de cadastro após sucesso
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
