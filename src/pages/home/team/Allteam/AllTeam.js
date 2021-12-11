import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleTeam from "../SingleTeam/SingleTeam";
import "./AllTeam.css";
const AllTeam = () => {
  const [allTeam, setAllTeam] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allcreateteam")
      .then((req) => req.json())
      .then((data) => setAllTeam(data));
  }, []);
  return (
    <div className="allTeam-container" id="tranding">
      <h1>Groups </h1>
      <h3 className="inner-text-style mb-5">
        Connect With Your Perfect Match{" "}
      </h3>

      <div className="row row-cols-1 row-cols-md-3 g-4 container-set ">
        {allTeam?.map((singleTeam) => (
          <SingleTeam key={singleTeam._id} singleTeam={singleTeam}></SingleTeam>
        ))}
      </div>
    </div>
  );
};

export default AllTeam;
