import React, {useState} from 'react';
import example from "../JS/function"
import Commentscomponent from './Commentscomponent';
import scrollback from "../JS/function"
import scrollfront from "../JS/scrollforward"
import commentforward from '../JS/commentforward';
import commentback from '../JS/commentback';

function Comments({name,position,comment,company,image}){
    return(
        

<div>
<div class="reviews">
<div class="container" id="homepagereviewslider">
<div class="frs-slider" id="frs-slider">
<div class="card slid-detail" id="home-review">
<div class="ul-iners" id="commentul">
<div className="commentflex" id="commentflex">



<Commentscomponent name={'Sameer Marthess'} position={'Project Manager'} company={'Atos'} comment={"The certification took me from a Project Manager to a Senior Position with a good hike. All credit to the informative and easy-to-understand online study material!"} image={"https://www.simplilearn.com/ice9/reviews_images/_1567657440.jpeg"} />
<Commentscomponent name={'Rajendra Prabhu Sivasamy'} position={'Principal Software Engineer'} company={'TESCO'} comment={"Simplilearn's Certified Scrum Master course helped me rise in my career from Principle Software Engineer to Senior Manager. Thank you."} image={"https://www.simplilearn.com/ice9/testimonial_images/127357.jpeg"} />
<Commentscomponent name={'Gautami Chitrapu'} position={'Senior Analyst'} company={'Synchrony'} comment={"Thanks to Simplilearn, I changed my career path from Business Intelligence Executive to Senior Analyst with a 30% hike in my salary."} image={"https://www.simplilearn.com/ice9/review_images/goutami-chitrapu.jpeg"} />
<Commentscomponent name={'Sabyasachi Gupta'} position={'Project Manager '} company={'aQb Solutions Pvt Ltd'} comment={"The certification took me from a Project Manager to a Senior Position with a good hike. All credit to the informative and easy-to-understand online study material!"} image={"https://www.simplilearn.com/ice9/review_images/sabyasachi-gupta.jpeg"} />
<Commentscomponent name={'Sriram Narayanan'} position={'Data Analyst'} company={'Hewlett Packered Enterprise'} comment={"Thanks to the knowledgable & approachable trainers of Simplilearn, the course helped me get promoted to Data Analyst from Quality Analyst with a 50% hike in salary!"} image={"https://www.simplilearn.com/ice9/review_images/sreeram-narayan.jpeg"} />
<Commentscomponent name={'Satish Hiremath'} position={'Senior Counsultant'} company={'Cognizant'} comment={" Simplilearn's Big Data Architect course has helped me advance from Senior Software Engineer to Senior Java Hadoop Developer with a 30% hike in salary."} image={"https://www.simplilearn.com/ice9/reviews_images/96321_1509954180.jpg"} />


</div>
                                </div>
                                <div class="view-more-btn-fixed">
                                    <span class="c_arrow c_prev" onClick={commentback}>prev</span>
                                    <span class="c_arrow c_next" onClick={commentforward}>Next</span>
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
                                        </div>
                                        </div>
                                        </div>
        </div>
    )
}

export default Comments;