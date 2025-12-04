document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // todo -Remove mensagens antigas-
        const mensagensAntigas = document.querySelectorAll('.mensagem');
        mensagensAntigas.forEach(msg => msg.remove());

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // todo -Exemplo de validação personalizada-
        if (username.length < 3) {
            mostrarMensagem('Seu usuário deve ter pelo menos 3 caracteres.', '#dc3545');
            return;
        }
        if (password.length < 5) {
            mostrarMensagem('Sua senha deve ter pelo menos 5 caracteres.', '#dc3545');
            return;
        }

        // todo -Se passou nas validações, mostra sucesso-
        mostrarMensagem('Login realizado com sucesso!', '#28a745');
    });

    function mostrarMensagem(texto, corFundo) {
        const mensagem = document.createElement('div');
        mensagem.textContent = texto;
        mensagem.className = 'mensagem';
        mensagem.style.background = corFundo;
        mensagem.style.color = '#fff';
        mensagem.style.padding = '10px';
        mensagem.style.marginTop = '15px';
        mensagem.style.borderRadius = '5px';
        mensagem.style.textAlign = 'center';
        form.parentNode.appendChild(mensagem);

        setTimeout(() => {
            mensagem.remove();
        }, 3000);
    }
});