const request = require("request");

const API_KEY = "b51a716e2e08978f0f88d908fed10c33";

function currentTemp(lat, long) {
  const request_URL = `https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`;

  request(
    {
      url: request_URL,
      json: true,
      timeout: 2000
    },
    (error, response, body) => {
      if (error) {
        console.log("Unable to connect with forecast service.");
      } else if (response.statusCode === 400) {
        console.log("Unable to fetch weather");
      } else if (!error && response.statusCode === 200) {
        console.log("Temperature: ", body.currently.temperature);
      }
    }
  );
}

module.exports = currentTemp;
