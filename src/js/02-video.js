import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const idVideo = document.querySelector('#vimeo-player');
const obj = {
  name: 'gfdsgfds',
};
obj.name;
const { name } = obj;
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEYVIDEO = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(KEYVIDEO, seconds);
  }, 1000)
);
const checkLS = localStorage.getItem(KEYVIDEO);
checkLS && player.setCurrentTime(checkLS);
