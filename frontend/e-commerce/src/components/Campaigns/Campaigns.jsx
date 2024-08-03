import React from 'react'
import "./Campaigns.css"
import CampaignsItem from './CampaignsItem'
function Campaigns() {
   return (
      <section className="campaigns">
         <div className="container">
            <div className="campaigns-wrapper">
               <CampaignsItem />
               <CampaignsItem />
            </div>
            <div className="campaigns-wrapper">
               <CampaignsItem />
               <CampaignsItem />
            </div>
         </div>
      </section>
   )
}

export default Campaigns