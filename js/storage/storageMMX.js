window.addEventListener('load', init);
let mmxfav = null;
let mmxnotfav = null;
let mmxbox = null;

function init()
{
    if (typeof window.localStorage === 'undefined') {
        console.error('Local storage is not available in your browser');
        return;
    }

    mmxfav = document.getElementById('mmxFav');
    mmxnotfav = document.getElementById('mmxUnfav');
    mmxbox = document.getElementById('mmx-box');

    fillFieldsmmx();
    mmxfav.addEventListener('submit', mmxSubmitHandler);
    mmxnotfav.addEventListener('submit', mmxRemoveHandler);
}

function fillFieldsmmx()
{
    mmxbox.style.backgroundColor = localStorage.getItem('mmxBgcolor')
}

function mmxSubmitHandler(e)
{
    e.preventDefault();
    mmxbox.style.backgroundColor = "yellow";
    localStorage.setItem('mmxBgcolor', 'yellow');
}

function mmxRemoveHandler(e)
{
    e.preventDefault();
    localStorage.removeItem('mmxBgcolor');
}
