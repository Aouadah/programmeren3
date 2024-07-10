window.addEventListener('load', init);
let mortalkombatfav = null;
let mortalkombatnotfav = null;
let mortalkombatbox = null;

function init()
{
    if (typeof window.localStorage === 'undefined') {
        console.error('Local storage is not available in your browser');
        return;
    }

    mortalkombatfav = document.getElementById('mortalkombatFav');
    mortalkombatnotfav = document.getElementById('mortalkombatUnfav');
    mortalkombatbox = document.getElementById('mortalkombat-box');

    fillFieldsmortalkombat();
    mortalkombatfav.addEventListener('submit', mortalkombatSubmitHandler);
    mortalkombatnotfav.addEventListener('submit', mortalkombatRemoveHandler);
}

function fillFieldsmortalkombat()
{
    mortalkombatbox.style.backgroundColor = localStorage.getItem('mortalkombatBgcolor')
}

function mortalkombatSubmitHandler(e)
{
    e.preventDefault();
    mortalkombatbox.style.backgroundColor = "yellow";
    localStorage.setItem('mortalkombatBgcolor', 'yellow');
}

function mortalkombatRemoveHandler(e)
{
    e.preventDefault();
    localStorage.removeItem('mortalkombatBgcolor');
}
