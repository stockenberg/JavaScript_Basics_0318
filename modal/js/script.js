var modal = document.getElementById('modal'),
    ModalStyle = modal.style,
    openModalBtn = document.getElementById('open_modal'),
    closeModalBtn = document.getElementById('close_modal'),
    ModalHeadline = document.getElementsByClassName('modal-headline')[0],
    ModalContent = document.getElementsByClassName('modal-content')[0];

openModalBtn.onclick = function () {
    loa.fadeIn(modal, 1000);
};

closeModalBtn.onclick = function () {
    loa.fadeOut(modal, 1000);
};


function changeModalTitle(elem) {
    ModalHeadline.innerText = elem.value;
}

function changeModalContent(elem) {
    ModalContent.innerHTML = elem.value;
}