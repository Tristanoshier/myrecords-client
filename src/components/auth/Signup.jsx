import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

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
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <FormGroup>
                    <Label htmlFor="firstname">First Name:</Label>
                    <Input onChange={e => setFirstname(e.target.value)} name="firstname" value={firstname} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastname">Last Name:</Label>
                    <Input onChange={e => setLastname(e.target.value)} name="lastname" value={lastname} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input onChange={e => setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input onChange={e => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;
