import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const GetAppointment = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="bg-info bg-opacity-10 mx-auto" >
            <Container>
                <Row>
                    <Col>
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
            </Col>
                    <Col>
                    <img className='w-100 mt-5 mb-3 rounded-pill' src="https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?cs=srgb&dl=pexels-negative-space-48604.jpg&fm=jpg" alt="" />
                    </Col>
        </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default GetAppointment;
