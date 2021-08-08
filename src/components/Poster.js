
import React, {useState} from 'react';
function Poster(){
    const isWindowLarge= () => {
        if(window.innerHeight <= 700)
            return false;
        return true;
    }
    const [navListState, showNavList]= useState(true);
    const chooseClsName= ()=>{
        console.log(isWindowLarge())
        console.log( navListState)
        if(!isWindowLarge())
            return (navListState) ? 'blockdisplay' : 'hideEle';
        return '';
    }
    return(
        
<div class="banner">
<div class="container">
<div class="left-clm">
<h1> World’s #1 
    <br></br> 
    Online Bootcamp</h1>
<ul>
<li>
<b>2,000,000</b> 
careers advanced
</li>

<li>
<b>1,500</b>
 live classes every month
 </li>
 <li>
<b>85%</b> 
report career benefits including promotion or a new job
</li>
</ul>
<a href="#post-graduate-programs" class="btn">Explore Programs</a>
</div>
<div class="right-clm">
    <a href="" aria-label="Play video" rel="noopener" class="play-anim">
        </a>
        </div>
        </div>
        
        </div>
                    
    )
}

export default Poster;