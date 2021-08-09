import React, {useState} from 'react';
import themenu from "../JS/themenu"
import hidemenu from "../JS/hidemenu"
//import allcourses from "../js/allcourses"
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
                        <span class="courses-menu" onClick={themenu} title="All Courses">
                            <span >All Courses</span></span>
                            
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
            </nav></div>
            <div id="themenubar" className="displaynone">
            <div class="first-menu"><ul><li class="visible-sm menu-head"><span class="back-btn" onClick={hidemenu}></span>Menu</li><li><span class="mobile-all-courses" title="All courses">All courses</span></li><li><a href="https://www.simplilearn.com/resources" target="_blank" title="Resources">Resources</a></li><li><a href="https://www.simplilearn.com/corporate-training" target="_blank" title="Corporate Training">Corporate Training</a></li><li><a href="https://www.simplilearn.com/become-our-trainer" target="_blank" title="Become an Instructor">Become an Instructor</a></li><li><a href="https://www.simplilearn.com/higher-education-partnership-program-for-universities" target="_blank" title="Higher Education">Higher Education</a></li><li><a href="https://www.simplilearn.com/digital-transformation-training" title="Digital transformation">Digital transformation</a></li></ul></div>
        </div>
        
        <div id="submenubar">
                            <ul class="sub-menu"><li class="col-md-5 pull-left"><h4 class="">POPULAR COURSES</h4><ul><li class="sub-menu-item"><a href="https://www.simplilearn.com/project-management/cbap-preparatory-course-training" title="Certified Business Analysis Professional (CBAP®)"> Certified Business Analysis Professional (CBAP<sup>®</sup>) </a></li><li class="sub-menu-item"><a href="https://www.simplilearn.com/project-management/ccba-certification-training" title="CCBA®"> CCBA<sup>®</sup> </a></li><li class="sub-menu-item"><a href="https://www.simplilearn.com/design-thinking-certification-training-course" title="Design Thinking Course"> Design Thinking Course </a></li><li class="sub-menu-item"><a href="https://www.simplilearn.com/digital-transformation" title="Digital Transformation Course for Leaders"> Digital Transformation Course for Leaders </a></li></ul></li><li class="col-md-7 pull-right"><div class="unversity-wrap"><h4>University PROGRAMs</h4><div class="univ-list"><a href="https://www.simplilearn.com/post-graduate-diploma-management" title="Post Graduate Diploma in Management by JAGSOM"><div class="uni-logo"><img src="https://www.simplilearn.com/ice9/university/megamenu_JAGSOM.svgz" alt="JAGSOM"/></div><div class="univ-info"><h5>Post Graduate Diploma in Management by JAGSOM</h5><span>JAGSOM</span></div></a><a href="https://www.simplilearn.com/pgp-business-analysis-certification-training-course" title="Post Graduate Program in Business Analysis"><div class="uni-logo"><img src="https://www.simplilearn.com/ice9/university/_purduemegamenu.svgz" alt="Purdue University"/></div><div class="univ-info"><h5>Post Graduate Program in Business Analysis</h5><span>Purdue University</span></div></a><a href="https://www.simplilearn.com/pgp-digital-transformation-certification-training-course" title="Post Graduate Program in Digital Transformation"><div class="uni-logo"><img src="https://www.simplilearn.com/ice9/university/_purduemegamenu.svgz" alt="Purdue University"/></div><div class="univ-info"><h5>Post Graduate Program in Digital Transformation</h5><span>Purdue University</span></div></a></div></div><div class="master-wrap"><h4>Masters program</h4><div class="menu-master-prg"><a href="https://www.simplilearn.com/business-analyst-certification-training-course" title="Business Analyst" class="master-link"><a><img src="https://www.simplilearn.com/ice9/assets/master_icon.svgz" width="40" height="40" alt="Masters program"/><span>Business Analyst</span></a><ul><li>13 courses | Duration: 12 Months</li><li>In collaboration with <b>IBM</b></li><li>Simplilearn JobAssist Program</li></ul></a></div><div class="menu-master-prg"><a href="https://www.simplilearn.com/design-thinking-leader-masters-program" title="Design Thinking Leader" class="master-link"><a><img src="https://www.simplilearn.com/ice9/assets/master_icon.svgz" width="40" height="40" alt="Masters program" /><span>Design Thinking Leader</span></a><ul><li>5 courses | Duration: 12 Months</li><li>Content Provider <b>Harvard Business</b></li><li>Simplilearn JobAssist Program</li></ul></a></div></div></li><li class="category-btn"><a href="https://www.simplilearn.com/business-and-leadership-certification-training-courses/" title="Explore the category">Explore the category</a></li></ul>
                            </div>
            </header>
    )
}

export default Secondnavbar;