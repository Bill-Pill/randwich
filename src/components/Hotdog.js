import React from 'react'

class Hotdog extends React.Component {

  render() {
    const dogplaceDetailsObj = this.props.place
    const directionsURL = `https://www.google.com/maps/dir//${dogplaceDetailsObj.address},+${dogplaceDetailsObj.city},+${dogplaceDetailsObj.zip}`
    return (
      <div className="container">
        <div className="row img">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <img src={dogplaceDetailsObj.image} className="card-img-top"/>
            </div>
            <div className="card-body">
              <h5 className="card-title" >{dogplaceDetailsObj.name}</h5>
              <p className="card-text card-price"><strong>Price:</strong><span>{dogplaceDetailsObj.price}</span></p>
              <p className="card-text"><strong>Phone:</strong> {dogplaceDetailsObj.phone}</p>
              <p className="card-text"><strong>Address:</strong> {dogplaceDetailsObj.address}</p>
              <p className="card-text"><strong>City:</strong> {dogplaceDetailsObj.city}</p>
              <p className="card-text"><strong>Zip:</strong> {dogplaceDetailsObj.zip}</p>
              <p className="card-text"><strong>Distance:</strong> {dogplaceDetailsObj.distance}<strong>miles</strong></p>
              <a className="btn btn-primary" href={directionsURL} target="_blank">Take me to that randdog!</a>
              <p className="card-text"><small className="text-muted">Mouth not watering? Click again for another location!</small></p>
            </div>
          </div>
        </div>
        <div className="row randbtn">
          <div className="col-md-6">
            <br></br>
            <button className="randwich_btn btn btn-warning" size="lg" onClick={this.props.clickHandler}>
              Eh.. another randdog please
            </button>
          </div>
          <br></br>
          </div>
        </div>
    );
  }
}

export default Hotdog;
