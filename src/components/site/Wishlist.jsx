import React from 'react';
import WishlistAlbumIndex from '../wishlistAlbum/WishlistAlbumIndex'

const Wishlist = (props) => {
    return (
        <div className="bg">
            <WishlistAlbumIndex token={props.token} />
        </div>
    )
}

export default Wishlist;
