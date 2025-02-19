const images = [
    '/img/casa.jpg',
    '/img/casa1.jpg',
    '/img/casa2.jpg'
];
let currentIndex = 0;
const banner = document.getElementById('banner-bg');

// Função para trocar a imagem
function updateBanner() {
    banner.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Eventos para as setas laterais
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBanner();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBanner();
});

// Inicializar com a primeira imagem
updateBanner();

