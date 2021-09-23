const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    const nav = document.getElementById('nav')
    //< < < < toggle = cria se tiver, tira se não tiver > > > >
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu)