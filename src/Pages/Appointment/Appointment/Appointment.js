import React, { useEffect, useState } from 'react';
import Consultant from '../../Home/Consultant/Consultant';
import Footer from '../../Shared/Footer/Footer';
// import { useParams } from 'react-router';

const Appointment = () => {
    
    const [consultants, setConsultants]= useState([])
    useEffect(()=>{
        fetch('ibnsina.json')
        .then(rse => rse.json())
        .then(data => setConsultants(data));
    },[])
    return (
        <div>
        <h2>Our Consultants</h2>
        <div className="consultant-container mx-5">
            {
                consultants.map(consultant => <Consultant
                key={consultant.id}
                consultant={consultant}
                ></Consultant>)
            }
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Appointment;