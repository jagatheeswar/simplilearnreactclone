

import React from "react";
function Awardscomponent({description,awardname,image}){
    return(

        
<a rel="noreferrer nofollow" className="" aria-label="trusted brands" href="#" target="_blank">
                    
                    <div className="award-img">
                    
                    <img className="gold-winner4 blend-mode" src={`${image}`} alt="2020 Top Online Learning Library Companies" width="16" height="9"/>
                </div><span>{awardname}</span>
                <p>{description}</p></a>
                
)
}
export default Awardscomponent;