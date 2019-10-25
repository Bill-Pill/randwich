import React from 'react';
import axios from 'axios';
import './SandwichPlace'
import SandwichPlace from './SandwichPlace';
import Hotdog from './Hotdog';

const APIKEY = 'Bearer PnG_RCfAxrBcfA44dnIwv1BALh7sMSIRC5TVEJ9JaWZBsCcUG' + 
               'Og5DkXgLUmqmnJYK2cy0u71s9LWp1lgRJ1Y3VhMsuN5HBph6RoA2VmAjqjIIoNODSUmWLGlGmWnXXYx'

class App extends React.Component {
    constructor() {
    super()

    this.state = {
      currentLat: {
        latCoord: null,
      },
      currentLong: {
        longCoord: null
      },
      activeSandwichPlace: {
        name: null,
        phone: null,
        image: null,
        price: null,
        address: null,
        city: null,
        zip: null,
        distance: null,
      },
      activeDogPlace: {
        name: null,
        phone: null,
        image: null,
        price: null,
        address: null,
        city: null,
        zip: null,
        distance: null,
      }
    }
  }

  // When invoked, grabs current latitude and longitude
  // coordinates of user and saves to state
  fetchCurrentSandwichCoords = () => {

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
      this.setState({currentLong:{longCoord: crd.longitude} }, this.fetchMeASandwich)
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

  fetchCurrentDogCoords = () => {

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
      this.setState({currentLong:{longCoord: crd.longitude} }, this.fetchMeADog)
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



  // Queries Yelp API with appropriate key and
  // returns sandwich restaurants near current
  // location
  fetchMeASandwich = () => {

    // Creates/sets axios instance with default values
    const axiosSandwichInstance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses',
    timeout: 10000,
    headers: {'Authorization': APIKEY}
    });

    var latTest = this.state.currentLat.latCoord;
    var longTest = this.state.currentLong.longCoord;




    // Get request pre-populated with above defaults.
    // Save specified values to state if successful
    axiosSandwichInstance.get(`search?latitude=${latTest}&longitude=${longTest}&radius=8000&categories=sandwiches&limit=50`)
      .then((response) => {
        // function to retrieve a random sandwich shop from our limit of 50 
        let i = Math.floor(Math.random() * response.data.businesses.length) + 1;

        //convert distance value from response from meters to miles
        const milesDistance = (response.data.businesses[i].distance * 0.000621371192).toFixed(2)

        // object populated with API response items
        const activeSandwichPlaceDetails = {
          name: response.data.businesses[i].name,
          phone: response.data.businesses[i].display_phone,
          image: response.data.businesses[i].image_url,
          price: response.data.businesses[i].price,
          address: response.data.businesses[i].location.address1,
          city: response.data.businesses[i].location.city,
          zip: response.data.businesses[i].location.zip_code,
          distance: milesDistance
        }
        // Setting state with object containing API response items
         this.setState({activeSandwichPlace: activeSandwichPlaceDetails })
         console.log('current state of activeSandwichPlace', this.state.activeSandwichPlace)
         console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
    }) 
  }

  fetchMeADog = () => {

    // Creates/sets axios instance with default values
    const axiosDogInstance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses',
    timeout: 10000,
    headers: {'Authorization': APIKEY}
    });

    var latTest = this.state.currentLat.latCoord;
    var longTest = this.state.currentLong.longCoord;




    // Get request pre-populated with above defaults.
    // Save specified values to state if successful
    axiosDogInstance.get(`search?latitude=${latTest}&longitude=${longTest}&radius=8000&categories=hotdog&limit=50`)
      .then((response) => {
        // function to retrieve a random sandwich shop from our limit of 50 
        let i = Math.floor(Math.random() * response.data.businesses.length) + 1;

        //convert distance value from response from meters to miles
        //const milesDistanceDog = (response.data.businesses[i].distance * 0.000621371192).toFixed(2)

        // object populated with API response items
        const activeDogPlaceDetails = {
          name: response.data.businesses[i].name,
          phone: response.data.businesses[i].display_phone,
          image: response.data.businesses[i].image_url,
          price: response.data.businesses[i].price,
          address: response.data.businesses[i].location.address1,
          city: response.data.businesses[i].location.city,
          zip: response.data.businesses[i].location.zip_code,
          //distance: milesDistanceDog
        }
        // Setting state with object containing API response items
         this.setState({activeDogPlace: activeDogPlaceDetails })
         console.log('current state of activeDogPlace', this.state.activeDogPlace)
         console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
    }) 
  }

  handleSandwichClick = () => {
    this.fetchCurrentSandwichCoords()
  }


  handleDogClick = () => {
    this.fetchCurrentDogCoords()
  }
  render() {
    return (
      <div className="container">
        <div className="row img">
          <div className="col-md-6 offset-md-3">
            <Hotdog place={this.state.activeDogPlace} />
            <SandwichPlace place={this.state.activeSandwichPlace} />
          </div>
        </div>
        <div className="row randbtn">
          <div className="col-md-6 offset-md-3">
            <br></br>
           <button className="randwich_btn btn btn-warning" size="lg" onClick={this.handleSandwichClick}>
            Randwich!
           </button>
           <br></br>
           <br></br>
           <button className="hotdog_btn btn btn-warning" size="lg" onClick={this.handleDogClick}>
            RandDog
           </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;