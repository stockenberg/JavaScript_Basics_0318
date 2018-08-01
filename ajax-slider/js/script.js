axios.get('ajax.json')
    .then(res => {
        console.log(res.data);
        for(var i = 0; i < res.data.length; i++){
            buildSlide(res.data[i]);
        }
    });


/**
 * Builds slide items for image slider from ajax call
 */
function buildSlide(imgObj) {

    var figure = document.createElement('figure');
    var figcaption = document.createElement('figcaption');
    var img = document.createElement('img');

    figcaption.innerText = imgObj.image_title;

    img.src = imgObj.image_url;
    img.alt = imgObj.image_alt;

    figure.appendChild(img);
    figure.appendChild(figcaption);

    document.getElementById('slider').appendChild(figure);
}