import React, { useState } from 'react';

import { Form, FormGroup, Input, Button, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import APIURL from '../../helpers/environment';
import Alert from './Alert';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [incorrectPassword, setIncorrectPassword] = useState(false);
    const [emailNotExist, setEmailNotExist] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.error === 'bad gateway') {
                    console.log("hit");
                    setIncorrectPassword(true);
                }
                if (data.error === 'failed to authenticate') {
                    setEmailNotExist(true);
                }
                props.updateToken(data.sessionToken);
            })
    }

    return (
        <div className="overflow">
            <Container style={{ margin: 0 }}>
                <Row>
                    <Col className="auth-left" md="6">
                        <h1 className="jumbo-title-login">MyRec{<FontAwesomeIcon size="xs" icon={faRecordVinyl}></FontAwesomeIcon>}rds</h1>
                        <div className="bg-on-mobile"></div>
                        <Form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
                            <FormGroup>
                                <Input className="auth-form-bg" onChange={e => setEmail(e.target.value)} name="email" value={email} placeholder="Email" />
                            </FormGroup>
                            <br />
                            <FormGroup>
                                <Input className="auth-form-bg" type="password" onChange={e => setPassword(e.target.value)} name="password" value={password} placeholder="Password" />
                            </FormGroup>
                            <br />
                            <Button id="auth-btn" type="submit">Login</Button>
                            <br />
                            <br />
                            <p className="auth-switch" onClick={() => props.setIsLogin(!props.isLogin)}>
                                {props.isLogin ? "Don't have an account? Sign up here." : "Already have an account? Login here."}
                            </p>
                        </Form>
                        {incorrectPassword === true ? <Alert incorrectPassword={incorrectPassword} setIncorrectPassword={setIncorrectPassword} /> : null}
                        {emailNotExist === true ? <Alert emailNotExist={emailNotExist} setEmailNotExist={setEmailNotExist} /> : null}
                    </Col>
                    <Col className="bg-image" md="6"></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;
