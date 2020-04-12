import React from "react";
import "./InfoBox.css"



const InfoBox = (props) =>  {
 
 
    return (
        <div className ="info-box">
   
        <div>
            <p id="countryName">{props.country} Coronavirus Stats</p>
            <hr></hr>
            <p>Confirmed: <strong>{props.confirmed}</strong></p>
            <p>Recovered: <strong>{props.recovered}</strong></p>
            <p>Critical: <strong>{props.critical}</strong></p>
            <p>Deaths: <strong>{props.deaths}</strong></p>
        </div>


</div>
    );
}



export default InfoBox;
