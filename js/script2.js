const menuToggle = document.querySelector('.nav__input');
const nav = document.querySelector('.nav__list');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('nav__slide')
    // console.log('slide berhasil');
})