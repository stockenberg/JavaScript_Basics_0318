'use strict';

import Events from './events/Events.js';
import Logger from './Logger.js';
import Slider from './slider/Slider.js';

class App{


    init(){
        this.registerEvents()
    }

    /**
     * 
     * @param {Event} e 
     */
    handleBoxClick (e) {
        Logger._(e);
        Logger._('Hat geklappt');
    }


    registerEvents() {
        Events.registerEventById('onclick', 'test', this.handleBoxClick)
        Events.registerEventsByClass('onclick', 'box', this.handleBoxClick)
        Events.registerEventsByClass('onclick', 'next', Slider.next)
        Logger._('events registered')
    }



}

let app = new App();
app.init();
