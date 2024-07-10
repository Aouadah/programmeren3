window.addEventListener('load', init);

//Global vars
let apiUrl = 'http://localhost/programmeren3-2024/webservice-start/';
let button;

function init() {
    button = document.getElementById('load-JSON');
    button.addEventListener('click', getURL);
}

function getURL() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(errorHandler);
}

function successHandler(data)
{
    let ul = document.getElementById('ajax-box');
    ul.innerText = ""
    for (let item of data) {
        let li = document.createElement('li');
        localStorage.setItem("item", JSON.stringify(item))
        li.innerText = localStorage.getItem("item");
        ul.appendChild(li);
    }
}

function errorHandler(error) {
    console.error(error);
}

