import React from "react";
function Commentscomponent({comment,company,position,name,image}){
    return(


            <div id="containerone">
             <div class="c_list" style={{ position: 'relative', transform: 'translate3d(0px, 0px, 0px)', width: '600px', transition: 'all 0.3s ease 0s' }}><div class=""><div class="review-card">
             <a rel="noreferrer nofollow" class="profile" href="#" target="_blank" aria-label="Read more about Sameer Marathe">
            <img class="blend-mode" width="16" height="9" src={`${image}`} alt="Sameer Marathe" /></a><div class="info">
                <h3>{name}</h3>
                                <span> {position}   , <b>{company}</b></span></div>
                                <p>    {comment}    
                                    </p></div>
                                </div>
                                </div>
                                </div>
    )
}

export default Commentscomponent;
