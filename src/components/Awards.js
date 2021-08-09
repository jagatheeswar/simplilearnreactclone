import React from "react";
import Awardscomponent from "./Awardscomponent";
function Awards(){
    return(
<div className="trusted_by"><div className="container">
    <span>Awards and Accolades</span><div className="trust-logos">

    <Awardscomponent awardname={"2018 Gold Winner"} description={"for customer service by Stevie Awards"} image={"https://www.simplilearn.com/ice9/assets/home/2018-gold-winner.png"} />

    <Awardscomponent awardname={"2020 Gold Winner"} description={"for customer service by Stevie Awards"} image={"https://www.simplilearn.com/ice9/assets/home/2020-gold-winner.png"} />
    
<Awardscomponent awardname={"2020 Winner"} description={"Innovations in Edtech by Aegis Graham Bell Award"} image={"https://www.simplilearn.com/ice9/assets/home/2020-gold-winner.png"} />


<Awardscomponent awardname={"2019 Winner"} description={"Online Learning Library Training Industry"} image={"https://www.simplilearn.com/ice9/assets/home/2019_Top20.png"} />

<Awardscomponent awardname={"2020 Winner"} description={"Online Learning Library Training Industry"} image={"https://www.simplilearn.com/ice9/assets/home/2020_Top20.png"} />


                </div></div></div>
)
}
export default Awards;

