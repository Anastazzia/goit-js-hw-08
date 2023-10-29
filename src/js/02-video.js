import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const vimeoPlayer = new Player(iframe);


const savedTime = localStorage.getItem(VIDEO_CURRENT_TIME);
if (savedTime) {
    vimeoPlayer.setCurrentTime(parseFloat(savedTime));
}

vimeoPlayer.on('timeupdate', throttle(function (event) {
    const currentTime = event.seconds;
    localStorage.setItem(VIDEO_CURRENT_TIME, currentTime);
}, 1000));