
var headline = document.getElementById('headline');
headline.innerHTML= "<strong>Welt</strong>";

var headlines = document.getElementsByTagName("h2");

var texts = document.getElementsByClassName("text");

console.dir(headlines);
console.dir(texts);
console.dir(headline);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

document.onscroll = function () {
    for(var i = 0; i < texts.length; i += 2){
        texts[i].style.color = "rgb(" + getRandomArbitrary(0,255) + ", " + getRandomArbitrary(0,255) + ", " + getRandomArbitrary(0,255) + ")";
    }
};
