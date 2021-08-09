import React from "react";
import Topnavbar from "../components/Topnavbar";
import Secondnavbar from "../components/Secondnavbar";
import Poster from "../components/Poster";
import Companies from "../components/Companies";
import Pg from "../components/PG";
import Immersive from "../components/Immersive"
import Alumni from "../components/Alumni";
import Support from "../components/Support";
import Awards from "../components/Awards";
import Freeapp from "../components/Freeapp";
import Footer from "../components/Footer";
import Certificationcourse from "../components/Certificationcourse";
import Master from "../components/Master";
import Comments from "../components/Comments";

import "../styles/Alumni.css";
import "../styles/awards.css";
import "../styles/Certificationcourse.css";

import "../styles/Company.css"
import "../styles/Fotter.css"
import "../styles/Freeapp.css"

import "../styles/Immersive.css"
import "../styles/PG.css"
import "../styles/Poster.css"
import "../styles/Secondnavbar.css"
import "../styles/Support.css"
import "../styles/Topnavbar.css"
import "../styles/Master.css"
import "../styles/comments.css"
function HomePage(){
    return(
        <div className="maincontainer">
            <Topnavbar />
            <Secondnavbar />
            <Poster />
            <Companies />
            <Master title={'Digital Marketing Specialist'} duration={'12 Months'} courses={'13'} pointone={'Simplilearn JobAssist Program'} pointtwo={'30 tools and Rigorous curriculum'} pointthree={'Content partner Harvard Business'}/>

            <Certificationcourse />
            <Immersive />
            <Alumni />
            <Comments name={'Sameer Marthe'} position={'Project Manager'} company={"Atos"} comment={"The certification took me from a Project Manager to a Senior Position with a good hike. All credit to the informative and easy-to-understand online study material!"} image={"https://www.simplilearn.com/ice9/reviews_images/_1567657440.jpeg"}/>
            
            <Support />
            <Awards />
            <Freeapp />
            <Footer />
            
        </div>
    )
}

export default HomePage;