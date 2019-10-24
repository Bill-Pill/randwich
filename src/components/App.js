import React from 'react';


class App extends React.Component {
    constructor() {
    super()

    this.state = {
      currentCoords: {
        latCoord: null,
        longCoord: null
      }
    }
  }
  // When invoked, grabs current latitude and longitude
  // coordinates of user and saves to state
  fetchCurrentCoords = () => {

    // Geolocation parameters ensures a fresh location pull
    // and stops trying to fetch if longer than 5 seconds
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    // On successful fetch, saves coords.
    const success = (position) => {
      const crd = position.coords;
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    // If failed to fetch location, log errors in console.
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
    this.fetchCurrentCoords()
  }

  render() {
    return (
      <button className="btn btn-warning" size="lg"  onClick={this.handleClick}>
        Randwich
      </button>
    );
  }
}

export default App;
