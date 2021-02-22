import React from 'react'
import WeatherView from './WeatherView'

const WeatherList = ({ data }) => {
    
    let renderedList = "";
    if(data[0]){
        renderedList = data.map((day, i) => {
    if(i < 7){
      return (
      <WeatherView data={day.temp.day} 
            w_icon={day.weather[0].icon} cdate={i} />
            )}
      })}
        return <div className="ui horizontal list" style={{display: 'inline'}}>
        {renderedList}</div>
    }
  

export default WeatherList
