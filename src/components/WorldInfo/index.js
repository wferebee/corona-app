import React, { Component } from "react";
import InfoBox from "../InfoBox";
import "./WorldInfo.css";
import apiKey from "../../Secrets"
  class WorldInfo extends Component {
    
    state = {
      coronaInfo: " "    };

      componentDidMount() {
        fetch("https://covid-19-data.p.rapidapi.com/totals?format=undefined", {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": apiKey
          }
        })
        .then( res => res.json())
        .then( res => {
           this.setState({coronaInfo: res})
           //console.log(this.state.coronaInfo)
           //console.log(this.state.coronaInfo[0].deaths)
        })
      }

render () {


    return (
        <div className="world-info">
           
                <InfoBox  
                country = {"WORLD"}
                confirmed = {parseFloat(this.state.coronaInfo[0].confirmed).toLocaleString('en')}
                recovered = {parseFloat(this.state.coronaInfo[0].recovered).toLocaleString('en')}
                critical = {parseFloat(this.state.coronaInfo[0].critical).toLocaleString('en')}
                deaths = {parseFloat(this.state.coronaInfo[0].deaths).toLocaleString('en')} />
                
        </div>
    );
}
}


export default WorldInfo;
