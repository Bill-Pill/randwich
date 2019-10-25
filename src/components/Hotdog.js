import React from 'react'

class Hotdog extends React.Component {

  render() {
    const dogplaceDetailsObj = this.props.place
    return (
      <div>
        <img className="mainDog" src={dogplaceDetailsObj.image}></img>
        <p>Name: {dogplaceDetailsObj.name}</p>
        <p>Phone: {dogplaceDetailsObj.phone}</p>
        <p>Price: {dogplaceDetailsObj.price}</p>
        <p>Address: {dogplaceDetailsObj.address}</p>
        <p>City: {dogplaceDetailsObj.city}</p>
        <p>Zip: {dogplaceDetailsObj.zip}</p>
        <p>Distance: {dogplaceDetailsObj.distance} miles</p>
      </div>
      
    );
  }
}

export default Hotdog;
