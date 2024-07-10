window.addEventListener('load', init);
let superpunchoutfav = null;
let superpunchoutnotfav = null;
let superpunchoutbox = null;

function init()
{
    if (typeof window.localStorage === 'undefined') {
        console.error('Local storage is not available in your browser');
        return;
    }

    superpunchoutfav = document.getElementById('superpunchoutFav');
    superpunchoutnotfav = document.getElementById('superpunchoutUnfav');
    superpunchoutbox = document.getElementById('superpunchout-box');

    fillFieldssuperpunchout();
    superpunchoutfav.addEventListener('submit', superpunchoutSubmitHandler);
    superpunchoutnotfav.addEventListener('submit', superpunchoutRemoveHandler);
}

function fillFieldssuperpunchout()
{
    superpunchoutbox.style.backgroundColor = localStorage.getItem('superpunchoutBgcolor')
}

function superpunchoutSubmitHandler(e)
{
    e.preventDefault();
    superpunchoutbox.style.backgroundColor = "yellow";
    localStorage.setItem('superpunchoutBgcolor', 'yellow');
}

function superpunchoutRemoveHandler(e)
{
    e.preventDefault();
    localStorage.removeItem('superpunchoutBgcolor');
}
