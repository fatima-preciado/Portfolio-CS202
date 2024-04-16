console.clear();

const buttons = [...document.querySelectorAll('.starter-controls-button')];
const starter = document.getElementById('starter');

buttons.forEach(button => button.addEventListener('click', () => {
    chooseStarter(button);
}));

function chooseStarter(button) {
    const pokemon = button.getAttribute('data-pokemon');
    const imagePath = `./images/${pokemon}.png`;

    starter.style.backgroundImage = `url(${imagePath})`;

    document.querySelector('.active').classList.remove('active');
    button.classList.add('active');
}

