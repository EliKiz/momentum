import {showFullDate, showTime, showDate} from './modules/timer';
import hi from './modules/hi';
import slider from './modules/slider';
import weather from './modules/weather';
import getQuotes from './modules/quote';
import audio from './modules/audio';
import translate from './modules/translate';
import modals from './modules/modals';
import settings from './modules/settings';
import todo from './modules/todo';
// import playList from './modules/playList';

window.addEventListener('DOMContentLoaded', () => { 
    'use strict';
    const state = {
        language: 'en',
        photoSource: 'github',
        blocks: ['time', 'date','greeting', 'quote', 'weather', 'audio', 'todolist']
      };
    
    // showFullDate(new Date());
    // showTime();
    // showDate();

    // timer();
    hi();
    slider();
    weather();
    getQuotes('dataRU.json');
    audio();
    translate();
    modals();
    settings(state);
    todo();
    // playList();
    // console.log(playList());
});