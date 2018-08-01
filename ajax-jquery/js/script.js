
$('#cto').click(function () {

    $.ajax({
        url: "ajax.json"
    }).done(function(res){
        $('#userlist').append('<li>' + res[0].username + '</li>');
    });


});
