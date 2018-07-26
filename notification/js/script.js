

// 1. Per Event - Eintrag erzeugen
// 2. Timer - delete
// last-child child insert


function Message(){
    /**
     * Default value grey
     * @type {string}
     * @private
     */
    this._background = "grey";

    /**
     * Builds the HTML Node for an Notification Message
     * @param msg
     * @private
     */
    this._buildNotification = function (msg) {
        var li = document.createElement('li');
        li.classList.add('notification_entry');
        li.style.background = this._background;
        li.innerHTML = msg;

        var container = document.getElementById('notification_container');
        container.appendChild(li);

        setTimeout(function () {
            li.remove();
        }, 5000);
    };

    this.success = function (msg) {
        this._background = "#00c853";
        this._buildNotification(msg);
    };

    this.warning = function (msg) {
        this._background = "#ffa000";
        this._buildNotification(msg);
    };

    this.error = function (msg) {
        this._background = "#bf360c";
        this._buildNotification(msg);
    };

    this.info = function (msg) {
        this._background = "#03a9f4";
        this._buildNotification(msg);x
    }
}

/*
document.getElementById('success').onclick = function () {
    message.success(document.getElementById('notification_message').value);
} */

var message = new Message();
message.success("Formular wurde erfolgreich versandt");
message.warning("Formular wurde erfolgreich versandt");
message.error("Formular wurde erfolgreich versandt");
message.info("Formular wurde erfolgreich versandt");



