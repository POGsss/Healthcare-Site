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

// Scroll Function
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500
});

sr.reveal('.heroText', {origin: 'top'})
sr.reveal('.heroImg')

sr.reveal('.statsItem', {
    distance: '100px',
    inteval: 10,
    origin: 'top'
});

sr.reveal('.services');
sr.reveal('.servicesTop');
sr.reveal('.servicesItem', {
    distance: '100px',
    inteval: 10,
    origin: 'bottom'
});

sr.reveal('.appointmentTitle');
sr.reveal('.appointmentForm');

sr.reveal('.testimonials');
sr.reveal('.testimonialContainer');

sr.reveal('.teamTitle');
sr.reveal('.teamSlider');

sr.reveal('.faqTitle');
sr.reveal('.faqItem', {
    distance: '100px',
    inteval: 10,
    origin: 'bottom'
});

sr.reveal('.departmentsBg');
sr.reveal('.departmentsContainer');

sr.reveal('.blogTitle');
sr.reveal('.blogPost', {
    distance: '100px',
    inteval: 10,
    origin: 'bottom'
});

sr.reveal('.brandsLogo', {
    distance: '100px',
    inteval: 10,
    origin: 'bottom'
});

sr.reveal('.newsletter');
sr.reveal('.newsletterContainer');

sr.reveal('.footerItem', {
    distance: '100px',
    inteval: 10,
    origin: 'bottom'
});
