import React, { Component } from "react";
import InfoBox from "../InfoBox";
import "./ExtraCountries.css";
import apiKey from "../../Secrets"


  class ExtraCountries extends Component {
    constructor (props) {
      super(props)
      this.state = {
      coronaInfo: " ",
      countryName: [""]
        };

    }

     


       componentDidMount() {
        fetch(`https://covid-19-data.p.rapidapi.com/country?format=undefined&name=${this.props.countryName}`, {
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
      

        
        <div className="extra-countries-info">
      
                <InfoBox  
                country = {this.state.coronaInfo[0].country}
                confirmed = {parseFloat(this.state.coronaInfo[0].confirmed).toLocaleString('en')}
                recovered  = {parseFloat(this.state.coronaInfo[0].recovered).toLocaleString('en')}
                critical = {parseFloat(this.state.coronaInfo[0].critical).toLocaleString('en')}
            deaths = {parseFloat(this.state.coronaInfo[0].deaths).toLocaleString('en')} /> 
                
        </div>
    );
}
}


export default ExtraCountries;
