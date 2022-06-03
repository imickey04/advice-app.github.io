import axios from 'axios';
import React from 'react';
import './App.css';
import './images/fav.png'

class App extends React.Component{

  state = { advice: '', };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')

      .then((response) => {
        // console.log(response.data.slip.advice)
        const { advice } = response.data.slip;
        this.setState({ advice });
        console.log(advice);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  render(){

    return(
      <div className="app">
        <div className="card">
          <h1 className="heading">{ this.state.advice }</h1>
        </div>
        <div className='advice-button'>
        <button className="btn" onClick={this.fetchAdvice}>
            <span>Endorse Something New!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;