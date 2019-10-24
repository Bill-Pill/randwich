import React from 'react';
import axios from 'axios';

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

  fetchMeASandwich = () => {
    const axiosSandwichInstance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses',
    timeout: 1000,
    headers: {'Authorization': 'Bearer PnG_RCfAxrBcfA44dnIwv1BALh7sMSIRC5TVEJ9JaWZBsCcUGOg5DkXgLUmqmnJYK2cy0u71s9LWp1lgRJ1Y3VhMsuN5HBph6RoA2VmAjqjIIoNODSUmWLGlGmWnXXYx'}
    });

    axiosSandwichInstance.get('search?latitude=36&longitude=-79&radius=33333&categories=sandwiches')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
  })
    
  }

  

  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
    this.fetchCurrentCoords()
    this.fetchMeASandwich()
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