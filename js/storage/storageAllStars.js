window.addEventListener('load', init);
let allstarsfav = null;
let allstarsnotfav = null;
let allstarsbox = null;

function init()
{
    if (typeof window.localStorage === 'undefined') {
        console.error('Local storage is not available in your browser');
        return;
    }

    allstarsfav = document.getElementById('allstarsFav');
    allstarsnotfav = document.getElementById('allstarsUnfav');
    allstarsbox = document.getElementById('allstars-box');

    fillFieldsallstars();
    allstarsfav.addEventListener('submit', allstarsSubmitHandler);
    allstarsnotfav.addEventListener('submit', allstarsRemoveHandler);
}

function fillFieldsallstars()
{
    allstarsbox.style.backgroundColor = localStorage.getItem('allstarsBgcolor')
}

function allstarsSubmitHandler(e)
{
    e.preventDefault();
    allstarsbox.style.backgroundColor = "yellow";
    localStorage.setItem('allstarsBgcolor', 'yellow');
}

function allstarsRemoveHandler(e)
{
    e.preventDefault();
    localStorage.removeItem('allstarsBgcolor');
}
