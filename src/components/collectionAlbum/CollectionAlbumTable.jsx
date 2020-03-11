import React from 'react';
import {Container,Col, Row, Button, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardDeck} from 'reactstrap';

const CollectionAlbumTable = (props) => {
    const deleteCollectionAlbum = (collectionAlbum) => {
        fetch(`http://localhost:3001/album/collection/delete/${collectionAlbum.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type' : 'application/json',
                'Authorization' : props.token
            })
        }).then(() => props.fetchCollectionAlbums())
    }

    const collectionAlbumMapper = () => {
        let albums;
        props.filteredAlbums.length === 0 ? albums = props.collectionAlbums : albums = props.filteredAlbums;

        return albums.map((collectionAlbum, index) => {
            return (
                <div key={index}>
                <Card>
                    {/* <CardImg top width="100%" src="" alt="Card image cap" /> */}
                    <CardBody>
                    <CardTitle>{collectionAlbum.name}</CardTitle>
                    <CardSubtitle>{collectionAlbum.artist}</CardSubtitle>
                    <CardSubtitle>{collectionAlbum.year}</CardSubtitle>
                    <Button className="bg-dark" onClick={() => {props.editUpdateCollectionAlbum(collectionAlbum); props.updateOn()}}>Update</Button>
                    <Button color="danger" onClick={() => {deleteCollectionAlbum(collectionAlbum)}}>Delete</Button> 
                    </CardBody>
                </Card>
                
                </div>
            )
        })
    }
    return (
        <div className= "card-deck display-box">
            <CardDeck>
                {collectionAlbumMapper()}
            </CardDeck>
        </div> 
    )
}

export default CollectionAlbumTable;