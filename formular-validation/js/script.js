
var form = document.forms[0];
var contact = {
    data: {},
    add: function (key, value) {
        this.data[key] = value.toLowerCase().trim();
    },
    get: function (key){
        return this.data[key];
    }
};

form.onsubmit = function (ev) {
    ev.preventDefault();
    var fields = ev.target;
    for(var i = 0; i < fields.length - 1; i++){
        switch (fields[i].type){

            case 'radio':
                if(isChecked(fields[i])){
                    contact.add(fields[i].name, fields[i].value);
                }
                break;

            case 'checkbox':
                if(isRequired(fields[i])){
                    if(!isChecked(fields[i])){
                        console.log("Das " + fields[i].name + " feld ist pflicht...");
                    }
                }

                if(isChecked(fields[i])){
                    contact.add(fields[i].name, fields[i].value);
                }

                console.log(fields[i].checked);
                break;

            default:
                if(isRequired(fields[i])){
                    if(fields[i].value === ""){
                        console.log("Das " + fields[i].name + " feld ist pflicht...");
                    }
                }

                if(fields[i].value !== ""){
                    contact.add(fields[i].name, fields[i].value);
                }
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
    console.log(contact.get('firstname'));
};