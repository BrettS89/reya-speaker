const audio = require('../utilities/audio');
const queue = require('../utilities/queue');

const playAudioHandler = file => {
  console.log(file);
  if (queue.length) {
    queue.push(file);
  } else {
    queue.push(file);
    audio.downloadAndPlay(file);
  }
};

const stopAudioHandler = () => {
  audio.stop();
};

module.exports = {
  playAudioHandler,
  stopAudioHandler,
};
