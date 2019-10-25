import React from 'react'

class Hotdog extends React.Component {

  render() {
    const dogplaceDetailsObj = this.props.place
    return (
      <div className="container">
        <div className="row img">
          <div className="col-md-6 offset-md-3">
            <div>
              <img className="mainFood" src={dogplaceDetailsObj.image}></img>
              <p>Name: {dogplaceDetailsObj.name}</p>
              <p>Phone: {dogplaceDetailsObj.phone}</p>
              <p>Price: {dogplaceDetailsObj.price}</p>
              <p>Address: {dogplaceDetailsObj.address}</p>
              <p>City: {dogplaceDetailsObj.city}</p>
              <p>Zip: {dogplaceDetailsObj.zip}</p>
              <p>Distance: {dogplaceDetailsObj.distance} miles</p>
            </div>
          </div>
        </div>
        <div className="row randbtn">
          <div className="col-md-6 offset-md-3">
            <br></br>
            <button className="randwich_btn btn btn-warning" size="lg" onClick={this.props.clickHandler}>
              Eh.. another randdog please
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hotdog;
