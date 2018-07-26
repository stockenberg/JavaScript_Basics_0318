
var form = document.forms[0];
var customerFeedback = {
    firstname: "Bitte das Vorname Feld ausfüllen",
    agb: "Bitte akzeptieren sie unsere Allg. Blaaa",
    default: function (fieldname){
        return "Das " + fieldname + " feld ist pflicht..."
    }
};
var contact = {
    data: {},
    add: function (key, value) {
        this.data[key] = value.toLowerCase().trim();
    },
    get: function (key){
        return this.data[key];
    }
};

var message = new Message();
form.onsubmit = function (ev) {
    ev.preventDefault();
    var fields = ev.target;
    for(var i = 0; i < fields.length - 1; i++){

        deleteErrors('err_' + fields[i].name);

        switch (fields[i].type){
            case 'radio':
                if(isChecked(fields[i])){
                    contact.add(fields[i].name, fields[i].value);
                }
                break;

            case 'checkbox':
                if(isRequired(fields[i])){
                    if(!isChecked(fields[i])){
                        writeErrors(fields[i].parentElement, fields[i].name);
                        message.success(customerFeedback[fields[i].name]);

                    }
                }

                if(isChecked(fields[i])){
                    contact.add(fields[i].name, fields[i].value);
                }
                break;

            default:
                if(isRequired(fields[i])){
                    if(fields[i].value === ""){
                        writeErrors(fields[i].parentElement, fields[i].name);
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

    function writeErrors(container, name){
        var para = document.createElement('p');
        para.classList.add('error');
        para.classList.add('err_' + name);
        para.innerText = (customerFeedback[name] !== undefined) ? customerFeedback[name] : customerFeedback.default(name);
        container.appendChild(para);
    }

    function deleteErrors(fieldname){
        var errorField = document.getElementsByClassName(fieldname)[0];
        if(errorField !== undefined){
            errorField.remove();
        }
    }

};