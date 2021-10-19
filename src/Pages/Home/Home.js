import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import About from './About/About';
import Banner from './Carousel/Banner';
import Consultants from './Consultants/Consultants';
import ContactUs from './ContactUs/ContactUs';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Consultants></Consultants>
            <About></About>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;