import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const GetAppointment = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div  mx-auto>
            <h2 className="text-center mx-auto w-100 my-5">Doctors Appointment</h2>
            <form className="ps-auto ms-auto" onSubmit={handleSubmit(onSubmit)}>
                
                <input className="w-50 text-center rounded-pill" placeholder="Name" {...register("example")} required/>
                <br /> <br />
                
                <input className="w-50 text-center rounded-pill" placeholder="Address" defaultValue="" {...register("address")} required/> <br /> <br />
                
                <input className="w-50 text-center rounded-pill" placeholder="City" defaultValue="" {...register("city")} required /> <br /> <br />
                
                <input className="w-50 text-center rounded-pill" placeholder="Mobile" defaultValue="" {...register("mobile")} required /> <br /> <br />
                
                {errors.exampleRequired && <span className="text-danger fw-bold text-center rounded-pill">This field is required</span>}
                
                <Link to='/notifyappointment'><input className="bg-info fw-bold p-2 rounded-pill w-50"  type="submit" /></Link>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default GetAppointment;
