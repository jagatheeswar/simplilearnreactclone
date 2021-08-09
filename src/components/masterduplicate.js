import React, {useState} from 'react';
function Master({color,title,duration,courses,pointone,pointtwo,pointthree}){
    return(
        <div className="flex-container">

<div className="divtwo">
<div className="c_list_item divtwo c_index_0 divtwo" data-index="0"><a className="master-card" href="#" title="Digital Marketing Specialist"><div className="img_th_bundle grd-1"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>Digital Marketing Specialist</div></h4><div className="info"><span> 12 Months</span><span>13 Courses</span></div><p> Simplilearn JobAssist Program </p><p> 30 tools &amp; Rigorous curriculum</p><p> Content Partner <b>Harvard Business</b></p></div></a></div> 
</div>
  
      
<div className="divtwo">
<div className="c_list_item divtwo c_index_1 " data-index="1"><a className="master-card" href="#" title="Cloud Architect"><div className="img_th_bundle grd-2"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>Cloud Architect</div></h4><div className="info"><span> 12 Months</span><span>12 Courses</span></div><p> Simplilearn JobAssist Program </p><p> 31 tools &amp; Rigorous curriculum</p><p> Certification Aligned with <b>Silver Microsoft Partner</b> &amp; 2 more</p></div></a></div>
</div>

<div className="divtwo">
<div className="c_list_item divtwo c_index_2" data-index="2"><a className="master-card" href="#" title="Artificial Intelligence Engineer"><div className="img_th_bundle grd-3"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>Artificial Intelligence Engineer</div></h4><div className="info"><span> 12 Months</span><span>9 Courses</span></div><p> Simplilearn JobAssist Program </p><p> 9 tools &amp; Rigorous curriculum</p><p> In Collaboration With <b>IBM</b></p></div></a></div>
</div>

<div className="divtwo">
<div className="c_list_item divtwo c_index_3" data-index="3"><a className="master-card" href="#" title="Data Scientist"><div className="img_th_bundle grd-4"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>Data Scientist</div></h4><div className="info"><span> 12 Months</span><span>10 Courses</span></div><p> Simplilearn JobAssist Program </p><p> 14 tools &amp; Rigorous curriculum</p><p> In Collaboration With <b>IBM</b></p></div></a></div>
</div>

<div className="divtwo">
<div className="c_list_item divtwo c_index_4 " data-index="4"><a className="master-card" href="#" title="PMP<sup>®</sup> Plus"><div className="img_th_bundle grd-5"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>PMP<sup>®</sup> Plus</div></h4><div className="info"><span> 36 Months</span><span>7 Courses</span></div><p> Rigorous curriculum</p><p> Master's certificate</p></div></a></div>
</div>

<div className="divtwo">
<div className="c_list_item divtwo c_index_5" data-index="5"><a className="master-card" href="#" title="Lean Six Sigma Expert"><div className="img_th_bundle grd-6"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>Lean Six Sigma Expert</div></h4><div className="info"><span> 12 Months</span><span>7 Courses</span></div><p> Rigorous curriculum</p><p> Master's certificate</p><p> Accredited By <b>IASSC</b></p></div></a></div>
</div>

<div className="divtwo">
<div className="c_list_item divtwo c_index_6" data-index="6"><a className="master-card" href="#" title="DevOps Engineer"><div className="img_th_bundle grd-1"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>DevOps Engineer</div></h4><div className="info"><span> 12 Months</span><span>13 Courses</span></div><p> 15 tools &amp; Rigorous curriculum</p><p> Master's certificate</p></div></a></div>
</div>

<div className="divtwo">
<div className="c_list_item divtwo c_index_7" data-index="7"><a className="master-card" href="#" title="Business Analyst"><div className="img_th_bundle grd-2"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>Business Analyst</div></h4><div className="info"><span> 12 Months</span><span>13 Courses</span></div><p> Simplilearn JobAssist Program </p><p> 12 tools &amp; Rigorous curriculum</p><p> In collaboration with <b>IBM</b></p></div></a></div>
</div>


<div className="divtwo">
<div className="c_list_item divtwo c_index_8" data-index="8"><a className="master-card" href="#" title="Digital Project Manager"><div className="img_th_bundle grd-3"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>Digital Project Manager</div></h4><div className="info"><span> 24 Months</span><span>8 Courses</span></div><p> Rigorous curriculum</p><p> Master's certificate</p></div></a></div>
</div>


<div className="divtwo">
<div className="c_list_item divtwo c_index_9" data-index="9"><a className="master-card" href="#" title="Full Stack Web Developer - MEAN Stack"><div className="img_th_bundle grd-4"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>Full Stack Web Developer - MEAN Stack</div></h4><div className="info"><span> 12 Months</span><span>6 Courses</span></div><p> Simplilearn JobAssist Program </p><p> 14 tools &amp; 4 Industry Projects</p><p> Master's certificate</p></div></a></div>
</div>


<div className="divtwo">
<div className="c_list_item divtwo c_index_10" data-index="10"><a className="master-card" href="#" title="Data Analyst"><div className="img_th_bundle grd-5"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>Data Analyst</div></h4><div className="info"><span> 12 Months</span><span>11 Courses</span></div><p> Simplilearn JobAssist Program </p><p> 8 tools &amp; Rigorous curriculum</p><p> In Collaboration With <b>IBM</b></p></div></a></div>
</div>


<div className="divtwo">
<div className="c_list_item divtwo c_index_11" data-index="11"><a className="master-card" href="#" title="PMP<sup>®</sup> Renewal Pack"><div className="img_th_bundle grd-6"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>PMP<sup>®</sup> Renewal Pack</div></h4><div className="info"><span> 12 Months</span><span>5 Courses</span></div><p> Rigorous curriculum</p><p> Master's certificate</p></div></a></div>
</div>

<div className="divtwo">
<div className="c_list_item divtwo c_index_12" data-index="12"><a className="master-card" href="#" title="Cyber Security Expert"><div className="img_th_bundle grd-1"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>Cyber Security Expert</div></h4><div className="info"><span> 12 Months</span><span>7 Courses</span></div><p> Simplilearn JobAssist Program </p><p> Rigorous curriculum</p><p> Master's certificate</p></div></a></div>
</div>
            
<div className="divtwo">
<div className="c_list_item c_index_13 divtwo" data-index="13"><a className="master-card" href="#" title="Big Data Engineer"><div className="img_th_bundle grd-2"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>Big Data Engineer</div></h4><div className="info"><span> 12 Months</span><span>10 Courses</span></div><p> Simplilearn JobAssist Program </p><p> 14 tools &amp; Rigorous curriculum</p><p> In Collaboration With <b>IBM</b></p></div></a></div>
</div>


<div className="divtwo">
<div className="c_list_item c_index_14 divtwo" data-index="14"><a className="master-card" href="#" title="ITIL<sup>®</sup> Lifecycle Expert Program"><div className="img_th_bundle grd-3"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>ITIL<sup>®</sup> Lifecycle Expert Program</div></h4><div className="info"><span> 12 Months</span><span>6 Courses</span></div><p> Rigorous curriculum</p><p> Master's certificate</p></div></a></div>
</div>


<div className="divtwo">
<div className="c_list_item c_index_15 divtwo" data-index="15"><a className="master-card" href="#" title="ITIL<sup>®</sup> Capability Expert Program"><div className="img_th_bundle grd-4"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>ITIL<sup>®</sup> Capability Expert Program</div></h4><div className="info"><span> 12 Months</span><span>5 Courses</span></div><p> Rigorous curriculum</p><p> Master's certificate</p></div></a></div>
</div>


<div className="divtwo">
<div className=" divtwo c_list_item c_index_16" data-index="16"><a className="master-card" href="#" title="Automation Testing Masters Program"><div className="img_th_bundle grd-5"><span></span></div><div className="bundle-info"><h4 className="sub-heading"> <div>Automation Testing Masters Program</div></h4><div className="info"><span> 12 Months</span><span>6 Courses</span></div><p> Simplilearn JobAssist Program </p><p> 8 tools &amp; 1 Industry Projects</p><p> Master's certificate</p></div></a></div>
</div>


                                 </div>
    )
}

export default Master;