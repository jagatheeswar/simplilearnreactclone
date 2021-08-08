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
function HomePage(){
    return(
        <div className="maincontainer">
            <Topnavbar />
            <Secondnavbar />
            <Poster />
            <Companies />
            <Pg />
            <Certificationcourse />
            <Immersive />
            <Alumni />
            <Support />
            <Awards />
            <Freeapp />
            <Footer />
        </div>
    )
}

export default HomePage;