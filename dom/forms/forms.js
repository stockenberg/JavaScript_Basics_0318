var form = document.forms[0];

function Errors() {
    this.message = {};

    this.errLen = function () {
        var counter = 0;
        for (var item in this.message) {
            counter++;
        }
        return counter;
    }
}

form.onsubmit = function (e) {
    e.preventDefault();

    var errorP = document.getElementsByClassName('error');
    for(var i = 0; i < errorP.length; i++){
        errorP[i].innerHTML = null;
    }

    var errors = new Errors();

    var isMale = e.target[0].checked;
    var isFemale = e.target[1].checked;
    var firstname = e.target[2];
    var lastname = e.target[3];
    var email = e.target[4];
    var text = e.target[5];
    var isNewsletter = e.target[6].checked;
/// break
    if(!isMale && !isFemale){
        errors.message.gender = 'Bitte wähle eine Anrede';

    }

    if(firstname.value === ""){
        errors.message.firstname = 'Bitte gib deinen Vornamen an';

    }

    if(lastname.value === ""){
        errors.message.lastname = 'Bitte gib deinen Nachnamen an';
    }

    if(email.value === ""){
        errors.message.email = 'Bitte gib deine E-Mail-Adresse an';
    }

    if(errors.errLen() > 0){
        for(var errMessage in errors.message){
            console.log(errMessage);
            document.getElementsByClassName(errMessage)[0].innerHTML
                = errors.message[errMessage];
        }
        console.log('das formular ist fehlerhaft ausgefüllt');
    }else{
        // success
    }
};