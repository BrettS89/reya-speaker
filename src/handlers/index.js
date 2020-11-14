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

const muteHandler = () => {
  audio.stop();

  while(queue.length) {
    queue.pop()
  }
}

module.exports = {
  muteHandler,
  playAudioHandler,
  stopAudioHandler,
};
