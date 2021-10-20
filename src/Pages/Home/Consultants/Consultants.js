import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Consultant from "../Consultant/Consultant";
import './Consultants.css'


const Consultants = () => {
    const [consultants, setConsultants]= useState([])
    useEffect(()=>{
        fetch('ibnsina.json')
        .then(rse => rse.json())
        .then(data => setConsultants(data));
    },[])
    return(
       
        <div className="my-5 ">
            <h1 className="text-success">Our <span className='text-decoration-underline'>Consultants</span></h1> 
            <div className="consultant-container mx-5 mb-4">
                {
                    consultants.slice(0, 6).map(consultant => <Consultant
                    key={consultant.id}
                    consultant={consultant}
                    ></Consultant>)
                }
            </div>
            <Link to='/allconsultant' className="btn btn-success rounded-pill">See More Consultants</Link> 
        </div>
    )
}

export default Consultants;