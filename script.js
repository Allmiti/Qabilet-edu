<script>
    const button = document.getElementById('navigate-btn');
    const clickSound = document.getElementById('click-sound');

    button.addEventListener('click', () => {
        // Проигрывание звука
        clickSound.play();

        // Задержка перед переходом, чтобы звук успел проиграться
        setTimeout(() => {
            window.location.href = 'https://example.com'; // URL целевой страницы
        }, 500); // Установите задержку в зависимости от длины звука (в миллисекундах)
    });
</script>

