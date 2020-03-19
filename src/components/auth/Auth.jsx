import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import { Container } from 'reactstrap';


const Auth = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container style={{ margin: 0 }}>
      {isLogin ?
        <Login isLogin={isLogin} setIsLogin={setIsLogin} updateToken={props.updateToken} /> :
        <Signup isLogin={isLogin} setIsLogin={setIsLogin} updateToken={props.updateToken} />}
    </Container>
  )
}

export default Auth;
