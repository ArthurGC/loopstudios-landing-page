const hamb = document.querySelector('.navbar__hamb');
const menu = document.querySelector('.navbar__bar');
function openMenu() {
    menu.classList.toggle('active');
}

hamb.addEventListener('click',openMenu);