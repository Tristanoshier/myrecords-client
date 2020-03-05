import React, {useState} from 'react';
import Signup from './Signup';
import Login from './Login';
import { Container, Button } from 'reactstrap';

const Auth = (props) => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Container>
          {isLogin ? <Login updateToken={props.updateToken} /> : <Signup updateToken={props.updateToken} />}
          <br />
          <Button onClick= {() => setIsLogin(!isLogin)}>toggle</Button>
        </Container>
    )
}

export default Auth;
