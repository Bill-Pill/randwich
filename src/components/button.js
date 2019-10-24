// getGeolocation = (lat, lng) => {
//   const latlng = lat + "," + lng;
//   fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=${__KEY}`)
//     .then(res => res.json())
//     .then(data => console.log(data.results));
// }





// displayLocation = (position) => {
//   const lat = position.coords.latitude;
//   const lng = position.coords.longitude;
//   const latlng = {
//     lat,
//     lng
//   }
//   getGeolocation(lat, lng) // our new function call
// }



https://api.yelp.com/v3/businesses/search?accessToken=API_KEY&term=food