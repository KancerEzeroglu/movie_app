async function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

var DEFAULT_PAGE = 1;
var currentPage = DEFAULT_PAGE;
var currentText = "love";

function clearFilms() {
    var filmList = document.getElementById('film-list');
    while (filmList.firstChild) {
        filmList.removeChild(filmList.firstChild);
    }
}
function fetchAndRender(page, searchText){
    httpGet(`http://www.omdbapi.com/?s=${searchText}&apikey=338f9a63&page=${page}`)
        .then(response => renderFilms(response))
        .catch(error => {
            console.log(error);
        });
}

document.getElementById('search-button').addEventListener("click", function (event) {
    currentText = document.getElementById('search-text').value;
    currentPage = DEFAULT_PAGE;
    clearFilms();
    fetchAndRender(currentPage, currentText);
});



document.addEventListener("DOMContentLoaded", function (event) {
    fetchAndRender(currentPage, currentText);
});


window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        // you're at the bottom of the page
        currentPage++;
        fetchAndRender(currentPage, currentText);
    }
};


function renderFilms(response) {
        var filmList = document.getElementById('film-list');
        var result = JSON.parse(response);

        result.Search.map(film => {
            filmList.insertAdjacentHTML("beforeend", "<div class=\"film\">\n" +
                "        <img id=\"film-img\" class=\"film-img\"\n" +
                "             src=\"" + film.Poster + "\"\n" +
                "             alt=\"Italian Trulli\">\n" +
                "        <div class=\"film-title\" id=\"film-title\">"+film.Title+"</div>\n" +
                "    </div>");
        })
}