
var form = document.forms[0];
var contact = {};

form.onsubmit = function (ev) {
    ev.preventDefault();
    var fields = ev.target;

    for(var i = 0; i < fields.length - 1; i++){

        switch (fields[i].type){

            case 'radio':
                if(isRequired(fields[i].parentElement)){
                    var radioIsChecked;

                    var radios = fields[i].parentElement.children;
                    for(var x = 0; x < radios.length; x++){

                        if(radios[x].tagName === "INPUT"){
                            if(radios[x].checked){
                                radioIsChecked = true;
                            }else{
                                radioIsChecked = false;
                            }
                        }
                    }

                    console.log("RADIO: " + radioIsChecked);
                    if(radioIsChecked){
                        contact['myName'] = fields[i].value;
                    }
                }
                break;

            case 'checkbox':
                if(isRequired(fields[i])){
                    if(!isChecked(fields[i])){
                        console.log("Das " + fields[i].name + " feld ist pflicht...");
                    }
                }

                if(isChecked(fields[i])){
                    contact[fields[i].name] = fields[i].value;
                }

                console.log(fields[i].checked);
                break;

            default:
                console.log(fields[i].value);
                break;
        }

    }

    function isRequired(field){
        return field.dataset.required ? true : false;
    }

    function isChecked(field){
        return field.checked;
    }

    console.log(contact);
};