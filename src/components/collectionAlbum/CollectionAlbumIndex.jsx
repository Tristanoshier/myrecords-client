import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import CollectionAlbumCreate from './CollectionAlbumCreate';
import CollectionAlbumTable from './CollectionAlbumTable';
import CollectionAlbumEdit from './CollectionAlbumEdit';
import CollectionSearch from './CollectionSearch';

const CollectionAlbumIndex = (props) => {
    const [collectionAlbums, setCollectionAlbums] = useState([]);
    const [filteredAlbums, setFilteredAlbums] = useState([]);
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
                <Col md="12">
                    <h1>Collection</h1>
                    <hr />
                    <br />
                </Col>
                <Col md="12">
                    <CollectionAlbumCreate 
                    fetchCollectionAlbums={fetchCollectionAlbums} token={props.token} />
                </Col>
            </Row>
            <br />
            <br /> 
            <Row>
                <Col md= "12">
                    <CollectionSearch setFilteredAlbums={setFilteredAlbums} filteredAlbums={filteredAlbums} setCollectionAlbums ={setCollectionAlbums} collectionAlbums={collectionAlbums} token={props.token}/>
                </Col>
                <Col md="12">
                    <CollectionAlbumTable 
                    collectionAlbums={collectionAlbums} 
                    editUpdateCollectionAlbum={editUpdateCollectionAlbum} 
                    updateOn={updateOn} 
                    fetchCollectionAlbums={fetchCollectionAlbums}
                    token={props.token}
                    filteredAlbums={filteredAlbums} />
                </Col>
                {updateActive ? <CollectionAlbumEdit albumUpdate={albumUpdate} updateOff={updateOff}
                token={props.token} fetchCollectionAlbums={fetchCollectionAlbums} /> : <></>}
            </Row>
        </Container>
    )
}

export default CollectionAlbumIndex;
