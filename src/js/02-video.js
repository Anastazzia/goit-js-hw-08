import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const lodash = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const vimeoPlayer = new Player(iframe);

vimeoPlayer.on('timeupdate', function (event) {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime.toString());
});

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
    vimeoPlayer.setCurrentTime(parseFloat(savedTime));
}

vimeoPlayer.on('timeupdate', throttle(function (event) {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime.toString());
}, 1000));