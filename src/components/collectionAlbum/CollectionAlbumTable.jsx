import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardDeck, CardHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import APIURL from '../../helpers/environment';


const CollectionAlbumTable = (props) => {
    const deleteCollectionAlbum = (collectionAlbum) => {
        fetch(`${APIURL}/album/collection/delete/${collectionAlbum.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => props.fetchCollectionAlbums())
    }

    const collectionAlbumMapper = () => {
        let albums;
        props.filteredAlbums.length === 0 ? albums = props.collectionAlbums : albums = props.filteredAlbums;

        return albums.map((collectionAlbum, index) => {
            return (
                <div className="card-margin" key={index}>
                    <Card>
                        <CardHeader style={{ backgroundColor: collectionAlbum.color }} id="card-header"></CardHeader>
                        <CardBody>
                            <CardTitle>{collectionAlbum.name}</CardTitle>
                            <CardSubtitle>{collectionAlbum.artist}</CardSubtitle>
                            <CardSubtitle>{collectionAlbum.year}</CardSubtitle>
                            <br></br>
                            <FontAwesomeIcon size="lg" className="update-btn" icon={faPencilAlt} onClick={() => { props.editUpdateCollectionAlbum(collectionAlbum); props.updateOn() }} />
                            <FontAwesomeIcon size="lg" className="delete-btn" icon={faTrash} onClick={() => { deleteCollectionAlbum(collectionAlbum) }} />
                        </CardBody>
                    </Card>
                </div>
            )
        })
    }
    return (
        <div className="card-deck display-box">
            <CardDeck>
                {collectionAlbumMapper()}
            </CardDeck>
        </div>
    )
}

export default CollectionAlbumTable;