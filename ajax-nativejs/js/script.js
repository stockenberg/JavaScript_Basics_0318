

document.getElementById('cto').onclick = function () {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            var usersList = document.getElementById('userlist');
            var users = JSON.parse(this.responseText);
            for(var i = 0; i < users.length; i++){
                var li = document.createElement('li');
                li.innerHTML = users[i].username;
                usersList.appendChild(li);
            }
        }
    };

    ajax.open('GET', 'ajax.json');
    ajax.send();
};

