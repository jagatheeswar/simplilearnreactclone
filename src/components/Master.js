import React, {useState} from 'react';
import Mastercomponent from './Mastercomponent';
import scrollback from "../JS/function"
import scrollfront from "../JS/scrollforward"

function Master({title,duration,courses,pointone,pointtwo,pointthree}){
    return(
        <div id="fullmaster">
            <h3 className="sliderh4">Master's Programs</h3>
            <span></span>
            <p className="subtdext">Achieve your career goals with industry-recognized learning paths</p>
            <div id="homepageitemslider">
                <div className="frs-slider   ">
                    <div className="card slid-detail" id="home-masters-program">
                        <div class="ul-iners" id="commentul">
                            <ul className="c_list" style={{position: 'relative', transform: 'translate3d(0px, 0px, 0px)', width: '6000px'}}>

                            </ul>
                    </div></div></div></div>
        
        <div className="flex-container" id="container">
            <Mastercomponent color={'grd-1'} title={'Digital Marketing Specialist'} duration={'12 Months'} courses={'13'} pointone={'Simplilearn JobAssist Program'} pointtwo={'30 tools and Rigorous curriculum'} pointthree={'Content partner '} bold={'Harvard Business'} />
            
            <Mastercomponent color={'grd-2'} title={'Cloud Architect'} duration={'12 Months'} courses={'12 Months'} pointone={'Simplilearn JobAssist Program'} pointtwo={'31 tools and Rigorous curriculum'} pointthree={'Certification Aligned with '} bold={'Silver Microsoft Partner'} />
            
            <Mastercomponent color={'grd-3'} title={'Artificial Intelligence Engineer'} duration={'12 Months'} courses={'9'} pointone={'Simplilearn JobAssist Program'} pointtwo={'9 tools and Rigorous curriculum'} pointthree={'In Collaboration With'} bold={'IBM'}/>
            
            <Mastercomponent color={'grd-4'} title={'Data Scientist'} duration={'12 Months'} courses={'10'} pointone={'Simplilearn JobAssist Program'} pointtwo={'14 tools and Rigorous curriculum'} pointthree={'In collabration with '} bold={'IBM'} />
        
            <Mastercomponent color={'grd-5'} title={'PMP<sup>®</sup> Plus'} duration={'36 Months'} courses={'7'} pointone={"Master's certificate "} pointtwo={'Rigorous curriculum'} pointthree={''}/>
            
            <Mastercomponent color={'grd-6'} title={'Lean Six Sigma Expert'} duration={'12 Months'} courses={'7'} pointone={"Master's certificate"} pointtwo={'Rigorous curriculum'} pointthree={'Accredited By '} bold={'IASSC'} />
            
            <Mastercomponent color={'grd-1'} title={'DevOps Engineer'} duration={'12 Months'} courses={'13'} pointone={'15 tools & Rigorous curriculum'} pointtwo={"master's certificate"} pointthree={''}/>
            
            <Mastercomponent color={'grd-2'} title={'Business Analyst'} duration={'12 Months'} courses={'13'} pointone={'Simplilearn JobAssist Program'} pointtwo={'12 tools and Rigorous curriculum'} pointthree={'In collaboration with '} bold={'IBM'}/>
        
            <Mastercomponent color={'grd-3'} title={'Digital Project Manager'} duration={'24 Months'} courses={'8'} pointone={'Rigorous curriculum'} pointtwo={"Master's certifiacte"} pointthree={''}/>
            
            <Mastercomponent color={'grd-4'} title={'Full Stack Web Developer - MEAN Stack'} duration={'12 Months'} courses={'6'} pointone={'Simplilearn JobAssist Program'} pointtwo={'14 tools & 4 industry projects'} pointthree={"Master's certificate"}/>
            
            <Mastercomponent color={'grd-5'} title={'Data Analyst'} duration={'12 Months'} courses={'11'} pointone={'Simplilearn JobAssist Program'} pointtwo={'8 tools and Rigorous curriculum'} pointthree={'In collaboration with '} bold={'IBM'} />
            
            <Mastercomponent color={'grd-5'} title={'PMP<sup>®</sup> Plus'} duration={'12 Months'} courses={'5'} pointtwo={"Master's certificate "} pointone={'Rigorous curriculum'} pointthree={''}/>
        
            <Mastercomponent color={'grd-1'} title={'Cyber Security Expert'} duration={'12 Months'} courses={'7'} pointone={'Simplilearn JobAssist Program'} pointtwo={'Rigorous curriculum'} pointthree={"Master's certificate"}/>
            
            <Mastercomponent color={'grd-2'} title={'Big Data Engineer'} duration={'12 Months'} courses={'10'} pointone={'Simplilearn JobAssist Program'} pointtwo={'14 tools & Rigorous curriculum'} pointthree={"In collaboration with "} bold={"IBM"} />
            
            <Mastercomponent color={'grd-3'} title={'ITIL Lifecycle Expert Program'} duration={'12 Months'} courses={'6'} pointtwo={"Master's certificate"} pointone={'Rigorous curriculum'} pointthree={''}/>
            
            <Mastercomponent color={'grd-4'} title={'ITIL Capability Expert Program'} duration={'12 Months'} courses={'5'} pointtwo={"Master's certificate"} pointone={'Rigorous curriculum'} pointthree={''}/>
            
            <Mastercomponent color={'grd-5'} title={'Automation Testing Masters Program'} duration={'12 Months'} courses={'6'} pointone={'Simplilearn JobAssist Program'} pointtwo={'8 tools and 1 Industry project'} pointthree={"Master's certificate"}/>
            
        
            
        </div>
        <div class="view-more-btn-fixed">
                                    <span class="c_arrow c_prev " onClick={scrollback} >prev</span>
                                    <span class="c_arrow c_next" onClick={scrollfront} >Next</span>
                                    <div class="view-more-btn">
                                        <span class="c_bullet_mobile_home-review_0 active_tab" data-slider-index="0" aria-label="Next"></span>
                                        <span class="c_bullet_mobile_home-review_1" data-slider-index="1" aria-label="Next">dddd</span>
                                        <span class="c_bullet_mobile_home-review_2" data-slider-index="2" aria-label="Next"></span>
                                        <span class="c_bullet_mobile_home-review_3" data-slider-index="3" aria-label="Next"></span>
                                        <span class="c_bullet_mobile_home-review_4" data-slider-index="4" aria-label="Next"></span>
                                        <span class="c_bullet_mobile_home-review_5" data-slider-index="5" aria-label="Next"></span>
                                        </div>
                                        </div>
        </div>
    )
}

export default Master;