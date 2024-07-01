import './App.css';
import Navbar from './components/Navbar';
import Patients from './components/Patients';
import Diagnosis from './components/Diagnosis';
import Profile from './components/Profile';


function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl main flex justify-between mx-5">
        <div>
           <Patients />
        </div>
        <div>
           <Diagnosis />
        </div>
        <div>
           <Profile />
        </div>
      </div>
      
    </>
  );
}

export default App;
