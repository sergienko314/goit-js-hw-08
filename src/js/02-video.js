import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const idVideo = document.querySelector('#vimeo-player');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEYVIDEO = 'videoplayer-current-time';
player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem(KEYVIDEO, event.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem(KEYVIDEO));
