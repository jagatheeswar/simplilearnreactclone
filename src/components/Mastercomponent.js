import React, {useState} from 'react';
import example from "../JS/function"
function Mastercomponent({color,title,duration,courses,pointone,pointtwo,pointthree,bold}){
    return(
<div id="context">  
<div className="divtwo" >
<div className="c_list_item divtwo c_index_0 divtwo" data-index="0">
    <a className="master-card" href="#" title="Digital Marketing Specialist">
        
        <div className={`img_th_bundle ${color}`} >
        <span></span>
        </div>

    <div className="bundle-info">
    <h4 className="sub-heading"> 
    
    <div>{title}</div>
    </h4>
    
    <div className="info">
    
    <span>{duration}</span>
    
    <span>{courses} Courses</span></div>
    
    <p> {pointone} </p>
    
    <p> {pointtwo} </p>
    
{pointthree.length > 0 &&
        <p> 
        {pointthree} <b>{bold}</b> 
    </p>
}


</div>
</a>
</div> 

</div>

</div>
    )
}

export default Mastercomponent;