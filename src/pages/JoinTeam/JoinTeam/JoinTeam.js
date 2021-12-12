import React from 'react';
import { useParams } from 'react-router';
import Footer from '../../shared/Footer/Footer';

import Navigation from '../../shared/Navigation/Navigation';
import JoinIdVerification from '../JoinIdVerification/JoinIdVerification';
import "./JoinTeam.css"

const JoinTeam = () => {
    const {teamName}=useParams()
    return (
        <div>
           <Navigation></Navigation>
          <JoinIdVerification  teamName={teamName}></JoinIdVerification>
          <Footer></Footer>

          
        </div>
    );
};

export default JoinTeam;