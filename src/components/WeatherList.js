import React from 'react'
import WeatherView from './WeatherView'

const WeatherList = ({ data }) => {
    
    let renderedList = "";
    if(data[0]){
         renderedList = data.map((day, i) => {
            return <WeatherView data={day.temp.day} w_icon={day.weather[0].icon} cdate={i} />
        })
    } 
    
       // return <div className="ui relaxed divided list">{renderedList}</div>
       return <div className="ui relaxed divided list">{renderedList}</div>

}

export default WeatherList
