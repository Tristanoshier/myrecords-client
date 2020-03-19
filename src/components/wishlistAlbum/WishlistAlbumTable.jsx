import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardDeck, CardHeader} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import APIURL from '../../helpers/environment';


const WishlistAlbumTable = (props) => {
    console.log(props)
    const deleteWishlistAlbum = (wishlistAlbum) => {
        fetch(`${APIURL}/album/wishlist/delete/${wishlistAlbum.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type' : 'application/json',
                'Authorization' : props.token
            })
        }).then(() => props.fetchWishlistAlbums())
    }

    const wishlistAlbumMapper = () => {
        let albums;
        props.filteredAlbums.length === 0 ? albums = props.wishlistAlbums : albums = props.filteredAlbums;
        if(props.wishlistAlbums.length === 0){
            break;
        }else{
        return albums.map((wishlistAlbum, index) => {
            console.log(wishlistAlbum)
            return (
                <div className="card-margin" key={index}>
                <Card>
                    <CardHeader style={{backgroundColor: wishlistAlbum.color}} id="card-header"></CardHeader>
                    <CardBody>
                    <CardTitle>{wishlistAlbum.name}</CardTitle>
                    <CardSubtitle>{wishlistAlbum.artist}</CardSubtitle>
                    <CardSubtitle>{wishlistAlbum.year}</CardSubtitle>
                    <br></br>
                    <FontAwesomeIcon size="lg" className="update-btn" icon={faPencilAlt} onClick={() => {props.editUpdateWishlistAlbum(wishlistAlbum); props.updateOn()}}/>
                    <FontAwesomeIcon size="lg" className="delete-btn" icon={faTrash} onClick={() => {deleteWishlistAlbum(wishlistAlbum)}}/>
                    </CardBody>
                </Card>
                </div>
            )
        })
        }
    }

    return (
        <div className= "card-deck display-box">
            <CardDeck>
                {wishlistAlbumMapper()}
            </CardDeck>
        </div> 
    )
}

export default WishlistAlbumTable;