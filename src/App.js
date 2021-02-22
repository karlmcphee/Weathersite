import React from 'react';
import ReactDOM from 'react-dom';
//import Axios from './apis/Axios';
import axios from 'axios'
import Query from './components/Query';
import WeatherList from './components/WeatherList'
import Tester from './Tester'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const KEY='f489be4c407d1f081c3e2c14f9ef9ada';
const KEY2='pk.eyJ1Ijoia21jcGhlZSIsImEiOiJja2RoeXBiNHYxM2dqMnJ0NWs2OXIyNmhiIn0.fadYi7tOor_G4z97mf8UkQ'

class App extends React.Component {
  state = {response: '', daily: [], error: false}
  onSubmit = async term => {
    try {
      const response = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + term + '.json', {
      params: {
          access_token: KEY2,
          limit: 1
      }
    }) 
    
    const response2 = await axios.get('https://api.openweathermap.org/data/2.5/onecall', {
        params: {
               lat: response.data.features[0].geometry.coordinates[1],
               lon: response.data.features[0].geometry.coordinates[0],
               appid: KEY,
        }
    })

    this.setState({response: response2.data.current.weather[0].main, daily: response2.data.daily, error: ""});
    console.log(this.state.daily)
  } catch(error) {
    this.setState({error: true})

  }
  };
 // <WeatherList data={this.state.daily} /></div></div>
   
    render() {
      return (
        <div className="ui container">
          <Query onFormSubmit={this.onSubmit} />
          <label><h3>{this.state.error ? <div className="ui red message"> Something unexpected happened, try again later.</div> : null }</h3></label>
          <div className="table">
          <WeatherList data={this.state.daily} /></div></div>
      )
    }
}
export default App