import React, {useState} from 'react';
import {Form, FormGroup, Input, Button, Row, Col, Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

const Signup = (props) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        if(firstname && lastname && email && password){
            fetch('http://localhost:3001/user/signup', {
                method: 'POST',
                body: JSON.stringify({firstname: firstname, lastname: lastname, email: email, password: password}),
                headers: new Headers({
                    'Content-Type' : 'application/json'
                })
            })
            .then(response => response.json())
            .then(data => props.updateToken(data.sessionToken))
        }else{
            alert('Please fill out all fields')
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col className="auth-left" md="6">
                    <h1 className="jumbo-title-signup">MyRec{<FontAwesomeIcon size="xs" icon={faRecordVinyl}></FontAwesomeIcon>}rds</h1>
                        <Form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
                            <FormGroup>
                                <Input onChange={e => setFirstname(e.target.value)} name="firstname" value={firstname} placeholder="First Name" />
                            </FormGroup>
                            <br />
                            <FormGroup>
                                <Input onChange={e => setLastname(e.target.value)} name="lastname" value={lastname} placeholder="Last Name" />
                            </FormGroup>
                            <br />
                            <FormGroup>
                                <Input onChange={e => setEmail(e.target.value)} name="email" value={email} placeholder="Email" />
                            </FormGroup>
                            <br />
                            <FormGroup>
                                <Input onChange={e => setPassword(e.target.value)} name="password" value={password} placeholder="Password" />
                            </FormGroup>
                            <br />
                            <Button id= "auth-btn" type="submit">Signup</Button>
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

export default Signup;
