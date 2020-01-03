const request = require('request');
const fs = require('fs');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(
    'https://api.ipify.org?format=json',
    (error, response, body) => {
      const data = JSON.parse(body);
      if (error) return callback(error, null)
 
      if (response.statusCode !== 200) {
        callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
        return;
      }
      
      const ip = JSON.parse(body).ip;
      callback(null, ip);
    });
};

const fetchCoordsByIP = function(ip, callback) {
  request(
    'https://ipvigilante.com/8.8.8.8',
    (data) => {
      console.log(data);
      // const latitude = JSON.parse(data.latitude);
      // const longtitude = JSON.parse(data.longtitude);

      // if(error) return callback(error, null);
      
    // return lat;
    }
  )
  // console.log(latitude, longtitude);
}

module.exports = { 
  fetchMyIP,
  fetchCoordsByIP
 };
