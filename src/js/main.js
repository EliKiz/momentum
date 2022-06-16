import timer from './modules/timer';
import hi from './modules/hi';
import slider from './modules/slider';
import weather from './modules/weather';
import getQuotes from './modules/quote';
import audio from './modules/audio';
import translate from './modules/translate';
// import playList from './modules/playList';

window.addEventListener('DOMContentLoaded', () => { 
    'use strict';
    
    timer();
    hi();
    slider();
    weather();
    getQuotes('dataRU.json');
    audio();
    translate();
    // playList();
    // console.log(playList());
});