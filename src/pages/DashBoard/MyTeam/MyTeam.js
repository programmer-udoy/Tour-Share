import React, { useEffect, useState } from "react";
import "./MyTeam.css";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyTeam = () => {
  const [myTeam, setMyTeam] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://peaceful-caverns-31356.herokuapp.com/createteam?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyTeam(data));
  }, [user.email]);
  const handleOrderDelteId = (id) => {
    const proceed = window.confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`https://peaceful-caverns-31356.herokuapp.com/allcreteteam/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            alert("deleted successfully");
            const remainigOrder = myTeam?.filter((team) => team._id !== id);
            setMyTeam(remainigOrder);
          }
        });
    }
  };

  const handleUpdateId=(id)=>{

  const url=`https://peaceful-caverns-31356.herokuapp.com/allcreteteam/${id}`

  console.log(url)

  }
  return (
    <div>
      <h1 className="text-success fw-bold w-25 border border-primary d-block mx-auto mt-3 mb-3  bg-dark text-center">
        My Team
      </h1>
      <div className="table-responsive-sm table-container">
        <table className=" table table-dark table-striped ">
          <thead>
            <tr>
              <th scope="col">Destination</th>
              <th scope="col">Team Member</th>
              <th scope="col">Needed Member</th>

              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {myTeam?.map((singleTeam) => (
          
            <tbody key={singleTeam._id}>
              <tr>
                <td>{singleTeam?.destination}</td>
                <td>{singleTeam?.teamMember}</td>
                <td>{singleTeam?.neededMember}</td>
                <td>{singleTeam?.startDate}</td>
                <td>{singleTeam?.endDate}</td>
                <td>

                  <Link  to={`/updateteam/${singleTeam?._id}`}>
                   
                  <button
                    
                    className="btn btn-danger btn-size"
                  >
                    Update
                  </button>
                  </Link>
                
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

export default MyTeam;
