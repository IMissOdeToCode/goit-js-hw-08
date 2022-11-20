import Player from '@vimeo/player';
// import lodash from 'lodash';
const lodash = require('lodash');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

let time = 0;
time = localStorage.getItem('videoplayer-current-time') || 0;
console.log(`last time you finished at ${time} sec`);
player.setCurrentTime(time);

player.on('play', function () {
  console.log(`start play from ${time}`);
});

player.on('pause', function () {
  console.log(`pause play at ${time}`);
});

player.on('timeupdate', lodash.throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
