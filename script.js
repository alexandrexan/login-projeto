document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // ! -Aqui você pode adicionar validação extra se quiser-

        // todo -Cria a mensagem de sucesso-
        const mensagem = document.createElement('div');
        mensagem.textContent = 'Login realizado com sucesso!';
        mensagem.style.background = '#28a745';
        mensagem.style.color = '#fff';
        mensagem.style.padding = '10px';
        mensagem.style.marginTop = '15px';
        mensagem.style.borderRadius = '5px';
        mensagem.style.textAlign = 'center';

        // todo  -Adiciona a mensagem abaixo do formulário-
        form.parentNode.appendChild(mensagem);

        // todo  -remover a mensagem após alguns segundos-
        setTimeout(() => {
            mensagem.remove();
        }, 3000);
    });
});