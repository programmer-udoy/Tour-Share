import React from "react";
import Footer from "../../shared/Footer/Footer";
import Navigation from "../../shared/Navigation/Navigation";
import AllTeam from "../team/Allteam/AllTeam";
import TrandingSection from "../TrandingSection/TrandingSection";
import Banner from "./Banner/Banner";


const Home = () => {
 
  
 
  return (
    <div>

  

      <Navigation></Navigation>
      <Banner></Banner>
      <AllTeam></AllTeam>
      <TrandingSection></TrandingSection>
      <Footer></Footer>

      
    </div>
  );
};

export default Home;
