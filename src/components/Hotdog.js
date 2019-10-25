import React from 'react'

class Hotdog extends React.Component {

  render() {
    const dogplaceDetailsObj = this.props.place
    return (
      <div className="container">
        <div className="row img">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <img src={dogplaceDetailsObj.image} className="card-img-top"/>
            </div>
            <div className="card-body">
              <h5 className="card-title" >{dogplaceDetailsObj.name}</h5>
              <p className="card-text card-price">Price: <span>{dogplaceDetailsObj.price}</span></p>
              <p className="card-text">Phone: {dogplaceDetailsObj.phone}</p>
              <p className="card-text">Address: {dogplaceDetailsObj.address}</p>
              <p className="card-text">City: {dogplaceDetailsObj.city}</p>
              <p className="card-text">Zip: {dogplaceDetailsObj.zip}</p>
              <p className="card-text">Distance: {dogplaceDetailsObj.distance} miles</p>
              <p className="card-text"><small className="text-muted">Mouth not watering? Click again for another location!</small></p>
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
