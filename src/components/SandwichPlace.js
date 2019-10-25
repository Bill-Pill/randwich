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
      </div>
      
    );
  }
}

export default SandwichPlace;