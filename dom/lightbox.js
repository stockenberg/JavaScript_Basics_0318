/**
 * Opens Lightbox, get Gallery HTMLELementList and Lightbox container Class
 * @param gallery
 * @param lightboxClassName
 */
function openLightbox(gallery, lightboxClassName){
    for (var i = 0; i < gallery.children.length; i++){
        var img = gallery.children[i].children[0];

        // write click function on each img iterated through for loop
        img.onclick = function (e) {
            // Select img src
            var imgSrc = e.target.src;

            var lightbox = document.getElementsByClassName(lightboxClassName)[0];

            lightbox.classList.remove('hidden');
            var lightboxImg = document.getElementById('lightboxImg');
            lightboxImg.src = imgSrc;
            lightboxImg.previousElementSibling.innerText = e.target.alt;

        }
    }
}


/**
 * CLose Lightbox - call from HTML-IMG Event Attribute
 * @param elem
 */
function closeLightboxFromImg(elem){
    elem.parentElement.parentElement.classList.add('hidden');
}

/**
 * CLose Lightbox - call from HTML Event Attribute
 * @param event
 * @param elem
 */
function closeLightbox(event, elem){
    console.log(event.target.tagName);
    if(event.target.tagName !== "IMG" && event.target.tagName !== "FIGURE" && event.target.tagName !== "H2"){
        elem.classList.add('hidden');
    }
}

gallery = document.getElementsByClassName('gallery')[0];


openLightbox(gallery, 'lightbox');