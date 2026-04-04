
const bodyEl = document.querySelector("body");
const selectOptionEl = document.getElementById("themes");
const smallImgElements = document.getElementsByClassName("smallImg");
const changeSmallEl = document.getElementById("changeSmall");
const imageDivEl = document.getElementById("imageDiv");
const bodyClass = bodyEl.getAttribute("class");
const textJokeElements = document.getElementsByClassName("textJoke");
const changeTextEl = document.getElementById("changeText");
const textUrlList = [
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
    let response = await fetch(url);
    let data = await response.json();
    return data;
};

async function getAllUrls(allUrls) {
    let promises = allUrls.map(function (url) {
        return getUrl(url);
    });
    let results = await Promise.all(promises);
    for (i = 0; i < textJokeElements.length; i++) {
        textJokeElements[i].innerHTML = results[i].value

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
    let selectedTheme = event.target.value;
    bodyEl.setAttribute("class", selectedTheme);
    randomize(bodyClass);
});

changeSmallEl.addEventListener("click", function () {
    randomize(bodyClass);
});

function randomize(theme) {
    theme = bodyEl.getAttribute("class");
    let images = getImages(theme);
    for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = images[i];
        images[i] = images[j];
        images[j] = k;
    }
    for (i = 0; i < smallImgElements.length; i++) {
        smallImgElements[i].setAttribute("src", images[i]);
    }
}









