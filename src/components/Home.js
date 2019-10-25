import React from 'react';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      redirectToRandwich: false
    }
  }
  
  handleClickRedirect = () => {
    this.props.clickHandler();
    this.setState({redirectToRandwich: true})
  }

  render() {
    if (this.state.redirectToRandwich) {
      return ( <Redirect to="/randwich" />)
    }

    return (
      <div className="container">
          <div className="row img">
            <div className="col-md-6 offset-md-3">
              <div>
                <img className="mainSandwich"
                  src="https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/20733-all-american-club-sandwich-600x600.jpg?ext=.jpg">
                </img>
              </div>
            </div>
          </div>
          <div className="row randbtn">
            <div className="col-md-6 offset-md-3">
              <br></br>
              <button className="randwich_btn btn btn-warning" size="lg" onClick={this.handleClickRedirect}>
                Randwich!
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;