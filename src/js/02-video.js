import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(function(event) {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
    const currentTime = parseFloat(savedTime);
    player.setCurrentTime(currentTime).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                console.log('Invalid time value');
                break;
            default:
                console.log('Error occurred:', error);
                break;
        }
    });
}
