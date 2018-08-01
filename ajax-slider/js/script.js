axios.get('ajax.json')
    .then(res => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
            if (i === 0) {
                buildSlide(res.data[i], 'show');
                createBullet(i);
                continue;
            }
            buildSlide(res.data[i]);
            createBullet(i);
        }
    });

function nextSlide(e) {
    e.preventDefault();

    var item = document.getElementsByClassName('show')[0];
    var nextElement = item.nextElementSibling;

    if (nextElement !== null && nextElement.tagName === 'FIGURE') {
        nextElement.classList.add('show');
    }else{
        var slider = document.getElementById('slider');
        slider.children[3].classList.add('show');
    }
    item.classList.remove('show');
}

function prevSlide(e) {
    e.preventDefault();

    var item = document.getElementsByClassName('show')[0];
    var prevElement = item.previousElementSibling;

    if (prevElement !== null && prevElement.tagName === 'FIGURE') {
        prevElement.classList.add('show');
    }else{
        var slider = document.getElementById('slider');
        slider.children[slider.children.length - 1].classList.add('show');
    }
    item.classList.remove('show');
}


/**
 * Builds slide items for image slider from ajax call
 */
function buildSlide(imgObj, showArg) {
    var show = showArg || undefined;

    var figure = document.createElement('figure');
    var figcaption = document.createElement('figcaption');
    var img = document.createElement('img');

    figcaption.innerText = imgObj.image_title;

    img.src = imgObj.image_url;
    img.alt = imgObj.image_alt;

    if (show !== undefined) {
        figure.classList.add(show);
    }
    figure.appendChild(img);
    figure.appendChild(figcaption);

    document.getElementById('slider').appendChild(figure);


}

function createBullet(indexAttr){
    var li = document.createElement('li');
    li.innerText = "•";
    li.dataset.index = indexAttr;
    li.style.cursor = 'pointer';
    li.onclick = function () {
        var figures = document.getElementsByTagName('figure');
        var show = document.getElementsByClassName('show')[0];
        show.classList.remove('show');
        this.style.color = "red";
        figures[indexAttr].classList.add('show');
    };
    console.log(li.onclick);
    document.getElementById('bullets').appendChild(li);
}