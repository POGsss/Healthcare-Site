const mobileNav = document.querySelector('.mNav');
const closeBtn = document.querySelector('.mNavClose');
const closeBtnIcon = document.querySelector('.mNavIcon');

const navOpen = 'left-0';
const navClose = 'left-[-280px]';
const arrowIconLeft = 'ri-arrow-left-s-fill';
const arrowIconRight = 'ri-arrow-right-s-fill';

// Navigation Function
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

// FAQ function
const faqItems = document.querySelectorAll('.faqItem');

faqItems.forEach((item) => {
    const faqBtn = item.querySelector('faqBtn');

    item.addEventListener('click', () => {
        const isOpen = item.classList.toggle('open');
        const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
        const iconElement = faqBtn.querySelector('i');
        iconElement.classList = `${iconClass} text-2xl`;
    });
});