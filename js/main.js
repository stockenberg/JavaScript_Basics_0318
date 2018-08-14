var target = undefined,
    page = location.hash.split('#')[1],
    whitelist = ['about', 'home'];

function loadPage(target) {
    if(isAllowed(whitelist, target)){
        $('#main').load('pages/' + target + '.html', function () {
            console.log("hat geklappt!");
            $('.test').html('Hall das ist mein user');
        });
    }else{
        alert('nice try!');
    }
}

function isAllowed(whitelist, page) {
    console.log(page)
    var checker = false;
    for(var i = 0; i < whitelist.length; i++){
        if(whitelist[i] === page){
            checker = true;
        }
    }

    return checker;
}


if(page !== undefined){
    target = page;
}


$('nav a').click(function () {

    var href = $(this).attr("href").split('#')[1];
    target = href;

    loadPage(target);
 
});

loadPage(target);
