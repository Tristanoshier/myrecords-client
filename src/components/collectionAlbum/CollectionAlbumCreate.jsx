import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const CollectionAlbumCreate = (props) => {
    const [name, setName] = useState('');
    const [artist, setArtist] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //add multer
        if (name && artist && year){
            fetch("http://localhost:3001/album/collection/create", {
                method: 'POST',
                body: JSON.stringify({name: name, artist: artist, year: year}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            }).then(res => res.json())
            .then(() => {
                setName('');
                setArtist('');
                setYear('');
                props.fetchCollectionAlbums();
            })
        }else {
            alert('Please fill out all fields')
        }   
    }

    return (
        <>
            <h3>Add Album</h3>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <FormGroup>
                    <Label htmlFor="name">Name:</Label>
                    <Input name="name" value={name} onChange={e => setName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="artist">Artist:</Label>
                    <Input name="artist" value={artist} onChange={e => setArtist(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="year">Year:</Label>
                    <Input name="year" value={year} onChange={e => setYear(e.target.value)} />
                </FormGroup>
                <Button className="bg-dark" type="submit">Add</Button>
            </Form>
        </>
    )
}

export default CollectionAlbumCreate;
