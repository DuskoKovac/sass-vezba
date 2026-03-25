var bodyEl = document.querySelector("body");
var selectOptionEl = document.getElementById("themes");
var smallImgElements = document.getElementsByClassName("smallImg");
var changeSmallEl = document.getElementById("changeSmall");
var imageDivEl = document.getElementById("imageDiv");
// var changeBackgroundEl = document.getElementById("changeBackground");
var bodyClass = bodyEl.getAttribute("class");
var cardTextEl1 = document.getElementById("cardText-1");
var cardTextEl2 = document.getElementById("cardText-2");
var cardTextEl3 = document.getElementById("cardText-3");
var textJokeEl = document.getElementById("textJoke");
var changeTextEl = document.getElementById("changeText");
var textUrl = "https://api.chucknorris.io/jokes/random";


async function changeJoke() {
    var response1 = await fetch(textUrl);
    var data1 = await response1.json();
    var response2 = await fetch(textUrl);
    var data2 = await response2.json();
    var response3 = await fetch(textUrl);
    var data3 = await response3.json();
    var response4 = await fetch(textUrl);
    var data4 = await response4.json();
    cardTextEl1.innerHTML = "";
    cardTextEl2.innerHTML = "";
    cardTextEl3.innerHTML = "";
    textJokeEl.innerHTML = "";
    var txt1 = `
            ${data1.value}
        `
    var txt2 = `
            ${data2.value}
        `
    var txt3 = `
            ${data3.value}
        `
    var txt4 = `
            ${data3.value}
      `
    cardTextEl1.innerHTML = txt1;
    cardTextEl2.innerHTML = txt2;
    cardTextEl3.innerHTML = txt3;
    textJokeEl.innerHTML = txt4;
}

async function changeJoke2() {
    var response = await fetch(textUrl2);
    var data = await response.json();

    textJokeEl.innerHTML = "";

    var txt1 = `
            ${data1.value}
    `
    var txt2 = `
            ${data2.value}
    `
    var txt3 = `
            ${data3.value}
    `
    cardTextEl1.innerHTML = txt1;
    cardTextEl2.innerHTML = txt2;
    cardTextEl3.innerHTML = txt3;
}

changeTextEl.addEventListener("click", function () {
    changeJoke();

});




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

window.addEventListener("load", function () {
    randomize(images, bodyClass);
    changeJoke();
});

selectOptionEl.addEventListener("change", function (event) {

    var selectedTheme = event.target.value;

    bodyEl.setAttribute("class", selectedTheme);
    randomize(images, bodyClass);
    changeJoke();
});

changeSmallEl.addEventListener("click", function () {

    randomize(images, bodyClass);
});

function randomize(array, theme) {

    theme = bodyEl.getAttribute("class");

    var array = [`../img/${theme}/1.jpg`,
    `../img/${theme}/2.jpg`,
    `../img/${theme}/3.jpg`,
    `../img/${theme}/4.jpg`,
    `../img/${theme}/5.jpg`,
    `../img/${theme}/6.jpg`,
    `../img/${theme}/7.jpg`,
    `../img/${theme}/8.jpg`,
    `../img/${theme}/9.jpg`,
    `../img/${theme}/10.jpg`,
    `../img/${theme}/11.jpg`,
    `../img/${theme}/12.jpg`,
    `../img/${theme}/13.jpg`,
    `../img/${theme}/14.jpg`,
    `../img/${theme}/15.jpg`
    ];

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var k = array[i];
        array[i] = array[j];
        array[j] = k;
    }

    for (i = 0; i < smallImgElements.length; i++) {

        smallImgElements[i].setAttribute("src", array[i]);
    }
}









