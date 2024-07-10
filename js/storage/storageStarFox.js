window.addEventListener('load', init);
let starfoxfav = null;
let starfoxnotfav = null;
let starfoxbox = null;

function init()
{
    if (typeof window.localStorage === 'undefined') {
        console.error('Local storage is not available in your browser');
        return;
    }

    starfoxfav = document.getElementById('starfoxFav');
    starfoxnotfav = document.getElementById('starfoxUnfav');
    starfoxbox = document.getElementById('starfox-box');

    fillFieldsstarfox();
    starfoxfav.addEventListener('submit', starfoxSubmitHandler);
    starfoxnotfav.addEventListener('submit', starfoxRemoveHandler);
}

function fillFieldsstarfox()
{
    starfoxbox.style.backgroundColor = localStorage.getItem('starfoxBgcolor')
}

function starfoxSubmitHandler(e)
{
    e.preventDefault();
    starfoxbox.style.backgroundColor = "yellow";
    localStorage.setItem('starfoxBgcolor', 'yellow');
}

function starfoxRemoveHandler(e)
{
    e.preventDefault();
    localStorage.removeItem('starfoxBgcolor');
}
