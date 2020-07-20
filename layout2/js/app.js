var image = document.querySelectorAll('.section3-img');
var hidenLink = document.querySelectorAll('.section3-images-repositioning');
var navLinks = document.querySelector('.nav-header-ul');
var imgInUsing;

image.forEach(img => {
    img.addEventListener('mouseenter', () => {
        imgInUsing = img
        document.querySelector(`#${img.id}-link`).classList.remove('display-none');
        img.classList.add("low-bright");
    });

    img.addEventListener('mouseleave', () => {
        img.classList.remove("low-bright");
        document.querySelector(`#${img.id}-link`).classList.add('display-none');
    });
});

hidenLink.forEach(link => {

    link.addEventListener('mouseenter', () => {
        link.classList.remove('display-none');
        imgInUsing.classList.add("low-bright");
    });

    link.addEventListener('mouseleave', () => {
        imgInUsing.classList.remove("low-bright");
        link.classList.add('display-none');
    });

});

document.querySelector('.hamburger-icon').addEventListener('click', () => {

    if (navLinks.style.display === '') {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = '';
    }

});


document.querySelector('.ball-pointer').addEventListener('click', () => {

    window.scrollTo({ top: 0, behavior: 'smooth' })

});