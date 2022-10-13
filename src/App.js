// import './App.css';
import 'antd/dist/antd.css';
import Antd from './components/antd';
import Livevalidation from './components/LiveValidation';
import HomePage from './guruCoaching/HomePage';

// Redux 
import Login from './Redux/Login';
import Profile from './Redux/Profile';
// Redux

// Form IO
import FormioBasic from './FormIO/FormIOBasic'
// Form IO


//import { Signup } from './components/SignUp';

// Modern Website
 import AppModern from './ModernWebsite/App';

function App() {
  return (
    <div>
    {/* <div className="container mt-3">
      <div className="row">
        <div className="col-md-5"> */}
          {/*<Signup />*/}
          {/* <Antd/> */}
          {/* <Livevalidation/> */}
          {/* <HomePage/> */}

          {/* Redux */}
    
        {/* <Profile/>
        <Login/> */}

          {/* redux */}

          {/* Form Io Basic */}

          {/* <FormioBasic/> */}
            {/* Form Io Basic */}

            {/* Modern Website */}
            <AppModern/>

        {/* </div>
       
      </div>
    </div> */}
    </div>
  );
}

export default App;