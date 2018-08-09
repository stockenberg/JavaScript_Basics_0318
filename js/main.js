function TestClass () {
    this.callMe = function () {
        $('p').html();
    }
}

$(document).ready(function () {

    $('form').submit(function (ev) {

        var errors = {};
        ev.preventDefault();

        if($(this).find('input[name="firstname"]').val() === ""){
            errors.firstname = "Bitte vornamen angeben!";
        }

        if($(this).find('input[name="lastname"]').val() === ""){
            errors.lastname = "Bitte lastname angeben!";
        }


        if(!errors.firstname && !errors.lastname){
            console.log("form submitted");
            $('body').append('Erfolgreich versandt');

            $.ajax({
                method: "GET",
                data: ['my data array'],
                url: "null"
            })
            .success(function(res){
                console.log(res);
            })
        }


    })


});