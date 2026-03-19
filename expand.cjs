const https = require('https');

https.get('https://maps.app.goo.gl/SkLd8TQv6u7KM8ia7', (res) => {
  console.log(res.headers.location);
});
