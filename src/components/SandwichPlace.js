import React from 'react'

class SandwichPlace extends React.Component {

  render() {
    const placeDetailsObj = this.props.place
    return (
      <img className="mainSandwich" src={placeDetailsObj.image}></img>
      // <img className="mainSandwich" src="https://s3-media3.fl.yelpcdn.com/bphoto/SiRfp5l__BN1zDV8BLEV7Q/o.jpg"></img>
    );
  }
}

export default SandwichPlace;