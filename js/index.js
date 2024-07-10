window.addEventListener('load', init);

function init()
{
    let allstars = document.getElementById('allstarsForm');
    allstars.addEventListener('submit', allstarsClick);

    let marioworld = document.getElementById('marioworldForm');
    marioworld.addEventListener('submit', marioworldClick);

    let mortalkombat = document.getElementById('mortalkombatForm');
    mortalkombat.addEventListener('submit', mortalkombatClick);

    let dkc = document.getElementById('dkcForm');
    dkc.addEventListener('submit', dkcClick);

    let mmx = document.getElementById('mmxForm');
    mmx.addEventListener('submit', mmxClick);

    let kirby = document.getElementById('kirbyForm');
    kirby.addEventListener('submit', kirbyClick);

    let starfox = document.getElementById('starfoxForm');
    starfox.addEventListener('submit', starfoxClick);

    let superpunchout = document.getElementById('superpunchoutForm');
    superpunchout.addEventListener('submit', superpunchoutClick);

    let zelda = document.getElementById('zeldaForm');
    zelda.addEventListener('submit', zeldaClick);

    let plok = document.getElementById('plokForm');
    plok.addEventListener('submit', plokClick);
}

function allstarsClick(e)
{
    e.preventDefault(); //voorkomt dat pagina wordt refresht
    let ul = document.getElementById('info-box');
    ul.innerHTML = ''
    let li = document.createElement('li');
    li.innerHTML = "Super Mario All-Stars! A platformer game released in 1991.";
    ul.appendChild(li);
}

function marioworldClick(e)
{
    e.preventDefault();
    let ul = document.getElementById('info-box');
    ul.innerHTML = ''
    let li = document.createElement('li');
    li.innerHTML = "Super Mario World! A platformer game released in 1993.";
    ul.appendChild(li);
}

function mortalkombatClick(e)
{
    e.preventDefault();
    let ul = document.getElementById('info-box');
    ul.innerHTML = ''
    let li = document.createElement('li');
    li.innerHTML = "Mortal Kombat! A fighting game released in 1991.";
    ul.appendChild(li);
}

function dkcClick(e)
{
    e.preventDefault();
    let ul = document.getElementById('info-box');
    ul.innerHTML = ''
    let li = document.createElement('li');
    li.innerHTML = "Donkey Kong Country! A platformer game released in 1993.";
    ul.appendChild(li);
}

function mmxClick(e)
{
    e.preventDefault();
    let ul = document.getElementById('info-box');
    ul.innerHTML = ''
    let li = document.createElement('li');
    li.innerHTML = "Mega Man X! A platformer action game released in 1991.";
    ul.appendChild(li);
}

function kirbyClick(e)
{
    e.preventDefault();
    let ul = document.getElementById('info-box');
    ul.innerHTML = ''
    let li = document.createElement('li');
    li.innerHTML = "Kirby's Dream Land 3! A platformer game released in 1993.";
    ul.appendChild(li);
}

function starfoxClick(e)
{
    e.preventDefault();
    let ul = document.getElementById('info-box');
    ul.innerHTML = ''
    let li = document.createElement('li');
    li.innerHTML = "Star Fox! An action shooting released in 1991.";
    ul.appendChild(li);
}

function superpunchoutClick(e)
{
    e.preventDefault();
    let ul = document.getElementById('info-box');
    ul.innerHTML = ''
    let li = document.createElement('li');
    li.innerHTML = "Super Punch-Out!!! A sports fighting game released in 1993.";
    ul.appendChild(li);
}

function zeldaClick(e)
{
    e.preventDefault();
    let ul = document.getElementById('info-box');
    ul.innerHTML = ''
    let li = document.createElement('li');
    li.innerHTML = "The Legend of Zelda: A Link to the Past! An action-adventure puzzle game released in 1991.";
    ul.appendChild(li);
}

function plokClick(e)
{
    e.preventDefault();
    let ul = document.getElementById('info-box');
    ul.innerHTML = ''
    let li = document.createElement('li');
    li.innerHTML = "Plok! A platformer game released in 1993.";
    ul.appendChild(li);
}


