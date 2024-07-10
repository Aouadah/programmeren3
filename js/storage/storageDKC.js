window.addEventListener('load', init);
let dkcfav = null;
let dkcnotfav = null;
let dkcbox = null;

function init()
{
    if (typeof window.localStorage === 'undefined') {
        console.error('Local storage is not available in your browser');
        return;
    }

    dkcfav = document.getElementById('dkcFav');
    dkcnotfav = document.getElementById('dkcUnfav');
    dkcbox = document.getElementById('dkc-box');

    fillFieldsdkc();
    dkcfav.addEventListener('submit', dkcSubmitHandler);
    dkcnotfav.addEventListener('submit', dkcRemoveHandler);
}

function fillFieldsdkc()
{
    dkcbox.style.backgroundColor = localStorage.getItem('dkcBgcolor')
}

function dkcSubmitHandler(e)
{
    e.preventDefault();
    dkcbox.style.backgroundColor = "yellow";
    localStorage.setItem('dkcBgcolor', 'yellow');
}

function dkcRemoveHandler(e)
{
    e.preventDefault();
    localStorage.removeItem('dkcBgcolor');
}
