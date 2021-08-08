import React, {useState} from 'react';
function Secondnavbar(){
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
        <header id="topHeader" onClick= {() => showNavList(!navListState)}>
            <div class="container">
                <a href="https://www.simplilearn.com" class="logo" title="Simplilearn - Online Certification Training Course Provider"><img src="https://www.simplilearn.com/ice9/new_logo.svgz" alt="Simplilearn - Online Certification Training Course Provider" width="100" height="31"/></a>
                <nav class="links-left">
                    <div id="menu-button">
                        <span class="courses-menu" onClick= {() => showNavList(!navListState)} title="All Courses">
                            <span>All Courses</span></span>
                            
                            </div>
                            <div class="search_topbar">
                                <span class="s_icon toogle-search-icon"></span>
                                <div class="search" id="homepage-search-form">
                                    <form name="homepage-search-tag" action="/search">
                                    <input type="hidden" name="item_type" value="course,bundle,cohort_master,university_master" />
                                    <input type="search" id="header_srch" autocomplete="off" aria-label="Search" class="form-control input-search-field" name="tag" placeholder="What do you want to learn?" />
                                    <button type="submit" class="input-search-btn" title="search"><span class="search_icon input-search-icon"></span></button>
                            </form>
        </div>
        </div>
        </nav>
        <nav class="links-right">
            <a href="#" class="login" title="Log in"> Log in</a></nav></div></header>
    )
}

export default Secondnavbar;