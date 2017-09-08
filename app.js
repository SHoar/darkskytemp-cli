const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const currentTemp = require("./currently/currentTemp");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather of",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

geocode.geocodeAddress(argv.address, (errorMessage, results, callback) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    const address = JSON.stringify(results.address)
    , lat = JSON.stringify(results.latitude)
    , lng = JSON.stringify(results.longitude);
    console.log(`Fetching Temperature in ${address}`);
    currentTemp(lat,lng);
  }
});
