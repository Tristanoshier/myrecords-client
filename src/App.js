import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Auth from './components/auth/Auth';
import SideBar from './components/site/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return(sessionToken === localStorage.getItem('token') ? 
    <div>
        <Router>
          <SideBar clickLogout={clearToken} token={sessionToken}/>
        </Router>
    </div>
    : <Auth updateToken={updateToken} />)
  }

  return (
    <div className="App">
      
      {protectedViews()}
    </div>
  );
}

export default App;
