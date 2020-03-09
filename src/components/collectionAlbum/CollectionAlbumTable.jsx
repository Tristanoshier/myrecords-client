import React from 'react';
import {Table, Button} from 'reactstrap';

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
                <tr key={index}>
                    <td>{collectionAlbum.name}</td>
                    <td>{collectionAlbum.artist}</td>
                    <td>{collectionAlbum.year}</td>
                    <td>
                        <Button className="bg-dark" onClick={() => {props.editUpdateCollectionAlbum(collectionAlbum); props.updateOn()}}>Update</Button>
                        <br />
                        <br />
                        <Button color="danger" onClick={() => {deleteCollectionAlbum(collectionAlbum)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <>
        <h3>Albums</h3>
        <hr />
        <Table striped>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {collectionAlbumMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default CollectionAlbumTable;