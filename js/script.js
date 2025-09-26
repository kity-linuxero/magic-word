document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    const modalOverlay = document.getElementById('modal-overlay');

    const firstPart = "PERMISSION DENIED.";
    const secondPart = "...and...\n";
    const repeatingLine = "YOU DIDN'T SAY THE MAGIC WORD!\n";
    const repetitions = 35;

    function showModal() {
        const nedryFrame = modalOverlay.querySelector('iframe');
        const sourceUrl = nedryFrame.getAttribute('data-src');

        if (sourceUrl) {
            // Change background and text color
            document.body.style.backgroundColor = 'rgba(7, 13, 43, 1)';
            document.body.style.color = '#333232ff';
            
            nedryFrame.setAttribute('src', sourceUrl);
            modalOverlay.classList.remove('hidden');
        } else {
            console.error("¡Error! No se encontró el atributo 'data-src' en el iframe.");
        }
    }

    async function startTypingSequence() {
        terminal.innerHTML = firstPart;
        await new Promise(resolve => setTimeout(resolve, 500));

        terminal.innerHTML += secondPart;
        await new Promise(resolve => setTimeout(resolve, 1000));

        for (let i = 0; i < repetitions; i++) {
            terminal.innerHTML += repeatingLine;
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        await new Promise(resolve => setTimeout(resolve, 0));
        
        showModal();
    }

    startTypingSequence();
});