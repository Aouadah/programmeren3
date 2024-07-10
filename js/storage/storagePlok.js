window.addEventListener('load', init);
let plokfav = null;
let ploknotfav = null;
let plokbox = null;

function init()
{
    if (typeof window.localStorage === 'undefined') {
        console.error('Local storage is not available in your browser');
        return;
    }

    plokfav = document.getElementById('plokFav');
    ploknotfav = document.getElementById('plokUnfav');
    plokbox = document.getElementById('plok-box');

    fillFieldsPlok();
    plokfav.addEventListener('submit', plokSubmitHandler);
    ploknotfav.addEventListener('submit', plokRemoveHandler);
}

function fillFieldsPlok()
{
    plokbox.style.backgroundColor = localStorage.getItem('plokBgcolor')
}

function plokSubmitHandler(e)
{
    e.preventDefault();
    plokbox.style.backgroundColor = "yellow";
    localStorage.setItem('plokBgcolor', 'yellow');
}

function plokRemoveHandler(e)
{
    e.preventDefault();
    localStorage.removeItem('plokBgcolor');
}
