'use strict';

class Events {

    /**
     * 
     * @param {String} id 
     * @param {Function} func 
     */
    static registerEventById(event, id, func){
        document.getElementById(id)[event] = func;
    }

    /**
     * 
     * @param {String} event 
     * @param {String} classes 
     * @param {Function} func 
     */
     static registerEventsByClass(event, classname, func){
        console.log(classname)
        let items = document.getElementsByClassName(classname)
        for (let item of items){
            item[event] = func;
        }
        
    }

}

export default Events;