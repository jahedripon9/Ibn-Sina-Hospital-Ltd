
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import UserAppointment from "./Pages/Appointment/UserAppointment/UserAppointment";
import GetAppointment from "./Pages/GetAppointment/GetAppointment";
import NotifyAppointment from "./Pages/GetAppointment/NotifyAppointment";
import About from "./Pages/Home/About/About";
import AllConsultant from "./Pages/Home/AllConsultant/AllConsultant";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";




function App() {
  return (
    <div className="App">

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
        <Route exact path="/getappointment">
        <GetAppointment></GetAppointment>
        </Route>
        <Route exact path="/notifyappointment">
        <NotifyAppointment></NotifyAppointment>
        </Route>
        <Route exact path="/about">
        <About></About>
        </Route>apab
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
{/* <Route exact path="/appointment/:consultantId">
<Appointment></Appointment>
</Route> */}