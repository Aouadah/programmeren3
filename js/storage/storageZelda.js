window.addEventListener('load', init);
let zeldafav = null;
let zeldanotfav = null;
let zeldabox = null;

function init()
{
    if (typeof window.localStorage === 'undefined') {
        console.error('Local storage is not available in your browser');
        return;
    }

    zeldafav = document.getElementById('zeldaFav');
    zeldanotfav = document.getElementById('zeldaUnfav');
    zeldabox = document.getElementById('zelda-box');

    fillFieldsZelda();
    zeldafav.addEventListener('submit', zeldaSubmitHandler);
    zeldanotfav.addEventListener('submit', zeldaRemoveHandler);
}

function fillFieldsZelda()
{
    zeldabox.style.backgroundColor = localStorage.getItem('zeldaBgcolor')
}

function zeldaSubmitHandler(e)
{
    e.preventDefault();
    zeldabox.style.backgroundColor = "yellow";
    localStorage.setItem('zeldaBgcolor', 'yellow');
}

function zeldaRemoveHandler(e)
{
    e.preventDefault();
    localStorage.removeItem('zeldaBgcolor');
}


