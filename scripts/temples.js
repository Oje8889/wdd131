// Dinámica de footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Menú hamburguesa
const menuButton = document.createElement('button');
menuButton.textContent = '☰';
menuButton.id = 'menuButton';
document.querySelector('nav').prepend(menuButton);

menuButton.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('open');
});
