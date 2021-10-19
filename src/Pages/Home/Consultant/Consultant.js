import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";


const Consultant = ({ consultant }) =>{
    const {name, img, degrees, specialization, designation, contactNumber, id} = consultant;
    return(
        <div className="data-container">
            
            <div className="card bg-light ms-auto rounded-1 " style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title fw-bold text-success">{name}</h5> <hr />
                <p className="card-text">{degrees}</p> 
                <p className="card-text">{specialization}</p>
                <p className="card-text">{designation}</p>
                <p className="card-text">{contactNumber}</p>
                
                <Link to='/getappointment'><button href="#" className="btn btn-primary btn">Get An Appointment</button></Link>
                
            </div>
        </div>
        </div>
            
    )
}
export default Consultant;