import React from 'react';


class App extends React.Component {
    constructor() {
    super()

    this.state = {
      currentLat: {
        latCoord: null,
      },
      currentLong: {
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

    // On successful fetch, saves coords to state.
    const success = (position) => {
      const crd = position.coords;
      this.setState({currentLat:{latCoord: crd.latitude} })
      this.setState({currentLong:{longCoord: crd.longitude} })
      // Test logs for coords
      console.log("In state: ", "lat coord is: ", this.state.currentLat.latCoord)
      console.log("In state: ", "long coord is: ", this.state.currentLong.longCoord)
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