import React from 'react';


class App extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button className="btn btn-warning" size="lg"  onClick={this.handleClick}>
        Randwich
      </button>
    );
  }
}

export default App;
