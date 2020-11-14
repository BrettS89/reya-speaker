const fs = require('fs');
const express = require('express');
const io = require('socket.io-client')
const handlers = require('./handlers');
const app = express();

const socket = io(process.env.SPEAKER_API, {
  query: {
    _id: fs.readFileSync(__dirname + '/../_id.txt', { encoding: 'utf-8' }),
  },
  transports: ['websocket']
});

socket.on('PLAY_AUDIO', data => {
  try {
    handlers.playAudioHandler(data.audio);
  } catch(e) {
    console.log('PLAY_AUDIO handler error', e);
  }
});

socket.on('MUTE', data => {
  try {
    handlers.muteHandler();
  } catch(e) {
    console.log('PLAY_AUDIO handler error', e);
  }
});

module.exports = app;
