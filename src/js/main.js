import timer from './modules/timer';
import hi from './modules/hi';
import slider from './modules/slider';
import weather from './modules/weather';

window.addEventListener('DOMContentLoaded', () => { 
    'use strict';
    timer();
    hi();
    slider();
    weather();
});