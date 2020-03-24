import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import WishlistAlbumCreate from './WishlistAlbumCreate';
import WishlistAlbumTable from './WishlistAlbumTable';
import WishlistAlbumEdit from './WishlistAlbumEdit';
import WishlistSearch from './WishlistSearch';
import APIURL from '../../helpers/environment';

const WishlistAlbumIndex = (props) => {
    const [wishlistAlbums, setWishlistAlbums] = useState([]);
    const [filteredAlbums, setFilteredAlbums] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [albumUpdate, setAlbumUpdate] = useState({});
    const [createActive, setCreateActive] = useState(false);
    const [albumCreate, setAlbumCreate] = useState({});
    const [backgroundColor, setBackgroundColor] = useState('#000000');

    const fetchWishlistAlbums = () => {
        fetch(`${APIURL}/album/wishlist/find`, {
            method: 'GET',
            headers: new Headers({
                "Content-Type": 'application/json',
                'Authorization': props.token
            })
        }).then(res => res.json())
            .then((albumData) => {
                setWishlistAlbums(albumData.wishlistAlbums)
            })
    }

    const editUpdateWishlistAlbum = (wishlistAlbum) => {
        setAlbumUpdate(wishlistAlbum);
    }

    const editCreateWishlistAlbum = (wishlistAlbum) => {
        setAlbumCreate(wishlistAlbum);
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
        if(wishlistAlbums.length < 1){
            return 'You have 0 albums. Click the plus below to add an album!'
        }else if(wishlistAlbums.length === 1) {
            return `You have ${wishlistAlbums.length} album in your wishlist.`
        }else {
            return `You have ${wishlistAlbums.length} albums in your wishlist.`
        }
    }

    useEffect(() => {
        fetchWishlistAlbums();
    }, []);

    return (
        <Container>
            <Row>
                <Col md="12">
                    <h1 className="main-header">Wishlist</h1>
                    <hr />
                    <h5 className="no-albums-message">{displayNoAlbumsMessage()}</h5>
                    <br />
                </Col>
            </Row>
            <br />
            <Row>
                <Col md="12">
                    <WishlistSearch
                        editCreateWishlistAlbum={editCreateWishlistAlbum}
                        createOn={createOn}
                        setFilteredAlbums={setFilteredAlbums}
                        filteredAlbums={filteredAlbums}
                        setWishlistAlbums={setWishlistAlbums}
                        wishlistAlbums={wishlistAlbums}
                        token={props.token} />
                </Col>
                {createActive ?
                    <WishlistAlbumCreate
                        backgroundColor={backgroundColor}
                        setBackgroundColor={setBackgroundColor}
                        albumCreate={albumCreate}
                        createOff={createOff}
                        fetchWishlistAlbums={fetchWishlistAlbums}
                        token={props.token} />
                    : <></>}

                <Col md="12">
                    <WishlistAlbumTable
                        backgroundColor={backgroundColor}
                        setBackgroundColor={setBackgroundColor}
                        wishlistAlbums={wishlistAlbums}
                        editUpdateWishlistAlbum={editUpdateWishlistAlbum}
                        updateOn={updateOn}
                        fetchWishlistAlbums={fetchWishlistAlbums}
                        token={props.token}
                        filteredAlbums={filteredAlbums} />
                </Col>
                {updateActive ?
                    <WishlistAlbumEdit
                        backgroundColor={backgroundColor}
                        setBackgroundColor={setBackgroundColor}
                        albumUpdate={albumUpdate}
                        updateOff={updateOff}
                        token={props.token}
                        fetchWishlistAlbums={fetchWishlistAlbums} />
                    : <></>}
            </Row>
        </Container>
    )
}

export default WishlistAlbumIndex;
