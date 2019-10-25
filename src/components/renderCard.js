class SandwichPlace extends React.Component {

  render() {
    const placeDetailsObj = this.props.place
    return (
      <articlediv className="card mb-3" style = "max-width: 540px;" >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="..." class="card-img" alt="...">
      </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>

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

