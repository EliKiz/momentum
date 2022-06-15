import timer from './modules/timer';
import hi from './modules/hi';
import slider from './modules/slider';
import weather from './modules/weather';
import quote from './modules/quote';
import audio from './modules/audio';
// import playList from './modules/playList';

window.addEventListener('DOMContentLoaded', () => { 
    'use strict';
    timer();
    hi();
    slider();
    weather();
    quote();
    audio();
    // playList();
    // console.log(playList());
});