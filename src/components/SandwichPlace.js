import React from 'react'

class SandwichPlace extends React.Component {

  render() {
    const placeDetailsObj = this.props.place
    return (

      <div>
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
          <p className="card-text"><small className="text-muted">Mouth not watering? Click again for another location!</small></p>
        </div>
      </div>
    );
  }
};


export default SandwichPlace;