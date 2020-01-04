//index.js

const { fetchMyIP } = require("./iss");
const { fetchCoordsByIP } = require("./iss");

// fetchMyIP((error, ip) => {
//   if(error){
//     console.log('it didn\'n work!', error);
//     return;
//   }
//   console.log('it worked!', ip);
// });

fetchCoordsByIP(fetchMyIPß, (error, data) => {
	console.log(data, "callback to fetchCoords");
});
