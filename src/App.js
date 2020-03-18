import React, {useState, useEffect} from 'react';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.css'
import Auth from './components/auth/Auth';
import Home from './components/site/Home';
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
    return(sessionToken === localStorage.getItem('token') && sessionToken !== 'undefined' ? 
    <div>
        <Router>
          <Home clickLogout={clearToken} token={sessionToken}  />
        </Router>
    </div>
    : <Auth updateToken={updateToken} />)
  }

  return (
    <div>
      {protectedViews()}
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous">
    </script>
    </div>
  );
}

export default App;
