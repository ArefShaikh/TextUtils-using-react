import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
       msg : message,
       type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () => {
    if(mode ==='light'){
      setmode("dark");
      document.body.style.backgroundColor='#4f4d4d';
        showAlert("Dark mode has been enabled", "success")
    }
    else{
      setmode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success")
    }
  } 
return (
  <>
  
  <Navbar text="TextUtil" aboutText ="About Us" mode = {mode} toggleMode={toggleMode} />
  {/* <Navbar/> for default  Parameters  */ }

  <Alert alert={alert}/>

<TextForm heading ='Enter the text to analyze below' showAlert={showAlert} mode={mode} toggleMode ={toggleMode}/>
  </>
 
);
}

export default App;
