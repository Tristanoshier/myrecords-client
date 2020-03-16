import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, ModalBody, Modal, ModalHeader} from 'reactstrap';
import { CirclePicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import APIURL from '../../helpers/environment';

const CollectionAlbumCreate = (props) => {
    const [name, setName] = useState('');
    const [artist, setArtist] = useState('');
    const [year, setYear] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#000000')

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && artist && year){
            fetch(`${APIURL}/album/collection/create`, {
                method: 'POST',
                body: JSON.stringify({name: name, artist: artist, year: year, color: backgroundColor}),
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
                props.createOff();
            })
        }else {
            alert('Please fill out all fields')
        }   
    }

    const closeCreateModal = () => {
        props.createOff();
    }

    return (
        <>
        <Modal isOpen={true}>
            <ModalHeader>Add Album<FontAwesomeIcon size="lg" icon={faTimes} className="modal-close update-btn" onClick={closeCreateModal} /></ModalHeader>
            <ModalBody >
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
                <FormGroup>
                    <Label htmlFor="color">Color:</Label>
                    <CirclePicker backgroundColor={backgroundColor} onChangeComplete={(color)=> setBackgroundColor(color.hex)} />
                </FormGroup>
                <Button type="submit">Add</Button>
            </Form>
            </ModalBody>
        </Modal>
        </>
    )
}

export default CollectionAlbumCreate;
