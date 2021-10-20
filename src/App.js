
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route exact path="/home">
        <Home></Home>
        </Route>
        <Route exact path="/login">
        <Login></Login>
        </Route>
        <Route exact path="/allconsultant">
        <AllConsultant></AllConsultant>
        </Route>
        <Route exact path="/appointment">
        <Appointment></Appointment>
        </Route>
        <Route exact path='/register'>
        <UserAppointment></UserAppointment>
        </Route>
        <Route exact path="/appointment">
        <Appointment></Appointment>
        </Route>
        <PrivateRoute exact path="/doctorinfo/:itemid">
        <Doctorsinfo></Doctorsinfo>
        </PrivateRoute>
        <PrivateRoute exact path="/getappointment">
        <GetAppointment></GetAppointment>
        </PrivateRoute>
        <Route exact path="/ambulanceservice">
        <AmbulanceService></AmbulanceService>
        </Route>
        <Route exact path="/notifyappointment">
        <NotifyAppointment></NotifyAppointment>
        </Route>
        <Route exact path="/about">
        <About></About>
        </Route>
        <PrivateRoute exact path="/physiotherapy">
        <Physiotherapy></Physiotherapy>
        </PrivateRoute>
        <PrivateRoute exact path="/dental">
        <DentalCare></DentalCare>
        </PrivateRoute>
        <PrivateRoute exact path="/healthcheckup">
        <HealthCheckup></HealthCheckup>
        </PrivateRoute>
        <Route exact path="/corporateclients">
        <CorporateClients></CorporateClients>
        </Route>
        <Route  path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
