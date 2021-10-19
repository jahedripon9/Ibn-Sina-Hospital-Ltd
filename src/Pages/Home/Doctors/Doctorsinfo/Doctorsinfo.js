import React from 'react';
import { useParams } from 'react-router';

const Doctorsinfo = () => {
    const{itemid}= useParams();
   
    
    return (
        <div>
            <h1>Doctor :{itemid}</h1>
            
        </div>
    );
};

export default Doctorsinfo;