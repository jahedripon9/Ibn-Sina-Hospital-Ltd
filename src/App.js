import * as React from "react";
import {
  Route,
  Router,
  Routes,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import AmbulanceService from "./Pages/AmbulanceService/AmbulanceService";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import UserAppointment from "./Pages/Appointment/UserAppointment/UserAppointment";
import GetAppointment from "./Pages/GetAppointment/GetAppointment";
import NotifyAppointment from "./Pages/GetAppointment/NotifyAppointment";
import About from "./Pages/Home/About/About";
import AllConsultant from "./Pages/Home/AllConsultant/AllConsultant";
import CorporateClients from "./Pages/Home/CorporateClients/CorporateClients";
import DentalCare from "./Pages/Home/DentalCare/DentalCare";
import Doctorsinfo from "./Pages/Home/Doctors/Doctorsinfo/Doctorsinfo";
import HealthCheckup from "./Pages/Home/HealthCheckup/HealthCheckup";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import Physiotherapy from "./Pages/Physiotherapy/Physiotherapy";
import Header from "./Pages/Shared/Header/Header";




function App() {
  return (
    <div className="App bg-info bg-opacity-10">

    <AuthProvider>
    <Router>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allconsultant" element={<AllConsultant />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/register" element={<UserAppointment />} />
        <Route path="/register" element={<UserAppointment />} />
        <Route path="/doctorinfo/:itemid" element={<PrivateRoute><Doctorsinfo /> </PrivateRoute>} />
        <Route path="/getappointment" element={<PrivateRoute><GetAppointment /></PrivateRoute>} />
        <Route path="/ambulanceservice" element={<AmbulanceService />} />
        <Route path="/notifyappointment" element={<NotifyAppointment />} />
        <Route path="/about" element={<About />} />
        <Route path="/physiotherapy" element={<PrivateRoute><Physiotherapy /></PrivateRoute>} />
        <PrivateRoute path="/dental" element={<PrivateRoute><DentalCare /></PrivateRoute>} />
        <PrivateRoute path="/healthcheckup" element={<PrivateRoute><HealthCheckup /></PrivateRoute>} />
        <Route path="/corporateclients" element={<CorporateClients />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      </Router>
    </AuthProvider>
    </div>
  );
}
// Something like that
if(process.env.NODE_ENV === 'debug'){
  
}

export default App;
