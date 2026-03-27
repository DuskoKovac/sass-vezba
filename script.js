var bodyEl = document.querySelector("body");
var selectOptionEl = document.getElementById("themes");
var smallImgElements = document.getElementsByClassName("smallImg");
var changeSmallEl = document.getElementById("changeSmall");
var imageDivEl = document.getElementById("imageDiv");
var bodyClass = bodyEl.getAttribute("class");
var textJokeElements = document.getElementsByClassName("textJoke");
var changeTextEl = document.getElementById("changeText");
var textUrlList = [
    "https://api.chucknorris.io/jokes/random",
    "https://api.chucknorris.io/jokes/random",
    "https://api.chucknorris.io/jokes/random",
    "https://api.chucknorris.io/jokes/random"
];

function getImages(value) {
    return ([`../img/${value}/1.jpg`,
    `../img/${value}/2.jpg`,
    `../img/${value}/3.jpg`,
    `../img/${value}/4.jpg`,
    `../img/${value}/5.jpg`,
    `../img/${value}/6.jpg`,
    `../img/${value}/7.jpg`,
    `../img/${value}/8.jpg`,
    `../img/${value}/9.jpg`,
    `../img/${value}/10.jpg`,
    `../img/${value}/11.jpg`,
    `../img/${value}/12.jpg`,
    `../img/${value}/13.jpg`,
    `../img/${value}/14.jpg`,
    `../img/${value}/15.jpg`
    ]);
};

async function getUrl(url) {
    var response = await fetch(url);
    var data = await response.json();
    return data;
};

async function getAllUrls(allUrls) {
    var promises = allUrls.map(function (url) {
        return getUrl(url);
    });
    var results = await Promise.all(promises);
    for (i = 0; i < textJokeElements.length; i++) {
        textJokeElements[i].innerHTML = results[i].value
        console.log(textJokeElements[i], results[i].value);
    }
}

changeTextEl.addEventListener("click", function () {
    getAllUrls(textUrlList);
});

window.addEventListener("load", function () {
    randomize(bodyClass);
    getAllUrls(textUrlList);
});

selectOptionEl.addEventListener("change", function (event) {
    var selectedTheme = event.target.value;
    bodyEl.setAttribute("class", selectedTheme);
    randomize(bodyClass);
});

changeSmallEl.addEventListener("click", function () {
    randomize(bodyClass);
});

function randomize(theme) {
    theme = bodyEl.getAttribute("class");
    var images = getImages(theme);
    for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var k = images[i];
        images[i] = images[j];
        images[j] = k;
    }
    for (i = 0; i < smallImgElements.length; i++) {
        smallImgElements[i].setAttribute("src", images[i]);
    }
}









