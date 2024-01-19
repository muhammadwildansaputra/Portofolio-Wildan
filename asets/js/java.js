let menu = document.querySelector('nav');
let navbar = document.querySelector('.navbar-nav');

menu.onclick = () => {
    menu.classList.toggle('navbar-collapse');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('navbar-collapse');
    navbar.classList.remove('active')
}

const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
    scrollposition = window.scrollY;

    if (scrollposition >=60 ){
        nav.classList.add('nav-dark');
    } else if (scrollposition <= 60){
        nav.classList.remove('nav-dark')
    }
})
