import React, {useState} from 'react';
import {Form, FormGroup, Input, Button, Container, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email && password){
            fetch("http://localhost:3001/user/login", {
                method: 'POST',
                body: JSON.stringify({email: email, password: password}),
                headers: new Headers({
                    'Content-Type' : 'application/json'
                })
            }).then(response => response.json())
            .then(data => props.updateToken(data.sessionToken));
        }else{
            alert('incorrect email or password')
        }   
    }

    return (
        <div>
            <Container style={{margin: 0}}>
                <Row>
                    <Col className="auth-left" md="6">
                    <h1 className="jumbo-title-login">MyRec{<FontAwesomeIcon size="xs" icon={faRecordVinyl}></FontAwesomeIcon>}rds</h1>
                        <Form className= "auth-form" onSubmit={handleSubmit} autoComplete="off">
                            <FormGroup>
                                <Input onChange= {e => setEmail(e.target.value)} name= "email" value={email} placeholder="Email" />
                            </FormGroup>
                            <br />
                            <FormGroup>
                                <Input type="password" onChange= {e => setPassword(e.target.value)} name= "password" value={password} placeholder="Password" />
                            </FormGroup>
                            <br />
                            <Button id ="auth-btn" type="submit">Login</Button>
                            <br />
                            <br />
                            <p className="auth-switch" onClick= {() => props.setIsLogin(!props.isLogin)}>
                            {props.isLogin ? "Don't have an account? Sign up here." : "Already have an account? Login here."}
                            </p>
                        </Form>
                    </Col>
                    <Col className="bg-image" md="6"></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;
