$(document).ready(function() {
    var deckId = null;
    var score = 0;
    $('#shuffleDeck').click(function () {
        score = 0;
        $.ajax({
            method: "GET",
            url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        }).then(function(res){
            console.log(res);
            deckId = res.deck_id;
        })
    })

    var values = {
        QUEEN: 10,
        JACK: 10,
        KING: 10,
        ACE: 11,
    };

    $('#pullCard').click(function() {
        $.ajax({
            method: "GET",
            url: "https://deckofcardsapi.com/api/deck/"+deckId+"/draw/?count=1"
        }).then(function(res){
            console.log(res);
            $('#cards').empty();

            for(var i = 0; i < res.cards.length; i++){
                if(res.cards[i].value.length > 2){
                    score += parseInt(values[res.cards[i].value]);
                }else{
                    score += parseInt(res.cards[i].value);
                }
                $('#cards').append('<img src="'+res.cards[i].images.png+'">')

            }

            if(score > 21){
                alert('u lost...!');
            }

            if(score === 21){
                alert("Lucky u!");
            }

            console.log(score);

        })
    })

    // Maybe u wanna build black-jack ? ;)
})