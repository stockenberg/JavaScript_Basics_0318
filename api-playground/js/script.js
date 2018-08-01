var score = 0;
window.onload = function (){
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(res => {
            for(var i = 0; i < res.data.length; i++){
                var li = document.createElement('li');
                var img = document.createElement('img');
                img.src = res.data[i].flag;
                img.dataset.land = res.data[i].name;
                img.height = 100;
                img.onclick = function (event){
                    var answer = window.prompt('What land is this ? ');
                    if(event.target.dataset.land.match(answer)){
                        alert('Richtig, es ist ' + event.target.dataset.land);
                        score += 5;
                        document.getElementById('score').innerHTML = score;
                        event.target.parentElement.remove();
                    }else{
                        alert('Nein es ist: ' + event.target.dataset.land);
                    }
                };


                li.appendChild(img);
                document.getElementById('lands').appendChild(li);
            }
        });
};