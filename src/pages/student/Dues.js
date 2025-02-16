import React from 'react'
import { useState } from 'react';
import PriorityPopup from "../../components/PriorityPopup";
import Navbar  from '../../components/Navbar';
import Card from '../../components/Card';
import Download from '../../components/Download';
import Line from '../../components/Line';
import "@fontsource/montserrat";
import "@fontsource/lato";
function Dues() {
  const [popup,setPopup]=useState(false);
  const handlePopup= (val)=> {
   setPopup(val);
   //console.log(popup);
  }
  //console.log(popup);
  return (
    <div className="Dues">
      <div>
      <Navbar/>
      <Line cost={1060}/>
      
      <div className='ml-12 w-[1090px] mt-2 '>
      <Card number={1} title={"Hostel Affairs"} location={"Academic Complex, 3rd Floor"} time={"2:00pm to 6:00pm"} IsLast={false} nodues={0} popupFunc={handlePopup}/>
      <Card number={2} title={"Student Affairs"} location={"Academic Complex"} time={"2:00pm to 6:00pm"} IsLast={false} nodues={1060} popupFunc={handlePopup}/>
      <Card number={3} title={"Mechanical Workshop"} location={"Mechanical Workshop, Near Core-5"} time={"2:00pm to 6:00pm"} IsLast={true} nodues={0} popupFunc={handlePopup}/>
      <Card number={4} title={"Computer Center"} location={"CC Complex, Near Library"} time={"9:00am to 6:00pm"} IsLast={true} nodues={125} popupFunc={handlePopup}/>
      {popup && <PriorityPopup priority={1} title={"Student Affairs"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, maiores.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi fugiat harum repudiandae eos at accusantium odit omnis ipsum ullam! Quos."} officeTimings={"2:00pm-6:00pm"} location={"/stud_aff_loc.png"} email={"saoff@iitg.ac.in"}/>}
      </div>
      </div>
    </div>
  );
}
export default Dues