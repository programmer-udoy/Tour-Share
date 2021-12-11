import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import FindHotels from '../FindHotels/FindHotels';
import HotelsDetails from '../HotelsDetails/HotelsDetails';
import "./Hotels.css"
const Hotels = () => {
    return (
        <div>
            <Navigation></Navigation>
           
            <FindHotels></FindHotels>
            
        </div>
    );
};

export default Hotels;