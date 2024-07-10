window.addEventListener('load', init);
let kirbyfav = null;
let kirbynotfav = null;
let kirbybox = null;

function init()
{
    if (typeof window.localStorage === 'undefined') {
        console.error('Local storage is not available in your browser');
        return;
    }

    kirbyfav = document.getElementById('kirbyFav');
    kirbynotfav = document.getElementById('kirbyUnfav');
    kirbybox = document.getElementById('kirby-box');

    fillFieldskirby();
    kirbyfav.addEventListener('submit', kirbySubmitHandler);
    kirbynotfav.addEventListener('submit', kirbyRemoveHandler);
}

function fillFieldskirby()
{
    kirbybox.style.backgroundColor = localStorage.getItem('kirbyBgcolor')
}

function kirbySubmitHandler(e)
{
    e.preventDefault();
    kirbybox.style.backgroundColor = "yellow";
    localStorage.setItem('kirbyBgcolor', 'yellow');
}

function kirbyRemoveHandler(e)
{
    e.preventDefault();
    localStorage.removeItem('kirbyBgcolor');
}
