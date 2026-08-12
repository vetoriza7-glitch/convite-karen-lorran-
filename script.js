document.addEventListener('DOMContentLoaded', () => {
    const sealBtn = document.getElementById('sealBtn');
    const coverWrapper = document.getElementById('coverWrapper');
    const somAbertura = document.getElementById('somAbertura');
    const sliderContainer = document.getElementById('sliderContainer');

    // MÁGICA: Assim que carregar, empurra a tela para o Slide 2 (Centro) silenciosamente
    setTimeout(() => {
        if(sliderContainer) {
            sliderContainer.scrollLeft = window.innerWidth;
        }
    }, 300);

    // Quando clica no selo
    sealBtn.addEventListener('click', () => {
        coverWrapper.classList.add('open');
        
        if (somAbertura) {
            somAbertura.play();
        }

        setTimeout(() => {
            document.body.style.overflow = 'auto'; // Libera o uso geral
        }, 1200);
    });
});
