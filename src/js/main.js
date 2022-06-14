import timer from './modules/timer';
import hi from './modules/hi';
import slider from './modules/slider';
import weather from './modules/weather';
import quote from './modules/quote';

window.addEventListener('DOMContentLoaded', () => { 
    'use strict';
    timer();
    hi();
    slider();
    weather();
    quote();
});