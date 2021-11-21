import React from 'react';
import { useParams } from 'react-router';

import Navigation from '../../shared/Navigation/Navigation';
import JoinIdVerification from '../JoinIdVerification/JoinIdVerification';
import "./JoinTeam.css"

const JoinTeam = () => {
    const {teamName}=useParams()
    return (
        <div>
           <Navigation></Navigation>
          <JoinIdVerification  teamName={teamName}></JoinIdVerification>
          
        </div>
    );
};

export default JoinTeam;