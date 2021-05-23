const hamb = document.querySelector('.navbar__hamb');
const menu = document.querySelector('.navbar__bar');
const iconHamb = document.querySelector('.hamburger');
const iconClose = document.querySelector('.close');
function openMenu() {
    menu.classList.toggle('active');
    iconHamb.classList.toggle('hide');
    iconClose.classList.toggle('hide');
}

hamb.addEventListener('click',openMenu);