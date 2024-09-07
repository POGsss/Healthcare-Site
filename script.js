const mobileNav = document.querySelector('.mNav');
const closeBtn = document.querySelector('.mNavClose');
const closeBtnIcon = document.querySelector('.mNavIcon');

const navOpen = 'left-0';
const navClose = 'left-[-280px]';
const arrowIconLeft = 'ri-arrow-left-s-fill';
const arrowIconRight = 'ri-arrow-right-s-fill';

closeBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains(navOpen)) {
        mobileNav.classList.toggle(navClose);

        closeBtnIcon.classList.toggle(arrowIconLeft);
        closeBtnIcon.classList.toggle(arrowIconRight);
    }
});

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
});