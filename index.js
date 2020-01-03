//index.js

const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP();
fetchCoordsByIP(fetchMyIP);
	
// fetchMyIP((error, ip) => {
// 	  if(error) {
// 	    console.log("It didn't work!", error);
// 	   return;
// 	 }
	  
// 	  console.log("It worked! IP returned: ", ip);
// 	  });
