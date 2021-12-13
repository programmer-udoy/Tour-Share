import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./JoinRequest.css";

const JoinRequest = () => {
  const [joinRequest, setJoinREquest] = useState([]);

  const [myTeam, setMyTeam] = useState([]);
  const [myTeamInfo, setMyTeamInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const { user } = useAuth();


  

  useEffect(() => {
      setLoading(true)
    fetch(`https://peaceful-caverns-31356.herokuapp.com/createteam?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTeamInfo(data);
        setMyTeam(data[0]?.teamName);
        setLoading(false)
        
      });
  }, [user?.email]);

  useEffect(() => {
    setLoading(true)
    fetch(`https://peaceful-caverns-31356.herokuapp.com/jointeam?teamName=${myTeam}`)
      .then((res) => res.json())
      .then((data) => setJoinREquest(data));
      setLoading(false)
  }, [myTeam]);





  const handleOrderDelteId = (id) => {
    const proceed = window.confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`https://peaceful-caverns-31356.herokuapp.com/alljointeam/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            alert("deleted successfully");
            const remainigTeam = joinRequest?.filter((team) => team._id !== id);
            setJoinREquest(remainigTeam);
          }
        });
    }
    setLoading(false)
  };



  //update disabled  state in local storage

  // useEffect(() => {
  //     setDisabled(JSON.parse(window.localStorage.getItem('disabled')));
  //   }, []);

  //   useEffect(() => {
  //     window.localStorage.setItem('disabled', disabled);
  //   }, [disabled]);

  /////////////////////////////////

  const handleUpdate = (id) => {
    const JoinMember = joinRequest?.filter((data) => data._id === id);

    //console.log(JoinMember)
    const newJoinMember = JoinMember[0].teamMember;
    // console.log(newJoinMember)
    const neededMember = myTeamInfo[0].neededMember;
    const teamMember=myTeamInfo[0].teamMember;
    console.log(teamMember,newJoinMember)
    let result = parseInt(neededMember) - parseInt(newJoinMember);

    const result1= parseInt(teamMember) + parseInt(newJoinMember);
    

    if (result < 0) {
      result = 0;
    }
   // console.log(myTeamInfo[0]._id)
    
    
    fetch(`https://peaceful-caverns-31356.herokuapp.com/allcreateteam/${myTeamInfo[0]._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({neededMember:result,teamMember:result1}),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            alert("successfully approved");
          
          }
        });
    
    
   
  
  
  };

  

  return (
    <div>
      <h1 className="text-success fw-bold w-25 border border-primary d-block mx-auto mt-3 mb-3  bg-dark text-center">
        Join Request
      </h1>
      <div className="table-responsive-sm table-container">
        <table className=" table table-dark table-striped ">
          <thead>
            <tr>
              <th scope="col">User Name</th>
              <th scope="col">user Email</th>
              <th scope="col">Team Member</th>

              <th scope="col">Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Approved</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {joinRequest?.map((singleTeam) => (
            <tbody  key={singleTeam?._id}>
              <tr>
                <td>{singleTeam?.userName}</td>
                <td>{singleTeam?.userEmail}</td>
                <td>{singleTeam?.teamMember}</td>
                <td>{singleTeam?.address}</td>
                <td>{singleTeam?.phoneNumber}</td>
                <td>
                  <button
                    className="btn btn-danger btn-size"
                    id={singleTeam?._id}
                    onClick={() => handleUpdate(singleTeam?._id)}
                  >
                    Approve
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleOrderDelteId(singleTeam?._id)}
                    className="btn btn-danger btn-size"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default JoinRequest;
