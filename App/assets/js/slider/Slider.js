class Slider{

    /**
     * Next Element in Slider
     */
    static next() {
        let slider = document.getElementById('slider');
        for(let figure of slider.children){
            if(figure.classList.contains('show')){

                figure.classList.remove('show');

                if(figure.nextElementSibling === null){
                    slider.children[0].classList.add('show');
                    return
                }

                figure.nextElementSibling.classList.add('show');
                return;
            }
        }
    }

}

export default Slider