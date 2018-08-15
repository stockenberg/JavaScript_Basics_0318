$(document).ready(function() {
    var deckId = null;
    $('#shuffleDeck').click(function () {
        $.ajax({
            method: "GET",
            url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        }).then(function(res){
            console.log(res);
            deckId = res.deck_id;
        })
    })

    $('#pullCard').click(function() {
        $.ajax({
            method: "GET",
            url: "https://deckofcardsapi.com/api/deck/"+deckId+"/draw/?count=5"
        }).then(function(res){
            console.log(res);
            $('#cards').empty();
            for(var i = 0; i < res.cards.length; i++){

                $('#cards').append('<img src="'+res.cards[i].images.png+'">')
            }
        })
    })

    // Maybe u wanna build black-jack ? ;)
})