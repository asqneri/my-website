const galleryImgs = Array.from(document.querySelectorAll('.gallery img'));
const lightbox     = document.getElementById('lightbox');
const bigImg       = document.getElementById('bigImg');
const btnPrev      = document.getElementById('prev');
const btnNext      = document.getElementById('next');
const btnClose     = document.getElementById('close');
let currentIndex = 0;

// Открыть лайтбокс по клику на миниатюру
galleryImgs.forEach((img, idx) => {
  img.addEventListener('click', () => {
    currentIndex = idx;
    showLightbox();
  });
});

// Показываем лайтбокс с текущим изображением
function showLightbox() {
  const { src, alt } = galleryImgs[currentIndex];
  bigImg.src = src;
  bigImg.alt = alt;
  lightbox.style.display = 'flex';
}

// Закрыть лайтбокс
btnClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// Переключение «назад»
btnPrev.addEventListener('click', e => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
  showLightbox();
});

// Переключение «вперёд»
btnNext.addEventListener('click', e => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImgs.length;
  showLightbox();
});

// Навигация с клавиатуры
document.addEventListener('keydown', e => {
  if (lightbox.style.display !== 'flex') return;
  if (e.key === 'ArrowLeft')  btnPrev.click();
  if (e.key === 'ArrowRight') btnNext.click();
  if (e.key === 'Escape')     btnClose.click();
});

