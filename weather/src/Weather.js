import React, { useState } from 'react';
import "./weather.css";


const Weather = () => {
    const[city,setcity]=useState("");
    const[result,setresult]=useState("")
    const changehandler=e=>{
        setcity(e.target.value) 
        console.log(city)
    }
    const submithandler=e=>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
            response=>response.json()
        ).then(data=>{
           const kelvin=data.main.temp;
           const celsius=kelvin-273.15;
           setresult("Temperature at"+" "+city+"\n"+Math.round(celsius)+"°C ") 
       setcity("")
        }).catch(error=>console.log(error))
    }
    return (
        <div>
        <center>
        <div className='container'>
            <h1 className='card-title'>Weather App</h1> 
           <div className='card-body'>
            
            <form onSubmit={submithandler}>
                <input type="text" name="city" value={city} onChange={changehandler} /><br></br>
                <input type="submit" value="Get Temperature"/><br></br>
            </form>
            <div>
            <h1 className='head'>{result} </h1>
            </div>
    
            
        
            
            </div>
            
            
            
            </div>
             </center>
             </div>
    
    );
};

export default Weather;