import React, { Component } from "react";
import InfoBox from "../InfoBox";
import "./CountrySearch.css";
import apiKey from "../../Secrets"

const countriesArray = []

  class CountrySearch extends Component {
    constructor (props) {
      super(props)
      this.state = {
      coronaInfo: " ",
      countryName: "Canada"
        };
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleEnter =this.handleEnter.bind(this);
        this.makingArray = this.makingArray.bind(this);
        this.capitalize_Words =this.capitalize_Words.bind(this)
    }

    makingArray() {
      fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
              "x-rapidapi-key": apiKey
          }
      })
      .then(response => response.json().then(data =>{
          //console.log(data)
          let countries_stat = data.countries_stat;
          for(let i = 0; i<countries_stat.length;i++){
              countriesArray.push(countries_stat[i].country_name);
          }
         //console.log(countriesArray.length);
      }))
      .catch(err => {
          //console.log(err);
      })
      this.makingArray = this.makingArray = () => console.log("Welcome - Have A Nice Day"); // this redefines the function so when its called a second time it doesnt make the API call again
      }


      componentDidMount() {
        this.makingArray();

        fetch(`https://covid-19-data.p.rapidapi.com/country?format=undefined&name=${this.state.countryName}`, {
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

       updateInput(event){
        this.setState({countryName : event.target.value})}
        
        capitalize_Words (str) {
          return str.split(' ').map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
          }

        handleEnter (event) {
          event.target.value = this.capitalize_Words(event.target.value)
          if (13 === event.keyCode) {
            
            if (countriesArray.includes(event.target.value) === false || (event.target.value.length) === 0) {
              alert(`Please Try Again /br Try checking Your Spelling /br  Make Sure You Spelled The Name of the Country Correctly`);
            } else {
              //console.log('Your input value is: ' + this.state.countryName)
              
              this.setState({countryName : event.target.value},()=>(this.componentDidMount()));
            }
          }
        }

        handleSubmit(event){
          event.preventDefault();
          
          if ((this.state.countryName.length) === 0 || countriesArray.includes(this.state.countryName) === false ) {
            //console.log( "this is it" + this.state.countryName)
            alert("Please Try Again: \n\nPlease Choose A Valid Country. \n\nOR \n\nCheck Your Spelling. \n\n ~ North Korea Can Not Be Reached At This Moment ~");  
          } else {
            this.componentDidMount(this.state.countryName);
          }
        }

render () {
    return (
      
        <div className="CountrySearchBox">

          <div className="searchbar">
            <form onSubmit={this.handleSubmit}>
              <input type="text" 
              style={{width: 159, height: 30, backgroundColor: "white", color:  "rgb(209, 209, 105)", borderColor: "black", borderWidth: 2}}
              onKeyUp={this.handleEnter} 
              onChange={this.updateInput}
              placeholder="Select A Country"></input>
              <input type="submit" value="Submit" id="Submit-button"/>
            </form>
          </div>

          <div className="SearchInfoBox">
            <InfoBox  className= "One-CountryBoxInfo"
            country = {this.state.coronaInfo[0].country}
            confirmed = {parseFloat(this.state.coronaInfo[0].confirmed).toLocaleString('en')}
            recovered  = {parseFloat(this.state.coronaInfo[0].recovered).toLocaleString('en')}
            critical = {parseFloat(this.state.coronaInfo[0].critical).toLocaleString('en')}
            deaths = {parseFloat(this.state.coronaInfo[0].deaths).toLocaleString('en')} /> 
          </div>

        </div>
    );
  }
}


export default CountrySearch;
