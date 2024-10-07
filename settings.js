// Код для обработки изменения фона и обоев
const backgroundColorInput = document.getElementById('background-color');
const backgroundImageInput = document.getElementById('background-image');

backgroundColorInput.addEventListener('change', (event) => {
  document.body.style.backgroundColor = event.target.value;
});

backgroundImageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    document.body.style.backgroundImage = `url(${event.target.result})`;
  }
  reader.readAsDataURL(file);
});
// Изменение фона страницы
function changeBackground(image) {
    document.body.style.backgroundImage = `url(${image})`;

    // Сохраняем фон для всех страниц через LocalStorage
    localStorage.setItem('background', image);
}

// При загрузке страницы проверяем сохранённый фон
window.onload = function() {
    const savedBackground = localStorage.getItem('background');
    if (savedBackground) {
        document.body.style.backgroundImage = `url(${savedBackground})`;
    }
}
