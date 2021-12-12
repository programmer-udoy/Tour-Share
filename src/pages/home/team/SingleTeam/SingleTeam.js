import React from 'react';
import "./SingleTeam.css"
import {
 
  Link
} from "react-router-dom";

const SingleTeam = (props) => {

    
    const{destination,teamMember,neededMember,startDate,endDate,teamName}=props.singleTeam;
    const slice=teamName.indexOf("_")
    return (
        <div className="col">
        <div className="card text-center card-style mb-3">
       
          <h5 className=" team-name-style"> Team Name: <span className="text-dark fs-5 ">{teamName.slice(0,slice)}</span> </h5>

          
          <h5 className=" team-name-style">Destination: <span  className="text-dark fs-5 " >{destination}</span></h5>
          
        
          <p className=" " >Person We Have: <span  className="text-dark fs-6 " > {teamMember }</span> </p>
          <p className=" " >Person We Need: <span  className="text-dark fs-6 " >{neededMember}</span> </p>
         
          <p className=" " > Start Date: <span  className="text-dark fs-6 " >{startDate}</span> </p>
          <p className="" >End Date: <span  className="text-dark fs-6 " >{endDate}</span> </p>

        
         

          <Link style={{ textDecoration: 'none' }} to={`/jointeam/${teamName}`}>
          <button className="button-style" >connect</button>
            
            </Link>

         
         
        </div>
      </div>
    );
};

export default SingleTeam;