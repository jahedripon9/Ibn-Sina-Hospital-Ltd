import { useEffect, useState } from "react"
import Footer from "../../Shared/Footer/Footer";
import Consultant from "../Consultant/Consultant";
import './AllConsultant.css'


const AllConsultant = () => {
    const [consultants, setConsultants]= useState([])
    useEffect(()=>{
        fetch('ibnsina.json')
        .then(rse => rse.json())
        .then(data => setConsultants(data));
    },[])
    return(
        <div className='my-5'>
            <h2 className='my-5'>Our <span className='text-decoration-underline'>Consultants</span></h2> 
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
    )
}

export default AllConsultant;