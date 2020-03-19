import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { CirclePicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import APIURL from '../../helpers/environment';


const WishlistAlbumEdit = (props) => {
    const [editName, setEditName] = useState(props.albumUpdate.name);
    const [editArtist, setEditArtist] = useState(props.albumUpdate.artist);
    const [editYear, setEditYear] = useState(props.albumUpdate.year);
    const [editColor, setEditColor] = useState(props.albumUpdate.color);

    const wishlistAlbumUpdate = () => {
        fetch(`${APIURL}/album/wishlist/update/${props.albumUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({ name: editName, artist: editArtist, year: editYear, color: editColor }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => {
            props.fetchWishlistAlbums();
            props.updateOff();
        })
    }

    const closeUpdateModal = () => {
        props.updateOff();
    }

    return (
        <>
            <Modal isOpen={true}>
                <ModalHeader>Edit Album<FontAwesomeIcon size="lg" icon={faTimes} className="modal-close update-btn" onClick={closeUpdateModal} /></ModalHeader>
                <ModalBody >
                    <Form onSubmit={wishlistAlbumUpdate}>
                        <FormGroup>
                            <Label htmlFor="name">Name:</Label>
                            <Input className="modal-form-bg" name="name" value={editName} onChange={e => setEditName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="artist">Artist:</Label>
                            <Input className="modal-form-bg" name="artist" value={editArtist} onChange={e => setEditArtist(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="year">Year:</Label>
                            <Input className="modal-form-bg" name="year" value={editYear} onChange={e => setEditYear(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="color">Color:</Label>
                            <CirclePicker backgroundColor={props.backgroundColor} onChangeComplete={(color) => setEditColor(color.hex)} />
                        </FormGroup>
                        <Button className="modal-btn" type="submit">Update</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default WishlistAlbumEdit;
