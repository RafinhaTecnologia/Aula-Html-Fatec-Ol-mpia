<!--
Descricao: Aula 13 - Elementos Avançados de Formulário
nome_arquivo: index.html
nome_exercicio: Aula 13 - Elementos Avançados de FormulárioS
nome_aluno: Rafael de Oliveira Anjos
email_aluno: Rafael.anjos2@aluno.cps.gov.br
turma: WEBI-ISW028-A
-->

// 1. Lógica da página de Login (perfil.html)
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const errorMsg = document.getElementById('errorMsg');
    const linkCadastro = document.getElementById('linkCadastro');
    const linkRecuperar = document.getElementById('linkRecuperar');

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

    if (linkCadastro) {
        linkCadastro.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'cadastro.html';
        });
    }

    if (linkRecuperar) {
        linkRecuperar.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Instruções de recuperação de senha enviadas por e-mail.');
        });
    }
}

// 2. Lógica da página de Perfil com Elementos Avançados
const userEmailElement = document.getElementById('userEmail');
if (userEmailElement) {
    const emailSalvo = localStorage.getItem('usuarioLogado');
    const btnLogout = document.getElementById('btnLogout');
    const perfilForm = document.getElementById('perfilForm');
    const perfilErrorMsg = document.getElementById('perfilErrorMsg');
    const perfilContainer = document.getElementById('perfilContainer');
    const loginFormEl = document.getElementById('loginForm');

    // Se não houver usuário logado, exibe login, senão exibe perfil
    if (!emailSalvo) {
        if (loginFormEl) loginFormEl.style.display = 'flex';
        if (perfilContainer) perfilContainer.style.display = 'none';
    } else {
        if (loginFormEl) loginFormEl.style.display = 'none';
        if (perfilContainer) perfilContainer.style.display = 'flex';
        userEmailElement.textContent = emailSalvo;
    }

    // Validação avançada dos elementos de formulário (select, radio, textarea)
    if (perfilForm) {
        perfilForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const cargo = document.getElementById('cargo').value;
            const experiencia = document.querySelector('input[name="experiencia"]:checked');
            const biografia = document.getElementById('biografia').value.trim();

            if (cargo === '' || !experiencia) {
                perfilErrorMsg.style.display = 'block';
                return;
            }

            perfilErrorMsg.style.display = 'none';
            alert('Dados de perfil atualizados com sucesso!');
        });
    }

    // Ação de logout
    if (btnLogout) {
        btnLogout.addEventListener('click', function() {
            localStorage.removeItem('usuarioLogado');
            window.location.href = 'perfil.html';
        });
    }
}

// 3. Lógica da página de Cadastro (cadastro.html)
const cadastroForm = document.getElementById('cadastroForm');
if (cadastroForm) {
    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('cadNome').value.trim();
        const email = document.getElementById('cadEmail').value.trim();
        const senha = document.getElementById('cadSenha').value.trim();
        const perfil = document.getElementById('cadPerfil').value;
        const errorMsg = document.getElementById('cadastroErrorMsg');

        if (nome === '' || email === '' || senha === '' || perfil === '') {
            errorMsg.style.display = 'block';
            return;
        }

        alert('Cadastro realizado com sucesso!');
        window.location.href = 'perfil.html';
    });
}