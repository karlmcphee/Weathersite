import React from 'react'

const WeatherWindow = ({ data, w_icon, cdate }) => {
    console.log(w_icon)
    const link = `http://openweathermap.org/img/wn/${w_icon}@2x.png`
    const d = new Date()
    d.setDate(d.getDate() + cdate); 
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <div>
            <img src={link} />
            <div>{d.toLocaleString("default", { weekday: "long" })}: The temperature will be {data}<br/><br/></div>
        </div>
    )
}

export default WeatherWindow
