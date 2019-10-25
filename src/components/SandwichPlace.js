import React from 'react'

class SandwichPlace extends React.Component {

  render() {
    const placeDetailsObj = this.props.place
    return (
      <div className="container">
        <div className="row img">
          <div className="col-md-6 offset-md-3">
            <div>
              <img className="mainFood" src={placeDetailsObj.image}></img>
              <p>Name: {placeDetailsObj.name}</p>
              <p>Phone: {placeDetailsObj.phone}</p>
              <p>Price: {placeDetailsObj.price}</p>
              <p>Address: {placeDetailsObj.address}</p>
              <p>City: {placeDetailsObj.city}</p>
              <p>Zip: {placeDetailsObj.zip}</p>
              <p>Distance: {placeDetailsObj.distance} miles</p>
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