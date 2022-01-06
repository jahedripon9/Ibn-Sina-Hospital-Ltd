import * as React from "react";
import {
  Route,
  BrowserRouter,
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
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home></Home> }></Route> 
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/allconsultant" element={<AllConsultant></AllConsultant>}></Route>
        <Route path="/appointment" element={<Appointment></Appointment> }></Route>
        <Route path="/register" element={<UserAppointment></UserAppointment>}></Route>
        <Route path="/register" element={<UserAppointment></UserAppointment> }></Route>
        <Route path="/doctorinfo/:itemid" element={<PrivateRoute><Doctorsinfo ></Doctorsinfo> </PrivateRoute>}></Route>
        <Route path="/getappointment" element={<PrivateRoute><GetAppointment></GetAppointment> </PrivateRoute>}></Route>
        <Route path="/ambulanceservice" element={<AmbulanceService></AmbulanceService> }></Route>
        <Route path="/notifyappointment" element={<NotifyAppointment ></NotifyAppointment>}></Route>
        <Route path="/about" element={<About></About> }></Route>
        <Route path="/physiotherapy" element={<PrivateRoute><Physiotherapy></Physiotherapy> </PrivateRoute>}></Route>
        <Route path="/dental" element={<PrivateRoute><DentalCare></DentalCare></PrivateRoute>}></Route>
        <Route path="/healthcheckup" element={<PrivateRoute><HealthCheckup></HealthCheckup> </PrivateRoute>}></Route>
        <Route path="/corporateclients" element={<CorporateClients></CorporateClients> }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route> 
      </Routes>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}


export default App;
