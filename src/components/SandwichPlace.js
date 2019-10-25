import React from 'react'

class SandwichPlace extends React.Component {

  render() {
    const placeDetailsObj = this.props.place
    const directionsURL = `https://www.google.com/maps/dir//${placeDetailsObj.address},+${placeDetailsObj.city},+${placeDetailsObj.zip}`
    return (
      <div className="container">
        <div className="row img">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <img src={placeDetailsObj.image} className="card-img-top"/>
            </div>
            <div className="card-body">
              <h5 className="card-title" >{placeDetailsObj.name}</h5>
              <p className="card-text card-price">Price: <span>{placeDetailsObj.price}</span></p>
              <p className="card-text">Phone: {placeDetailsObj.phone}</p>
              <p className="card-text">Address: {placeDetailsObj.address}</p>
              <p className="card-text">City: {placeDetailsObj.city}</p>
              <p className="card-text">Zip: {placeDetailsObj.zip}</p>
              <p className="card-text">Distance: {placeDetailsObj.distance} miles</p>
              <a className="btn btn-primary" href={directionsURL} target="_blank">Take me to that randwich!</a>
              <p className="card-text"><small className="text-muted">Mouth not watering? Click again for another location!</small></p>
            </div>
          </div>
        </div>
        <div className="row randbtn">
          <div className="col-md-6 offset-md-3">
            <br></br>
            <button className="randwich_btn btn btn-warning" size="lg" onClick={this.props.clickHandler}>
              Eh.. another randwich please
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SandwichPlace;