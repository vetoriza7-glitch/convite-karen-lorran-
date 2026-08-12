document.addEventListener('DOMContentLoaded', () => {
    const sealBtn = document.getElementById('sealBtn');
    const coverWrapper = document.getElementById('coverWrapper');

    sealBtn.addEventListener('click', () => {
        // Adiciona a classe 'open' que engatilha a animação CSS
        coverWrapper.classList.add('open');
        
        // Permite rolagem da página após a abertura (caso o convite seja longo)
        setTimeout(() => {
            document.body.style.overflow = 'auto';
        }, 1500); // Espera a animação acabar
    });
});