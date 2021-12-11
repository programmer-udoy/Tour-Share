import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./UpdateTeam.css"
const UpdateTeam = () => {
    
   const [myTeam,setMyTeam]=useState({})
   const {id}=useParams()  ;

 
   const uri=`http://localhost:5000/createteam/${id}`

 //  console.log(uri)

   useEffect(()=>{

    fetch(uri)
    .then(res=>res.json())
    .then(data=>setMyTeam(data))

   },[uri])

   const handleDestination=(e)=>{
    const updatedDestination=e.target.value;
   
    
    const updatedTeam={...myTeam};
    updatedTeam.destination=updatedDestination;
 

    setMyTeam(updatedTeam)
    

   }

   const handleTeamMember=(e)=>{

    const updatedTeamMeber=e.target.value;
   
    
    const updatedTeam={...myTeam};
    updatedTeam.teamMember=updatedTeamMeber;
 

    setMyTeam(updatedTeam)
    

   }

   const handleNeededMember=(e)=>{

    const updatedNeededMember=e.target.value;
   
    
    const updatedTeam={...myTeam};
    updatedTeam.neededMember=updatedNeededMember;
 

    setMyTeam(updatedTeam)
    

   }
   const handleStartDate=(e)=>{

    const updatedStartDate=e.target.value;
   
    
    const updatedTeam={...myTeam};
    updatedTeam.startDate=updatedStartDate;
 

    setMyTeam(updatedTeam)
    

   }

   const handleEndDate=(e)=>{

    const updatedEndDate=e.target.value;
   
    
    const updatedTeam={...myTeam};
    updatedTeam.endDate=updatedEndDate;
 

    setMyTeam(updatedTeam)
    

   }

   
   const handleSubmit=(e)=>{
    const uri=`http://localhost:5000/createteam/${id}`
     fetch(uri,{

     method:"PUT",
     headers:{

        "content-type":"application/json"

     },
     body:JSON.stringify(myTeam)
     
     })

     .then(res=>res.json())
     .then(data=>{

        if(data.modifiedCount>0){
            alert("updated Successfully")
        }
     })

    e.preventDefault()
 
    }

    
  
    return (
        <div>
            <h1>this is update team page</h1>

            <form onSubmit={handleSubmit}>
            <input type="text"  placeholder="Destination"   onChange={handleDestination} value={myTeam.destination ||""} />
            <input type="number" placeholder="Team Member" onChange={handleTeamMember} value={myTeam.teamMember ||""} />
            <input type="number" placeholder="Needed Member" onChange={handleNeededMember}  value={myTeam.neededMember ||""} />
            <input type="date" onChange={handleStartDate}  value={myTeam.startDate ||""}  />
            <input type="date" onChange={handleEndDate}  value={myTeam.endDate ||""}/>
            <input type="submit" value="Update" />
            </form>


           
            {id}
        </div>
    );
};

export default UpdateTeam;