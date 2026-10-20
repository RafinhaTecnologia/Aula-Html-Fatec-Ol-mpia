// Verifica se estamos na página de login/cadastro
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const errorMsg = document.getElementById('errorMsg');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Validação simples em JS
        if (emailInput.value.trim() === '' || senhaInput.value.trim() === '') {
            errorMsg.style.display = 'block';
            return;
        }

        // Salva o e-mail no localStorage para simular a sessão
        localStorage.setItem('usuarioLogado', emailInput.value);

        // Redireciona para a página de perfil
        window.location.href = 'perfil.html';
    });
}

// Verifica se estamos na página de perfil
const userEmailElement = document.getElementById('userEmail');
if (userEmailElement) {
    const emailSalvo = localStorage.getItem('usuarioLogado');
    const btnLogout = document.getElementById('btnLogout');

    // Se não houver usuário logado, chuta de volta para o cadastro/login
    if (!emailSalvo) {
        window.location.href = 'cadastro.html';
    } else {
        userEmailElement.textContent = emailSalvo;
    }

    // Ação de logout
    if (btnLogout) {
        btnLogout.addEventListener('click', function() {
            localStorage.removeItem('usuarioLogado');
            window.location.href = 'cadastro.html';
        });
    }
}