/**
 * My Accordion class
 * @param className
 * @constructor
 */
function Accordion(className){
    /** classname of acc open element */
    this._classname = className;
    /** if set to true, multiple acc entries can be shown */
    this.multiple = true;
    /** Gets all accordion entries and binds click handler */
    this.init = function () {
        window.multiple = this.multiple;
        var entries = document.getElementsByClassName(this._classname);
        for(var i = 0; i < entries.length; i++){
            entries[i].onclick = this.open;
        }
    };
    /** opens acc entries based on multiple settings */
    this.open = function (ev) {
        if(window.multiple){
            ev.target.nextElementSibling.classList.toggle('show');
            return null;
        }
        var elements = document.getElementsByClassName('show');
        for(var i = 0; i < elements.length; i++){
            elements[i].classList.remove('show');
        }
        ev.target.nextElementSibling.classList.add('show');
    };
}
/** call it baby */
var acc = new Accordion('acc-header');
acc.multiple = false;
acc.init();


