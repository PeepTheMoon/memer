const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true
}));

app.use('/api/v1/memes', require('./routes/memes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

// app.get('/products/:id', function(req, res, next) {
//   res.json({ msg: 'CORS is enable for all origins.' });
// });

// app.listen(80, function() {
//   console.log('CORS-enabled web server listening on port 80');
// });

module.exports = app;
