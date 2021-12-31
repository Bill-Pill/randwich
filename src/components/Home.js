import React from 'react';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      redirectToRandwich: false,
      redirectToRanddog: false
    }
  }
  
  handleRandwichRedirect = () => {
    this.props.sandwichHandler();
    this.setState({redirectToRandwich: true})
  }

  handleRanddogRedirect = () => {
    this.props.dogHandler();
    this.setState({redirectToRanddog: true})
  }

  render() {
    if (this.state.redirectToRandwich) {
      return ( <Redirect to="/randwich" />)
    } 
    else if (this.state.redirectToRanddog) {
      return ( <Redirect to="/randdog" />)
    }

    return (
      // <div className="card mainFoodCard" style={{ width: '30rem' }}>
      //   <img className="card-img-top" src="https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/20733-all-american-club-sandwich-600x600.jpg?ext=.jpg" alt="Card image cap" />
      //   <div className="card-body">
      //     <a href="#" className="randwich_btn btn btn-warning" size="lg" onClick={this.handleRandwichRedirect}>
      //       Randwich!</a>
      //     <br></br>
      //       <br></br>
      //       <button className="hotdog_btn btn btn-warning" size="lg" onClick={this.handleRanddogRedirect}>
      //       RandDog
      //       </button>
      //   </div>
      // </div>

      <div className="container">
          <div className="row img">
            <div className="col-md-6 offset-md-3">
              <div>
                <img className="mainFood"
                  src={require('../assets/randwich.jpg')}>
                </img>
              </div>
            </div>
          </div>
          <div className="row randbtn">
            <div className="col-md-6 offset-md-3">
              <br></br>
              <button className="randwich_btn btn btn-warning" size="lg" onClick={this.handleRandwichRedirect}>
                Randwich!
              </button>
              <br></br>
              <br></br>
              <button className="hotdog_btn btn btn-warning" size="lg" onClick={this.handleRanddogRedirect}>
                RandDog
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;