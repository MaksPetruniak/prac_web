// Модальне вікно
const demoButton = document.getElementById('demo-button');
const modal = document.getElementById('demo-modal');
const closeModal = document.querySelector('.close-modal');

demoButton.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex'; 
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; 
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; 
    }
});

// Кнопка для прокрутки вгору
const scrollTopBtn = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block'; 
    } else {
        scrollTopBtn.style.display = 'none'; 
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
