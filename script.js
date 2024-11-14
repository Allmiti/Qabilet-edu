const sidebar = document.querySelector('.sidebar');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
    sidebar.style.width = '250px';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.width = '0';
});
