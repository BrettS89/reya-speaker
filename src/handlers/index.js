const audio = require('../utilities/audio');

const playAudioHandler = file => {
  console.log(file);
  audio.downloadAndPlay(file);
};

const stopAudioHandler = () => {
  audio.stop();
};

module.exports = {
  playAudioHandler,
  stopAudioHandler,
};
