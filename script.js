var bodyEl = document.querySelector("body");
var selectOptionEl = document.getElementById("themes");
var smallImgElements = document.getElementsByClassName("smallImg");
var changeSmallEl = document.getElementById("changeSmall");
var imageDivEl = document.getElementById("imageDiv");

var bodyClass = bodyEl.getAttribute("class");
// var cardTextEl1 = document.getElementById("cardText-1");
// var cardTextEl2 = document.getElementById("cardText-2");
// var cardTextEl3 = document.getElementById("cardText-3");
var textJokeElements = document.getElementsByClassName("textJoke");
var changeTextEl = document.getElementById("changeText");
var textUrlList = [
    "https://api.chucknorris.io/jokes/random",
    "https://api.chucknorris.io/jokes/random",
    "https://api.chucknorris.io/jokes/random",
    "https://api.chucknorris.io/jokes/random"
]
var images = [`../ img / ${bodyClass}/1.jpg`,
`../img/${bodyClass}/2.jpg`,
`../img/${bodyClass}/3.jpg`,
`../img/${bodyClass}/4.jpg`,
`../img/${bodyClass}/5.jpg`,
`../img/${bodyClass}/6.jpg`,
`../img/${bodyClass}/7.jpg`,
`../img/${bodyClass}/8.jpg`,
`../img/${bodyClass}/9.jpg`,
`../img/${bodyClass}/10.jpg`,
`../img/${bodyClass}/11.jpg`,
`../img/${bodyClass}/12.jpg`,
`../img/${bodyClass}/13.jpg`,
`../img/${bodyClass}/14.jpg`,
`../img/${bodyClass}/15.jpg`
];


async function getUrl(url) {
    var response = await fetch(url);
    var data = await response.json();
    return data;
}

async function getAllUrls(allUrls) {
    var promises = allUrls.map(function (url) {
        return getUrl(url);
    });
    var results = await Promise.all(promises);
    for (i = 0; i < textJokeElements.length; i++) {

        // for (j = 0; j < results.length; j++) {
        // if (i === j) {
        textJokeElements[i].innerHTML = results[i].value
        console.log(textJokeElements[i], results[i].value);
        // }
        // }
    }




}





changeTextEl.addEventListener("click", function () {
    getAllUrls(textUrlList);

});






window.addEventListener("load", function () {
    randomize(images, bodyClass);
    getAllUrls(textUrlList);
});

selectOptionEl.addEventListener("change", function (event) {

    var selectedTheme = event.target.value;

    bodyEl.setAttribute("class", selectedTheme);
    randomize(images, bodyClass);

});

changeSmallEl.addEventListener("click", function () {

    randomize(images, bodyClass);
});


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

}

function randomize(array, theme) {

    theme = bodyEl.getAttribute("class");

    var images = getImages(theme);
    // console.log(images);

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









