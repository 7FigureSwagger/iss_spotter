const request = require("request");
const fs = require("fs");

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
	request("https://api.ipify.org?format=json", function(error, response, body) {
		if (error) {
			callback(error, null);
			return;
		}
		// if non-200 status, assume server error
		if (response.statusCode !== 200) {
			const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
			callback(Error(msg), null);
			return;
		}
		// if no problems by this point return the data w/ callback
		callback(null, JSON.parse(body).ip);
	});
};

const fetchCoordsByIP = function(ip, callback) {
	request("https://ipvigilante.com/8.8.8.8", function(error, response, body) {
		let data = {};
		data.longitude = JSON.parse(body).data["longitude"];
		data.latitude = JSON.parse(body).data["latitude"];

		if (JSON.parse(body).status !== "success") {
			console.log("shit", JSON.parse(body).errors[0].code);
			error = JSON.parse(body).errors[0].message;
			callback(error);
		}
		// let {longitude, latitude} = JSON.parse(body).data;

		console.log(JSON.parse(body).status);
	});
};

module.exports = {
	fetchMyIP,
	fetchCoordsByIP
};
