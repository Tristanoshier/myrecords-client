import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const CollectionAlbumEdit = (props) => {
    const [editName, setEditName] = useState(props.albumUpdate.name);
    const [editArtist, setEditArtist] = useState(props.albumUpdate.artist);
    const [editYear, setEditYear] = useState(props.albumUpdate.year);

    const collectionAlbumUpdate = () => {
        fetch(`http://localhost:3001/album/collection/update/${props.albumUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({name: editName, artist: editArtist, year: editYear}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => {
            props.fetchCollectionAlbums();
            props.updateOff();
        })
    }

    return (
        <>
        <Modal isOpen={true}>
            <ModalHeader>Edit Album</ModalHeader>
            <ModalBody >
                <Form onSubmit={collectionAlbumUpdate}>
                    <FormGroup>
                        <Label htmlFor="name">Name:</Label>
                        <Input name="name" value={editName} onChange={e => setEditName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="artist">Artist:</Label>
                        <Input name="artist" value={editArtist} onChange={e => setEditArtist(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="year">Year:</Label>
                        <Input name="year" value={editYear} onChange={e => setEditYear(e.target.value)} />
                    </FormGroup>
                    <Button type="submit">Update</Button>
                </Form>
            </ModalBody>
        </Modal>
        </>
    )
}

export default CollectionAlbumEdit;
