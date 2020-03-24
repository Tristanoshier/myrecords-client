import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CollectionAlbumCreate from './CollectionAlbumCreate';
import CollectionAlbumTable from './CollectionAlbumTable';
import CollectionAlbumEdit from './CollectionAlbumEdit';
import CollectionSearch from './CollectionSearch';
import APIURL from '../../helpers/environment';

const CollectionAlbumIndex = (props) => {
    const [collectionAlbums, setCollectionAlbums] = useState([]);
    const [filteredAlbums, setFilteredAlbums] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [albumUpdate, setAlbumUpdate] = useState({});
    const [createActive, setCreateActive] = useState(false);
    const [albumCreate, setAlbumCreate] = useState({});
    const [backgroundColor, setBackgroundColor] = useState('#000000');

    const fetchCollectionAlbums = () => {
        fetch(`${APIURL}/album/collection/find`, {
            method: 'GET',
            headers: new Headers({
                "Content-Type": 'application/json',
                'Authorization': props.token
            })
        }).then(res => res.json())
            .then((albumData) => {
                setCollectionAlbums(albumData.collectionAlbums)
            })
    }

    const editUpdateCollectionAlbum = (collectionAlbum) => {
        setAlbumUpdate(collectionAlbum);
    }

    const editCreateCollectionAlbum = (collectionAlbum) => {
        setAlbumCreate(collectionAlbum);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    const createOn = () => {
        setCreateActive(true);
    }

    const createOff = () => {
        setCreateActive(false)
    }

    const displayNoAlbumsMessage = () => {
        if(collectionAlbums.length < 1){
            return 'You have 0 albums. Click the plus below to add an album!'
        }else if(collectionAlbums.length === 1) {
            return `You have ${collectionAlbums.length} album in your collection.`
        }else {
            return `You have ${collectionAlbums.length} albums in your collection.`
        }
    }

    useEffect(() => {
        fetchCollectionAlbums();
    }, []);

    return (
        <Container>
            <Row>
                <Col md="12">
                    <h1 className="main-header">Collection</h1>
                    <hr />
                    <h5 className="no-albums-message">{displayNoAlbumsMessage()}</h5>
                    <br />
                </Col>
            </Row>
            <br />
            <Row>
                <Col md="12">
                    <CollectionSearch
                        editCreateCollectionAlbum={editCreateCollectionAlbum}
                        createOn={createOn}
                        setFilteredAlbums={setFilteredAlbums}
                        filteredAlbums={filteredAlbums}
                        setCollectionAlbums={setCollectionAlbums}
                        collectionAlbums={collectionAlbums}
                        token={props.token} />
                </Col>
                {createActive ?
                    <CollectionAlbumCreate
                        backgroundColor={backgroundColor}
                        setBackgroundColor={setBackgroundColor}
                        albumCreate={albumCreate}
                        createOff={createOff}
                        fetchCollectionAlbums={fetchCollectionAlbums}
                        token={props.token} />
                    : <></>}

                <Col md="12">
                    <CollectionAlbumTable
                        backgroundColor={backgroundColor}
                        setBackgroundColor={setBackgroundColor}
                        collectionAlbums={collectionAlbums}
                        editUpdateCollectionAlbum={editUpdateCollectionAlbum}
                        updateOn={updateOn}
                        fetchCollectionAlbums={fetchCollectionAlbums}
                        token={props.token}
                        filteredAlbums={filteredAlbums} />
                </Col>
                {updateActive ?
                    <CollectionAlbumEdit
                        backgroundColor={backgroundColor}
                        setBackgroundColor={setBackgroundColor}
                        albumUpdate={albumUpdate}
                        updateOff={updateOff}
                        token={props.token}
                        fetchCollectionAlbums={fetchCollectionAlbums} />
                    : <></>}
            </Row>
        </Container>
    )
}

export default CollectionAlbumIndex;
