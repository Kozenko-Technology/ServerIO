// Подгружаем navbar на каждую страницу
window.onload = function() {
    fetch('/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data); // Вставляем в начало body
        });
};
