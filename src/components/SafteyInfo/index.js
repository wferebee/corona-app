import React from 'react';
import "./SafteyInfo.css"
function SafteyInfo() {

  
  return (
    <div className="SafteyInfo">
      <h4>How to Prevent Coronavirus Infection</h4>
      <h6>A coronavirus is a type of common virus that can infect your nose, sinuses, or upper throat. There is no vaccine for coronavirus. To help prevent coronavirus infection, do the same things you do to avoid the common cold.</h6>
      <ul>
      <li>Wash your hands thoroughly with soap and warm water or with an alcohol-based hand sanitizer.</li>
      <li>Keep your hands and fingers away from your eyes, nose, and mouth.</li>
      <li>Avoid close contact with people who are infected.</li>
      </ul>

      <h6>Additional Resources</h6>
      <ul>
       <li><a className="safteyLinks" href="https://www.worldometers.info/coronavirus/"> Coronavirus Statistics</a></li>
       <li><a className="safteyLinks" href="https://www.who.int/health-topics/coronavirus#tab=tab_1"> WHO</a></li>
       <li><a className="safteyLinks" href="https://www.cdc.gov/"> The CDC </a></li>
       <li><a className="safteyLinks" href="https://www.benefits.gov/help/faq/Coronavirus-resources"> Resources for US residents</a></li>
        
      </ul>
    </div>
  );
}

export default SafteyInfo;
