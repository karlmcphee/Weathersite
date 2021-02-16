import React from 'react';
import ReactDOM from 'react-dom';
//import Axios from './apis/Axios';
import axios from 'axios'
import Query from './components/Query';
import WeatherList from './components/WeatherList'

const KEY='f489be4c407d1f081c3e2c14f9ef9ada';
const KEY2='pk.eyJ1Ijoia21jcGhlZSIsImEiOiJja2RoeXBiNHYxM2dqMnJ0NWs2OXIyNmhiIn0.fadYi7tOor_G4z97mf8UkQ'

class App extends React.Component {
  state = {response: '', daily: [], error: ''}
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

    this.setState({response: response2.data.current.weather[0].main, daily: response2.data.daily});
    console.log(this.state.daily)
  } catch(error) {
    this.setState({error: 'An error occurred, please try again later'})

  }
  };

   
    render() {
      return (
        <div className="ui container">
          <label>{this.state.error}</label>
          <Query onFormSubmit={this.onSubmit} />
          <WeatherList data={this.state.daily} />
          <label>{this.state.response}</label>
        </div>
      )
    }
}
export default App