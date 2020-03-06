import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import CollectionAlbumCreate from './CollectionAlbumCreate';
import CollectionAlbumTable from './CollectionAlbumTable';
import CollectionAlbumEdit from './CollectionAlbumEdit';

const CollectionAlbumIndex = (props) => {
    const [collectionAlbums, setCollectionAlbums] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [albumUpdate, setAlbumUpdate] = useState({});

    const fetchCollectionAlbums = () => {
        fetch("http://localhost:3001/album/collection/find", {
            method: 'GET',
            headers: new Headers({
                "Content-Type" : 'application/json',
                'Authorization': props.token
            })
        }).then(res => res.json())
        .then((albumData) => {
            console.log(albumData)
            setCollectionAlbums(albumData.collectionAlbums)
        })
    }

    const editUpdateCollectionAlbum = (collectionAlbum) => {
        setAlbumUpdate(collectionAlbum);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchCollectionAlbums();
    }, []);

    return (
        <Container>
            <Row>
                <Col md="6">
                    <CollectionAlbumCreate fetchCollectionAlbums={fetchCollectionAlbums} token={props.token} />
                </Col>
                <Col md="6">
                    <CollectionAlbumTable collectionAlbums={collectionAlbums} 
                    editUpdateCollectionAlbum={editUpdateCollectionAlbum} 
                    updateOn={updateOn} 
                    fetchCollectionAlbums={fetchCollectionAlbums}
                    token={props.token} />
                </Col>
                {updateActive ? <CollectionAlbumEdit albumUpdate={albumUpdate} updateOff={updateOff}
                token={props.token} fetchCollectionAlbums={fetchCollectionAlbums} /> : <></>}
            </Row>
        </Container>
    )
}

export default CollectionAlbumIndex;
