import React from 'react'

class SandwichPlace extends React.Component {

  render() {
    const placeDetailsObj = this.props.place
    return (
      <div>
        <img className="mainSandwich" src={placeDetailsObj.image}></img>
        <p>Name: {placeDetailsObj.name}</p>
        <p>Phone: {placeDetailsObj.phone}</p>
        <p>Price: {placeDetailsObj.price}</p>
        <p>Address: {placeDetailsObj.address}</p>
        <p>City: {placeDetailsObj.city}</p>
        <p>Zip: {placeDetailsObj.zip}</p>
        <p>Distance: {placeDetailsObj.distance} miles</p>
      </div>
      
    );
  }
}

export default SandwichPlace;