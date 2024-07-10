window.addEventListener('load', init);
let marioworldfav = null;
let marioworldnotfav = null;
let marioworldbox = null;

function init()
{
    if (typeof window.localStorage === 'undefined') {
        console.error('Local storage is not available in your browser');
        return;
    }

    marioworldfav = document.getElementById('marioworldFav');
    marioworldnotfav = document.getElementById('marioworldUnfav');
    marioworldbox = document.getElementById('marioworld-box');

    fillFieldsmarioworld();
    marioworldfav.addEventListener('submit', marioworldSubmitHandler);
    marioworldnotfav.addEventListener('submit', marioworldRemoveHandler);
}

function fillFieldsmarioworld()
{
    marioworldbox.style.backgroundColor = localStorage.getItem('marioworldBgcolor')
}

function marioworldSubmitHandler(e)
{
    e.preventDefault();
    marioworldbox.style.backgroundColor = "yellow";
    localStorage.setItem('marioworldBgcolor', 'yellow');
}

function marioworldRemoveHandler(e)
{
    e.preventDefault();
    localStorage.removeItem('marioworldBgcolor');
}
