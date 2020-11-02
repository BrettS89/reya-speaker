require('dotenv').config();
const app = require('./src');

app.listen(process.env.PORT, () => {
  console.log('server listening');
});
