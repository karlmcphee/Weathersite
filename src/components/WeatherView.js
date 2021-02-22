import React from 'react'

const WeatherWindow = ({ data, w_icon, cdate }) => {
    console.log(w_icon)
    const link = `http://openweathermap.org/img/wn/${w_icon}@2x.png`
    const d = new Date()
    d.setDate(d.getDate() + cdate); 
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <div className="item">
             <h5><span><div style={{textAlign: 'center'}}>
             {d.toLocaleString("default", { weekday: "long" })}
             </div><div style={{textAlign: 'center'}}>
                 <img src={link}  /></div></span> 
            <br />Temperature: {data}°</h5><br /><br />
        </div>
    )
}

export default WeatherWindow
